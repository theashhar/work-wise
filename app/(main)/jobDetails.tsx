import React from 'react';
import { View, Text, ScrollView, Image, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/Header';

const JobDetailsScreen = () => {
  const { job } = useLocalSearchParams(); // Get the job data from navigation params
  const parsedJob = JSON.parse(job); // Parse the job data
  const colorScheme = useColorScheme();

  return (<>
    {/* <SafeAreaView> */}
        <AppHeader Screen={parsedJob.title} bookmark={true} />
    {/* </SafeAreaView> */}
    <ScrollView className="flex-1 mt-2 pb-10 dark:bg-neutral-900 bg-neutral-100 p-4">
      {/* Job Title */}
      <Text className="text-xl font-bold dark:text-neutral-100 text-neutral-800 mb-4">
        {parsedJob.title}
      </Text>

      {/* Job Image */}
      {parsedJob.creatives?.length > 0 && (
        <Image
          source={{ uri: parsedJob.creatives[0].file }}
          className="w-full h-48 rounded-lg mb-4"
          resizeMode="cover"
        />
      )}

      {/* Job Details */}
      <View className="mb-4">
        <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 mb-2">
          Job Details
        </Text>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
          {parsedJob.other_details}
        </Text>
      </View>

      {/* Primary Details */}
      <View className="mb-4">
        <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 mb-2">
          Primary Details
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-sm dark:text-neutral-300 text-neutral-600">
            Location: {parsedJob.primary_details?.Place}
          </Text>
          <Text className="text-sm dark:text-neutral-300 text-neutral-600">
            Salary: {parsedJob.primary_details?.Salary}
          </Text>
        </View>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
          Experience: {parsedJob.primary_details?.Experience}
        </Text>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
          Job Type: {parsedJob.job_hours}
        </Text>
      </View>

      {/* Contact Details */}
      <View className="mb-4">
        <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 mb-2">
          Contact Details
        </Text>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
          Phone: {parsedJob.whatsapp_no}
        </Text>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
          Company: {parsedJob.company_name}
        </Text>
      </View>

      {/* Call to Action */}
      <TouchableOpacity
        className="bg-amber-400 p-4 rounded-lg items-center m   b-10"
        onPress={() => Linking.openURL(`tel:${parsedJob.whatsapp_no}`)}
      >
        <Text className="text-lg font-bold text-neutral-800">📞 Call HR</Text>
      </TouchableOpacity>
    </ScrollView>
    </>);
};

export default JobDetailsScreen;