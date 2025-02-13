import React from 'react';
import { View, Text, ScrollView, Image, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AppHeader from '@/components/Header';

const JobDetailsScreen = () => {
  const { job } = useLocalSearchParams(); // Get the job data from navigation params
  const parsedJob = JSON.parse(job); // Parse the job data
  const colorScheme = useColorScheme();

  return (
    <>
      {/* Header */}
      <AppHeader Screen={parsedJob.title} bookmark={true} />

      {/* Scrollable Content */}
      <ScrollView className="flex-1 mt-2 pb-10 dark:bg-neutral-900 bg-neutral-100 p-4">

        {/* Job Title */}
        <View className="flex-row items-center mb-4">
          {/* <MaterialIcons
            name="work"
            size={24}
            color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
          /> */}
          <Text className="text-xl font-bold dark:text-neutral-100 text-neutral-800 ml-2">
            {parsedJob.title}
          </Text>
        </View>

        {/* Job Image */}
        {parsedJob.creatives?.length > 0 && (
          <Image
            source={{ uri: parsedJob.creatives[0].file }}
            className="w-full min-h-64 max-h-80 rounded-lg mb-4"
            resizeMode="contain"
          />
        )}

        {/* Job Details Section */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialIcons
              name="description"
              size={20}
              color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
            />
            <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 ml-2">
              Job Details
            </Text>
          </View>
          <Text className="text-sm dark:text-neutral-300 text-neutral-600">
            {parsedJob.other_details}
          </Text>
        </View>

        {/* Primary Details Section */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialIcons
              name="info"
              size={20}
              color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
            />
            <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 ml-2">
              Primary Details
            </Text>
          </View>
          <View className="space-y-2">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="map-marker"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Location: {parsedJob.primary_details?.Place}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="cash"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Salary: {parsedJob.primary_details?.Salary}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="briefcase"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Experience: {parsedJob.primary_details?.Experience}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="clock"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Job Type: {parsedJob.job_hours}
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Details Section */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialIcons
              name="contact-phone"
              size={20}
              color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
            />
            <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800 ml-2">
              Contact Details
            </Text>
          </View>
          <View className="space-y-2">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="phone"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Phone: {parsedJob.whatsapp_no}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="office-building"
                size={16}
                color={colorScheme === 'dark' ? '#F9C026' : '#FFBB00'}
              />
              <Text className="text-sm dark:text-neutral-300 text-neutral-600 ml-2">
                Company: {parsedJob.company_name}
              </Text>
            </View>
          </View>
        </View>

        {/* Call to Action Button */}
        <TouchableOpacity
          className="bg-amber-400 p-4 rounded-lg items-center mb-10"
          onPress={() => Linking.openURL(`tel:${parsedJob.whatsapp_no}`)}
        >
          <Text className="text-lg font-bold text-neutral-800">📞 Call HR</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default JobDetailsScreen;