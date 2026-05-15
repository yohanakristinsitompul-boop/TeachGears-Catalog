import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2; 

export default function App() {
  const products = [
    { id: 1, name: 'Gaming Mouse', price: 'Rp 500k', discount: true },
    { id: 2, name: 'Keyboard', price: 'Rp 1.2jt', discount: false },
    { id: 3, name: 'Headset', price: 'Rp 800k', discount: false },
    { id: 4, name: 'Webcam', price: 'Rp 600k', discount: true },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* 1. Header (Syarat No. 2) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TechGears Store</Text>
      </View>

      {/* 2. Grid (Syarat No. 3) */}
      <View style={styles.gridContainer}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            
            {/* 3. Badge Absolute (Syarat No. 4) */}
            {item.discount && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>OFF</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 },
  card: { backgroundColor: '#1e1e1e', width: cardWidth, marginBottom: 20, padding: 15, borderRadius: 10, position: 'relative' },
  imagePlaceholder: { height: 100, backgroundColor: '#333', borderRadius: 8, marginBottom: 10 },
  productName: { color: '#fff', fontWeight: '600' },
  productPrice: { color: '#00adb5', marginTop: 5 },
  discountBadge: { position: 'absolute', top: 5, right: 5, backgroundColor: '#ff4b2b', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5 },
  discountText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
});
