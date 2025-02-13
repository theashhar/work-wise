import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Bookmark() {
  return (<SafeAreaView>
    <Text style={{color:'white'}}>
    Bookmark
    </Text>
    <Text style={{color:'white'}}>
    Bookmark
    </Text>
  </SafeAreaView>);
}
