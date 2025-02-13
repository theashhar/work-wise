import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/Header';

export default function HomeScreen() {
  return (<>
  <AppHeader Screen='Jobs'/>
  <SafeAreaView>
    <Text className='' style={{color:'white'}}>
    Jobs
    </Text>
    <Text style={{color:'white'}}>
    Jobs
    </Text>
  </SafeAreaView>
  </>);
}
