import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailPage = ({ route }) => {
  const { name, type, description, images } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.type}>Тип: {type}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  type: { fontSize: 16, color: '#555', marginBottom: 16 },
  description: { fontSize: 16, marginTop: 16 },
  imageContainer: { marginTop: 16 },
  image: { width: '100%', height: 200, marginBottom: 8 },
});

export default DetailPage;
