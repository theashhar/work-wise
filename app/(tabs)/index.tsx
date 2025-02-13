import AppHeader from '@/components/Header';
import JobCard from '@/components/JobCard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useGetJobsQuery } from '@/reduxStore/slices/JobsSlice';
import React, { useState } from 'react';
import { FlatList, View, TextInput, ActivityIndicator, SafeAreaView, Text } from 'react-native';

const JobsScreen = () => {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const { data: jobs = {}, isLoading, isFetching, error } = useGetJobsQuery(page);

  const filteredJobs = jobs?.results?.filter((job) =>
    job?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  ) ?? [];

  console.log('data --- ', jobs?.results);

  // Load more jobs when the user scrolls to the end
  const loadMoreJobs = () => {
    if (!isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  // Render a loading indicator at the bottom of the list
  const renderFooter = () => {
    if (!isFetching) return null;
    return (
      <View className="py-4">
        <ActivityIndicator size="large" color="#FFBB00" />
      </View>
    );
  };

  // Render each job item
  const renderJobItem = ({ item }) => (
    <JobCard
      title={item?.title ?? 'No Title'}
      description={item?.other_details || item?.title || 'No Description'}
      location={item?.primary_details?.Place || 'Unknown Location'}
      salary={item?.primary_details?.Salary || 'Not Provided'}
      phone={item?.whatsapp_no || 'N/A'}
      jobHours={item?.job_hours || 'N/A'}
      Experience={item?.primary_details?.Experience || 'No Experience Required'}
      onPress={() => {
        console.log('Job pressed:', item.title);
      }}
    />
  );

  return (
    <>
      <AppHeader Screen="Jobs" />
      <SafeAreaView>
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
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          onEndReached={loadMoreJobs}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 190 }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={<Text className="text-neutral-700 text-center mt-5">No Jobs</Text>}
        />

        {/* Error Message */}
        {error && <View className="p-4"><Text className="text-red-500 text-center">Error loading jobs</Text></View>}
      </SafeAreaView>
    </>
  );
};

export default JobsScreen;
