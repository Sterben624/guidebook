import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = require('../../locations.json');

const MainPage = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detail', {
          name: item.name,
          type: item.type,
          description: item.description,
          images: item.images,
        })
      }
    >
      {/* Додаємо зображення */}
      {console.log(item.images[0])}
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>Тип: {item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 16, marginBottom: 8, backgroundColor: '#fff', borderRadius: 8, elevation: 3 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  type: { fontSize: 14, color: '#555' },
});

export default MainPage;
