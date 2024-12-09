import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
//987
export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google" // Указываем, что используется Google Maps
        apiKey="AIzaSyCO9Y3Fgw9bpardf4T9086TYUu8po8ceb0" // Ваш API-ключ
        initialRegion={{
          latitude: 50.4501, // Пример для Киева
          longitude: 30.5035,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 50.4501, longitude: 30.5035 }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
