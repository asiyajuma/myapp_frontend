import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

// Tumia picha zako za assets kwa icons za miduara
const categories = [
  { key: 'Kitchen', label: 'Kitchen', icon: require('../../assets/kitchen.jpg') },
  { key: 'Bedroom', label: 'Bedroom', icon: require('../../assets/bedroom.jpg') },
  { key: 'Livingroom', label: 'Livingroom', icon: require('../../assets/livingroom.jpg') },
  { key: 'Washingroom', label: 'Washingroom', icon: require('../../assets/washingroom.jpg') },
];

// Kila design ina price
const designs = [
  { id: 1, name: 'Modern Kitchen', category: 'Kitchen', image: require('../../assets/kitchen.jpg'), price: 1000 },
  { id: 2, name: 'Classic Kitchen', category: 'Kitchen', image: require('../../assets/kitchen.jpg'), price: 1200 },
  { id: 3, name: 'Cozy Bedroom', category: 'Bedroom', image: require('../../assets/bedroom.jpg'), price: 900 },
  { id: 4, name: 'Modern Bedroom', category: 'Bedroom', image: require('../../assets/bedroom.jpg'), price: 1100 },
  { id: 5, name: 'Elegant Livingroom', category: 'Livingroom', image: require('../../assets/livingroom.jpg'), price: 1300 },
  { id: 6, name: 'Modern Livingroom', category: 'Livingroom', image: require('../../assets/livingroom.jpg'), price: 1500 },
  { id: 7, name: 'Classic Washingroom', category: 'Washingroom', image: require('../../assets/washingroom.jpg'), price: 800 },
  { id: 8, name: 'Modern Washingroom', category: 'Washingroom', image: require('../../assets/washingroom.jpg'), price: 1000 },
];

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState('Kitchen');
  const [selectedDesigns, setSelectedDesigns] = useState<any[]>([]);
  const router = useRouter();

  // Filter designs by selected category
  const filteredDesigns = designs.filter(d => d.category === selectedCategory);

  // Handle design select/deselect
  const toggleSelectDesign = (design: any) => {
    setSelectedDesigns(prev =>
      prev.includes(design)
        ? prev.filter(d => d !== design)
        : [...prev, design]
    );
  };

  // Calculate total payment
  const totalPayment = selectedDesigns.reduce((sum, d) => sum + d.price, 0);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#273c75', textAlign: 'center' }}>
        Design Showcase
      </Text>
      {/* Categories as circles */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.key}
            onPress={() => setSelectedCategory(cat.key)}
            style={{
              alignItems: 'center',
              marginRight: 24,
            }}
          >
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: selectedCategory === cat.key ? '#487eb0' : '#fff',
                borderWidth: 2,
                borderColor: '#487eb0',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}
            >
              <Image
                source={cat.icon}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <Text style={{ color: selectedCategory === cat.key ? '#487eb0' : '#273c75', fontWeight: '600', fontSize: 13 }}>
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Images for selected category */}
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filteredDesigns.length === 0 ? (
            <Text style={{ color: '#888', textAlign: 'center', marginTop: 40, width: '100%' }}>No designs found.</Text>
          ) : (
            filteredDesigns.map(design => {
              const isSelected = selectedDesigns.includes(design);
              return (
                <TouchableOpacity
                  key={design.id}
                  onPress={() => toggleSelectDesign(design)}
                  style={{
                    width: '48%',
                    marginBottom: 16,
                    borderWidth: isSelected ? 3 : 0,
                    borderColor: '#487eb0',
                    borderRadius: 12,
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    elevation: 2,
                    position: 'relative',
                  }}
                >
                  <Image source={design.image} style={{ width: '100%', height: 120 }} />
                  <Text style={{ fontSize: 16, fontWeight: '600', margin: 8 }}>{design.name}</Text>
                  <Text style={{ fontSize: 14, color: '#487eb0', marginLeft: 8, marginBottom: 8 }}>Tsh {design.price}</Text>
                  {/* Tick icon */}
                  {isSelected && (
                    <View style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: '#487eb0',
                      borderRadius: 12,
                      width: 24,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>✓</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
      {/* Book button */}
      {selectedDesigns.length > 0 && (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 4 }}>
            Total: Tsh {totalPayment}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#487eb0',
              paddingVertical: 14,
              borderRadius: 24,
              alignItems: 'center',
              marginTop: 8,
              marginBottom: 8,
              width: 180,
            }}
            onPress={() =>
              router.push({
                pathname: '/booking',
                params: { designs: JSON.stringify(selectedDesigns), total: totalPayment },
              })
            }
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Book</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}