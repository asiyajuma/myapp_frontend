import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from 'expo-router';

// Designers list
const designers = [
  { id: 1, name: 'Alice Smith' },
  { id: 2, name: 'John Doe' },
  { id: 3, name: 'Maria Garcia' },
];

export default function Booking() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [designer, setDesigner] = useState(designers[0].id);

  // Parse selected designs and total from params
  let selectedDesigns: any[] = [];
  let total = 0;
  try {
    selectedDesigns = params.designs ? JSON.parse(params.designs as string) : [];
    total = params.total ? Number(params.total) : 0;
  } catch {
    selectedDesigns = [];
    total = 0;
  }

  // Generate random control number
  const generateControlNumber = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  };

  const handleBooking = () => {
    const controlNumber = generateControlNumber();
    const designNames = selectedDesigns.map(d => d.name).join(', ');
    Alert.alert(
      'Booking Submitted',
      `Design(s): ${designNames}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPost Code: ${postcode}\nEmail: ${email}\nDesigner: ${designers.find(d => d.id === designer)?.name}\nTotal Cost: Tsh ${total}\nDate: ${date}\n\nPayment Control Number: ${controlNumber}`,
      [
        {
          text: 'OK',
          onPress: () => {
            router.replace({
              pathname: '/payment',
              params: {
                controlNumber,
                amount: total.toString(),
              },
            });
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#273c75' }}>
        Book a Designer
      </Text>
      {selectedDesigns.length > 0 && (
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#487eb0' }}>
            Selected Designs:
          </Text>
          {selectedDesigns.map((d, i) => (
            <Text key={i} style={{ fontSize: 16, color: '#353b48' }}>
              - {d.name} (Tsh {d.price})
            </Text>
          ))}
        </View>
      )}
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
      />
      <TextInput
        placeholder="Post Code"
        value={postcode}
        onChangeText={setPostcode}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
        keyboardType="email-address"
      />
      <Text style={{ marginBottom: 8, fontWeight: '600' }}>Select Designer</Text>
      <Picker
        selectedValue={designer}
        onValueChange={itemValue => setDesigner(itemValue)}
        style={{ backgroundColor: '#fff', marginBottom: 12 }}
      >
        {designers.map(d => (
          <Picker.Item key={d.id} label={d.name} value={d.id} />
        ))}
      </Picker>
      <TextInput
        placeholder="Preferred Date"
        value={date}
        onChangeText={setDate}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4, backgroundColor: '#fff' }}
      />
      <Text style={{ marginBottom: 12, fontWeight: '600' }}>
        Total Cost: Tsh {total}
      </Text>
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
}