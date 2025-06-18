import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const kitchenImage = require('../assets/kitchen.jpg'); // Hii ni path sahihi

const pages = [
  {
    title: 'Welcome!',
    description: 'Start your journey with our app. Please login or sign up to continue.',
  },
  {
    title: 'Stay Connected',
    description: 'Connect with people and access your data anywhere, anytime.',
  },
  {
    title: 'Get Started',
    description: 'Create an account or login to unlock all features.',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [page, setPage] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f6fa', padding: 24 }}>
      <Image
        source={kitchenImage}
        style={{ width: 300, height: 180, borderRadius: 16, marginBottom: 24 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#273c75', textAlign: 'center' }}>
        {pages[page].title}
      </Text>
      <Text style={{ fontSize: 16, color: '#353b48', marginBottom: 40, textAlign: 'center', maxWidth: 300 }}>
        {pages[page].description}
      </Text>

      {/* Page indicators */}
      <View style={{ flexDirection: 'row', marginBottom: 32 }}>
        {pages.map((_, idx) => (
          <View
            key={idx}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: idx === page ? '#487eb0' : '#dcdde1',
            }}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 24 }}>
        {page < pages.length - 1 ? (
          <>
            <TouchableOpacity
              onPress={() => router.replace('/login')}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 24,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#487eb0',
              }}
            >
              <Text style={{ color: '#487eb0', fontWeight: 'bold', fontSize: 16 }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPage(page + 1)}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 24,
                backgroundColor: '#487eb0',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            onPress={() => router.replace('/login')}
            style={{
              flex: 1,
              paddingVertical: 14,
              borderRadius: 30,
              backgroundColor: '#487eb0',
              alignItems: 'center',
              marginHorizontal: 24,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}