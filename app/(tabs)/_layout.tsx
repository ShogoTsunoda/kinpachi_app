import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'コミュニティ',
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '設定',
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
