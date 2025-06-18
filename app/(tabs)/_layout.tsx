import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#487eb0',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 6 },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';
          if (route.name === 'design') iconName = 'images-outline';
          if (route.name === 'booking') iconName = 'calendar-outline';
          if (route.name === 'payment') iconName = 'card-outline';
          if (route.name === 'profile') iconName = 'person-outline';
          return <Ionicons name={iconName} size={24} color={color} style={{ marginBottom: 6 }} />;
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen name="design" options={{ title: 'Designs' }} />
      <Tabs.Screen name="booking" options={{ title: 'Booking' }} />
      <Tabs.Screen name="payment" options={{ title: 'Payment' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
