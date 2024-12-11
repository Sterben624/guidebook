import React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'; // Импортируем Swiper
import styles from './styles';

const DetailPage = ({ route }) => {
  const { name, type, description, images } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.type}>Тип: {type.join(', ')}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.carouselContainer}>
        {/* Компонент Swiper */}
        <Swiper style={styles.wrapper} showsButtons={true} loop={true}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default DetailPage;
