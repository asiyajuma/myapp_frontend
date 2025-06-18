import { View, Text } from 'react-native';

export default function Profile() {
  // Mfano wa data za client, unaweza badilisha na data halisi kutoka backend au context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+255 700 000 000',
  };

  // Mfano wa status za booking na payment
  const bookings = [
    { id: 1, design: 'Modern Kitchen', status: 'Confirmed', payment: 'Paid' },
    { id: 2, design: 'Cozy Bedroom', status: 'Pending', payment: 'Unpaid' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#273c75', textAlign: 'center' }}>
        My Profile
      </Text>
      <View style={{ marginBottom: 24, backgroundColor: '#fff', borderRadius: 12, padding: 16, elevation: 2 }}>
        <Text style={{ fontSize: 18, marginBottom: 6 }}>Name: {user.name}</Text>
        <Text style={{ fontSize: 18, marginBottom: 6 }}>Email: {user.email}</Text>
        <Text style={{ fontSize: 18 }}>Phone: {user.phone}</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: '#273c75' }}>
        My Bookings
      </Text>
      {bookings.length === 0 ? (
        <Text style={{ color: '#888', textAlign: 'center' }}>No bookings yet.</Text>
      ) : (
        bookings.map(booking => (
          <View
            key={booking.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 14,
              marginBottom: 12,
              elevation: 1,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Design: {booking.design}</Text>
            <Text>Status: <Text style={{ color: booking.status === 'Confirmed' ? 'green' : '#e67e22' }}>{booking.status}</Text></Text>
            <Text>Payment: <Text style={{ color: booking.payment === 'Paid' ? 'green' : 'red' }}>{booking.payment}</Text></Text>
          </View>
        ))
      )}
    </View>
  );
}