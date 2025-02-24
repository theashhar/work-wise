import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reduxStore';
import { toggleBookmark } from '@/reduxStore/slices/bookmarksSlice';
import { router } from 'expo-router';

// Define the type for the JobCard props
type JobCardProps = {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: string;
  phone: string;
  jobHours: string;
  Experience: string;
  job: object;
};

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  description,
  location,
  salary,
  phone,
  jobHours,
  Experience,
  job,
}) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const bookmarkedJobs = useSelector((state: RootState) => state.bookmarks.bookmarkedJobs);
  const isBookmarked = bookmarkedJobs.some((job : any) => job.id === id);

  const handleBookmark = () => {
    dispatch(
      toggleBookmark({
        id,
        title,
        description,
        location,
        salary,
        phone,
        jobHours,
        Experience,
        job
      })
    );
  };

  // Extract the first letter of the job title
  const firstLetter = title.charAt(0).toUpperCase();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="p-4 my-2 mx-4 rounded-2xl shadow-sm dark:bg-neutral-800 bg-white border dark:border-neutral-700 border-neutral-200"
      onPress={() =>
         router.push({ pathname: '/(main)/jobDetails', params: { job: encodeURIComponent(JSON.stringify(job)) }})}
 
         >
      {/* First Letter and Title Section */}
      <View className="flex flex-row items-center gap-2">
        {/* First Letter Circle */}
        <View className="flex flex-row items-center justify-center w-12 h-12 rounded-2xl border dark:border-slate-500 border-slate-800 bg-slate-100 dark:bg-slate-800">
          <Text className="text-xl font-bold dark:text-neutral-100 text-neutral-800">
            {firstLetter}
          </Text>
        </View>

        {/* Job Title and Subtitle */}
        <View className="w-3/5">
          <Text
            className="text-lg font-bold dark:text-neutral-100 text-neutral-800"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text
            className="text-xs dark:text-neutral-300 text-neutral-600"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>

        {/* Bookmark Icon */}
        <TouchableOpacity className="p-3 absolute -right-2 -top-2" onPress={handleBookmark}>
          <MaterialCommunityIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color={isBookmarked ? '#F9C026' : colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {/* Location Section */}
      <View className="flex flex-row items-center p-2 mt-4">
        <MaterialIcons name="location-on" size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">{location}</Text>
      </View>

      {/* Tags Section */}
      <View className="flex flex-row gap-2 flex-wrap items-center p-2">
        <View className="px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md">
          <Text className="text-sm dark:text-neutral-300 text-neutral-600">{jobHours}</Text>
        </View>
        <View className="px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md">
          <Text className="text-sm dark:text-neutral-300 text-neutral-600">{Experience}</Text>
        </View>
      </View>

      {/* Divider */}
      <View className="h-[0.7px] dark:bg-neutral-500 bg-neutral-300 my-6" />

      {/* Salary Section */}
      <View className="w-[180px] absolute right-4 bottom-4 flex flex-row justify-end items-center gap-3 mt-1">
        <MaterialCommunityIcons name="cash-multiple" size={20} color="#F9C026" />
        <Text className="text-base font-bold text-amber-400 text-right" numberOfLines={1} ellipsizeMode="tail">
          {salary}
        </Text>
      </View>

      {/* Phone Section */}
      <View className="flex flex-row items-center mt-1 gap-1">
        <MaterialCommunityIcons name="phone" size={15} color={colorScheme === 'dark' ? 'white' : 'black'} />
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
