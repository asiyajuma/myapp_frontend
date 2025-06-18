import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


const bedroomImage = require('../assets/bedroom.jpg');

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would clear user session/token here
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={bedroomImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Welcome Home!</Text>
        <Text style={styles.subtitle}>
          Make your home a haven with our expert designers. Explore, book, and transform your space today!
        </Text>
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
    width: '100%',
    height: '100%',
    opacity: 0.25,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 24,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#e84118',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#273c75',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#353b48',
    marginBottom: 36,
    textAlign: 'center',
    maxWidth: 320,
  },
});