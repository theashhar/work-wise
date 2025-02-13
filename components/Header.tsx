import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { router } from 'expo-router';

export default function AppHeader({ Screen, home = true}: { Screen: string, home?:boolean }) {
  const colorScheme = useColorScheme();

  return (<>
    <SafeAreaView className='w-full h-36 -mb-12  flex flex-row items-start py-6 dark:bg-indigo-800 bg-indigo-400 '>
      <View className='flex flex-row items-center w-full gap-2 px-8'>
        <Image source={require('../assets/images/logoIcon.png')} className='w-9 h-10'  resizeMode='contain' />
        <Text className='text-3xl mt-2 font-bold color-white'>{Screen}</Text>

      </View>
      

    </SafeAreaView>
      {/* <View className='h-[1px] bg-neutral-300 dark:bg-neutral-700 ' /> */}
  </>);
}

