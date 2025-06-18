import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChooseRegister() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TouchableOpacity
        style={[styles.button, styles.clientButton]}
        onPress={() => router.push('/registerClient')}
      >
        <Text style={styles.buttonText}>Register as Client</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.designerButton]}
        onPress={() => router.push('/registerDesigner')}
      >
        <Text style={styles.buttonText}>Register as Designer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f6fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#2f3542',
  },
  button: {
    paddingVertical: 16,
    borderRadius: 24,
    width: 240,
    alignItems: 'center',
  },
  clientButton: {
    backgroundColor: '#487eb0',
    marginBottom: 20,
  },
  designerButton: {
    backgroundColor: '#44bd32',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});