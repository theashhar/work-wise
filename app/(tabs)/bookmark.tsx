import AppHeader from '@/components/Header';
import JobCard from '@/components/JobCard';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function Bookmark() {
  const bookmarkedJobs = useSelector((state) => state.bookmarks.bookmarkedJobs);

  return (
    <>
      <AppHeader Screen="Bookmarks" bookmark={true} />
      <View className="flex-1 dark:bg-neutral-900 bg-neutral-100">
        {bookmarkedJobs.length > 0 ? (
          <FlatList
            data={bookmarkedJobs}
            renderItem={({ item }) => (
              <JobCard
                id={item.id}
                title={item.title}
                description={item.description}
                location={item.location}
                salary={item.salary}
                phone={item.phone}
                jobHours={item.jobHours}
                Experience={item.Experience}
                onPress={() => console.log('Job pressed:', item.title)}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
          />
        ) : (
          <Text className="text-neutral-700 dark:text-neutral-300 text-center mt-5">
            No bookmarked jobs
          </Text>
        )}
      </View>
    </>
  );
}