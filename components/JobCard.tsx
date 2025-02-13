import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const JobCard = ({ title, location, salary, phone, jobHours, onPress }) => {
  const colorScheme = useColorScheme()
    const [isBookmarked, setIsBookmarked] = useState(false);
  
  return (
    <TouchableOpacity
      className="p-4 my-2 mx-4 rounded-2xl shadow-sm dark:bg-neutral-800 bg-white border dark:border-neutral-700 border-neutral-200"
      onPress={onPress}
    >
        <View className='flex flex-row items-center gap-2'>
            <View className='flex flex-row items-center justify-center w-12 h-12 rounded-2xl border dark:border-slate-400 border-slate-800 bg-slate-100 dark:bg-slate-800' />
            <View>
                <Text className="text-lg font-bold dark:text-neutral-100 text-neutral-800">
                    {title}
                </Text>
                <Text className="text-sm dark:text-neutral-300 text-neutral-600">
                {title}
                </Text>
            </View>
            <TouchableOpacity className='p-3  absolute -right-2 -top-2' onPress={() => {setIsBookmarked((prev) => !prev)}}>
                <MaterialCommunityIcons name={isBookmarked ? "bookmark" : "bookmark-outline"} size={24} color={isBookmarked ? "#F9C026" : "white"} />
            </TouchableOpacity>
        </View>

      {/* Location */}
      <View className="flex flex-row items-center p-2">
        <MaterialIcons name='location-on' size={16}  color={colorScheme === 'dark' ? 'white' : 'black'}/>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
           {location}
        </Text>
      </View>7
      {/* tags */}
      <View className="flex flex-row gap-2 flex-wrap items-center  p-2">
      <View className=" px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md">
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
           {jobHours}
        </Text>
      </View>
      <View className=" px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md">
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
           {jobHours}
        </Text>
      </View>
      </View>
      {/* border */}
      <View className=" h-[0.7px] dark:bg-neutral-500 bg-neutral-300 my-3 "
      />
      {/* Salary */}
      <View className=" absolute right-4 bottom-3 flex flex-row items-center gap-3 mt-1">
      <MaterialCommunityIcons name='cash-multiple' size={20}  color='#F9C026'/>
        <Text className="text-base font-bold  text-amber-400   ">
           {salary}
        </Text>
      </View>

      {/* Phone */}
      <View className="flex flex-row items-center mt-1 gap-1">
      <MaterialCommunityIcons name='phone' size={15} color={colorScheme === 'dark' ? 'white' : 'black'}/>
        <Text className="text-sm dark:text-neutral-300 text-neutral-600">
           {phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;