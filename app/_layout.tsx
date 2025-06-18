import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="uploadDesign" 
        options={{ 
          presentation: 'modal', 
          headerShown: true, 
          title: 'Upload Your Design' 
        }}
      />
    </Stack>
  );
}
