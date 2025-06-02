import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would add authentication logic
    router.replace('/home'); // Navigate to Home page after login
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4 }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4 }}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={{ marginTop: 16, color: 'blue' }}
        onPress={() => router.push('/SignUp')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}