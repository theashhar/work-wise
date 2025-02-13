import { Image, View, Platform, Text, TextInput, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import JobCard from '@/components/JobCard';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (<>
    <AppHeader Screen='Jobs' />
    <SafeAreaView>
      {/* Search */}
      <View className="z-20 p-4 my-0 shadow-sm rounded-b-3xl border-b dark:bg-indigo-800 bg-indigo-400">
        <TextInput
          className="w-full px-6 h-16 my-0 border dark:border-indigo-400 border-indigo-800 dark:bg-neutral-800  bg-white color-neutral-800 dark:color-neutral-200 rounded-3xl"
          placeholder="Search contacts..."
          // value={searchQuery}
          placeholderTextColor={Colors[colorScheme ?? 'light'].invertLight}
        // onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView>

        <View className='h-8 bg-transparent' />
        <JobCard title='9elecallers wanted asd as  asd asd sad' location='Ameerpet, Hyderabad' salary='₹12000 - ₹16000' phone='8465809861' jobHours='Full Time' Experience='Any Experience' onPress={{}} />
        <JobCard title='Telecallers wanted' location='Ameerpet, Hyderabad' salary='₹12000 - ₹16000' phone='8465809861' jobHours='Full Time' Experience='Any Experience' onPress={{}} />

      </ScrollView>

    </SafeAreaView>
  </>);
}
