import { Tabs, Stack, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const segments = useSegments();

  // Kama tupo kwenye onboarding, login, signup, au uploadDesign, tumia Stack (hakuna tab bar)
  if (
    segments[0] === 'onboarding' ||
    segments[0] === 'login' ||
    segments[0] === 'uploadDesign' ||
    segments[0] === 'registerClient' ||
    segments[0] === 'registerDesigner' ||
    segments[0] === 'chooseRegister' ||
    segments[0] === 'forgotPassword' ||
    segments[0] === undefined
  ) {
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  // Vinginevyo, tumia Tabs
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#487eb0',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 6 },
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
          headerShown: false
           }} 
      />
      <Tabs.Screen name="design" options={{ title: 'Designs', headerShown: false }} />
      <Tabs.Screen name="booking" options={{ title: 'Booking', headerShown: false }} />
      <Tabs.Screen name="payment" options={{ title: 'Payment', headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false }} />
    </Tabs>
  );
}
