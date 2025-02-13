import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].theme,
          headerShown: false,
          tabBarButton: (props) => <HapticTab {...props} />,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              borderTopWidth: 2, // Remove the top border for a cleaner look
              elevation: 0, // Remove shadow on Android
            },
            default: {
              backgroundColor: Colors[colorScheme ?? 'light'].same,
              paddingBottom: 15,
              borderTopWidth: 1,
              borderColor:Colors[colorScheme ?? 'light'].border, // Remove the top border for a cleaner look
              elevation: 0, // Remove shadow on Android
              height: 60,
              // marginVertical:10,
              // backgroundColor:'white'
            },
          }),
          tabBarItemStyle: {
            position: 'relative',
          },
          tabBarLabelStyle: {
            marginTop: 3,
            fontSize: 11,
            fontWeight: 'bold',
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Jobs',
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? {
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ translateY: -10 }],
                borderColor:Colors[colorScheme ?? 'light'].border, // Remove the top border for a cleaner look
                borderWidth:1,
                backgroundColor: Colors[colorScheme ?? 'light'].bgSecondary,
                padding: 4,
                borderRadius: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              } : null}>
                <IconSymbol
                  size={24}
                  name={focused ? 'briefcase' : 'briefcase-outline'}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmarks',
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? {
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ translateY: -10 }],
                borderColor:Colors[colorScheme ?? 'light'].border, // Remove the top border for a cleaner look
                borderWidth:1,
                backgroundColor: Colors[colorScheme ?? 'light'].bgSecondary,
                padding: 4,
                borderRadius: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              } : null}>
                <IconSymbol
                  size={24}
                  name={focused ? 'bookmarks' : 'bookmarks-outline'}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
