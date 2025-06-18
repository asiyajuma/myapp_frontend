import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function Payment() {
  // Pokea controlNumber na amount kutoka kwenye booking page kupitia params
  const params = useLocalSearchParams();
  const controlNumber = params.controlNumber || 'N/A';
  const amount = params.amount || '0';

  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    // Add payment logic here
    setPaid(true);
  };

  const handleShareLocation = () => {
    // Add logic ya kushare live location hapa
    alert('Share live location feature coming soon!');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24, color: '#273c75' }}>
        Payment
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>
        Control Number: <Text style={{ fontWeight: 'bold', color: '#487eb0' }}>{controlNumber}</Text>
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 24 }}>
        Total Amount: <Text style={{ fontWeight: 'bold', color: '#487eb0' }}>Tsh {amount}</Text>
      </Text>
      {!paid ? (
        <Button title="Pay Now" onPress={handlePayment} />
      ) : (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'green', fontWeight: 'bold', marginVertical: 24 }}>Payment Successful!</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#487eb0',
              paddingVertical: 14,
              borderRadius: 24,
              alignItems: 'center',
              width: 200,
            }}
            onPress={handleShareLocation}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Share Live Location</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}