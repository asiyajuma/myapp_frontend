import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 16,
          color: '#273c75',
          letterSpacing: 1,
        }}
      >
        Welcome Home!
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#353b48',
          marginBottom: 36,
          textAlign: 'center',
          maxWidth: 320,
        }}
      >
        Choose a section to get started with your app.
      </Text>
      <TouchableOpacity
        style={[buttonStyle, { backgroundColor: '#487eb0' }]}
        onPress={() => router.push('/design')}
      >
        <Text style={buttonTextStyle}>Design Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyle, { backgroundColor: '#44bd32' }]}
        onPress={() => router.push('/booking')}
      >
        <Text style={buttonTextStyle}>Booking Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyle, { backgroundColor: '#e1b12c' }]}
        onPress={() => router.push('/payment')}
      >
        <Text style={buttonTextStyle}>Payment Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyle, { backgroundColor: '#8c7ae6' }]}
        onPress={() => router.push('/profile')}
      >
        <Text style={buttonTextStyle}>User Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const buttonStyle = {
  paddingVertical: 16,
  paddingHorizontal: 60,
  borderRadius: 30,
  marginBottom: 18,
  elevation: 2,
  width: 250,
  alignItems: 'center' as const,
};

const buttonTextStyle = {
  color: '#fff',
  fontSize: 18,
  fontWeight: '600' as const,
};