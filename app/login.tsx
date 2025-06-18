import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const livingroomImage = require('../assets/livingroom.jpg');

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={livingroomImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => router.push('/forgotPassword')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={handleLogin} />

        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={() => { /* Add Google login logic here */ }}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
            style={styles.socialIcon}
          />
          <Text style={[styles.socialButtonText, styles.googleButtonText]}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, styles.appleButton]}
          onPress={() => { /* Add Apple login logic here */ }}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png' }}
            style={styles.socialIcon}
          />
          <Text style={[styles.socialButtonText, styles.appleButtonText]}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Create Account */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => router.push('/chooseRegister')}
        >
          <Text style={styles.createAccountText}>
            Don't have an account? Create account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.25,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#273c75',
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#487eb0',
    fontWeight: '600',
  },
  socialButton: {
    marginTop: 12,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#487eb0',
  },
  appleButton: {
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButtonText: {
    color: '#487eb0',
  },
  appleButtonText: {
    color: '#000',
  },
  createAccountButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  createAccountText: {
    color: 'blue',
    fontWeight: '600',
  },
});