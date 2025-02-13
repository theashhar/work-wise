import AppHeader from '@/components/Header';
import JobCard from '@/components/JobCard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useGetJobsQuery } from '@/reduxStore/slices/JobsSlice';
import React, { useState, useEffect } from 'react';
import { FlatList, View, TextInput, ActivityIndicator, SafeAreaView, Text } from 'react-native';

const JobsScreen = () => {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: jobs = {}, isLoading, isFetching, error } = useGetJobsQuery(page);

  const filteredJobs = jobs?.results?.filter((job) =>
    job?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  ) ?? [];

  // Log which page is being fetched in real-time
  useEffect(() => {
    console.log(`Fetching page: ${page}`);
  }, [page]);

  // Stop loading more if no more jobs are available
  useEffect(() => {
    if (jobs?.hasMore === false) {
      setHasMore(false);
      console.log('No more jobs to load');
    }
  }, [jobs]);
  

  // Load more jobs when the user scrolls to the end
  const loadMoreJobs = () => {
    if (!isFetching && hasMore && page < 3) {  // Limit page to 3
      setPage((prev) => prev + 1);
    } else if (page >= 3) {
      setHasMore(false);
      console.log('Reached last page. No more jobs to load.');
    }
  };
  
  
  // Render a footer: Loader when fetching, "No More Jobs" when exhausted
  const renderFooter = () => {
    if (!hasMore) {
      return <Text className="text-center text-gray-500 py-4">No more jobs to load</Text>;
    }
    if (isFetching) {
      return (
        <View className="py-4">
          <ActivityIndicator size="large" color="#FFBB00" />
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <AppHeader Screen="Jobs" />
      <View>
        {/* Search Bar */}
        <View className="z-20 p-4 my-0 shadow-sm rounded-b-3xl border-b dark:bg-indigo-800 bg-indigo-400">
          <TextInput
            className="w-full px-6 h-16 my-0 border dark:border-indigo-400 border-indigo-800 dark:bg-neutral-800 bg-white text-neutral-800 dark:text-neutral-200 rounded-3xl"
            placeholder="Search jobs..."
            placeholderTextColor={Colors[colorScheme ?? 'light'].invertLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Job List */}
        <FlatList
          data={filteredJobs}
          renderItem={({ item }) => (
            <JobCard
              id={item.id} 
              title={item?.title ?? 'No Title'}
              description={item?.other_details || item?.title || 'No Description'}
              location={item?.primary_details?.Place || 'Unknown Location'}
              salary={item?.primary_details?.Salary || 'Not Provided'}
              phone={item?.whatsapp_no || 'N/A'}
              jobHours={item?.job_hours || 'N/A'}
              Experience={item?.primary_details?.Experience || 'No Experience Required'}
              onPress={() => console.log('Job pressed:', item.title)}
              onPressBookMark={() => console.log('Bookmarked:', item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={loadMoreJobs}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 190 }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={
            <Text className="text-neutral-700 dark:text-neutral-300 text-center mt-5">
              {searchQuery ? 'No matching jobs found' : 'No Jobs'}
            </Text>
          }
        />

        {/* Error Message */}
        {error && <View className="p-4"><Text className="text-red-500 text-center">Error loading jobs</Text></View>}
      </View>
    </>
  );
};

export default JobsScreen;
