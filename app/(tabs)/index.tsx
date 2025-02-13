import { View, TextInput, FlatList } from 'react-native'; 
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import JobCard from '@/components/JobCard';
import { jobData } from '@/constants/dummy';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobData?.results?.filter((job) =>
    job?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  ) ?? [];

  return (
    <>
      <AppHeader Screen='Jobs' />
      <SafeAreaView>
        {/* Search Bar */}
        <View className="z-20 p-4 my-0 shadow-sm rounded-b-3xl border-b dark:bg-indigo-800 bg-indigo-400">
          <TextInput
            className="w-full px-6 h-16 my-0 border dark:border-indigo-400 border-indigo-800 dark:bg-neutral-800 bg-white color-neutral-800 dark:color-neutral-200 rounded-3xl"
            placeholder="Search jobs..."
            placeholderTextColor={Colors[colorScheme ?? 'light'].invertLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {/* Job List */}
        <FlatList
          data={filteredJobs}
          keyExtractor={(job) => job?.id?.toString() ?? Math.random().toString()}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 190 }}
          renderItem={({ item: job }) => (
            <JobCard 
              title={job?.title ?? 'No Title'}
              description={job?.other_details || job?.title || 'No Description'}
              location={job?.primary_details?.Place || 'Unknown Location'}
              salary={job?.primary_details?.Salary || 'Not Provided'}
              phone={job?.whatsapp_no || 'N/A'}
              jobHours={job?.job_hours || 'N/A'}
              Experience={job?.primary_details?.Experience || 'No Experience Required'}
              onPress={() => {}}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}
