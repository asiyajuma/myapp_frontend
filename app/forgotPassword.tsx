import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const router = useRouter();

  const handleReset = () => {
    // Hapa unaweza tuma request kwenda backend yako
    setSent(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f5f6fa' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24, color: '#273c75', textAlign: 'center' }}>
        Forgot Password
      </Text>
      {sent ? (
        <Text style={{ color: 'green', textAlign: 'center', marginBottom: 24 }}>
          If this email exists, a reset link has been sent!
        </Text>
      ) : (
        <>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              marginBottom: 16,
              padding: 10,
              borderRadius: 4,
              backgroundColor: '#fff',
            }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Button title="Send Reset Link" onPress={handleReset} />
        </>
      )}
      <TouchableOpacity
        style={{ marginTop: 24, alignItems: 'center' }}
        onPress={() => router.replace('/login')}
      >
        <Text style={{ color: '#487eb0', fontWeight: '600' }}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}