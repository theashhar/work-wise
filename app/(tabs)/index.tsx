import { Image, View, Platform, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (<>
    <AppHeader Screen='Jobs' />
    <SafeAreaView>
      <View className="p-4 my-0 shadow-sm border-b dark:bg-indigo-800 bg-indigo-400">
        <TextInput
          className="w-full p-6 h-16 my-0 border dark:border-indigo-400 border-indigo-800 dark:bg-neutral-800  bg-white color-neutral-800 dark:color-neutral-200 rounded-3xl"
          placeholder="Search contacts..."
          // value={searchQuery}
          placeholderTextColor={Colors[colorScheme ?? 'light'].invertLight}
        // onChangeText={setSearchQuery}
        />
      </View>
      <Text style={{ color: 'white' }}>
        Jobs
      </Text>
    </SafeAreaView>
  </>);
}
