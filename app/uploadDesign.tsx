import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function UploadDesign() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpload = () => {
    // Hapa tuma data kwenda backend (API) kwa kutumia fetch/axios
    // Data: { name, category, image }
  };

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#f5f6fa' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 24 }}>Upload New Design</Text>
      <TextInput placeholder="Design Name" value={name} onChangeText={setName} style={inputStyle} />
      <TextInput placeholder="Category" value={category} onChangeText={setCategory} style={inputStyle} />
      <TouchableOpacity onPress={pickImage} style={{ marginBottom: 16 }}>
        <Text style={{ color: '#487eb0', fontWeight: 'bold' }}>Pick Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, marginBottom: 16 }} />}
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
}

const inputStyle = {
  borderWidth: 1,
  marginBottom: 12,
  padding: 8,
  borderRadius: 4,
  backgroundColor: '#fff',
};