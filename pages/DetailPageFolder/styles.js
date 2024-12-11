// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Получаем ширину экрана для управления размером карусели

export default StyleSheet.create({
    container: { padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
    type: { fontSize: 16, color: '#555', marginBottom: 16 },
    description: { fontSize: 16, marginTop: 16 },
    imageContainer: { marginTop: 16 },
    image: { width: '100%', height: 200, marginBottom: 8 },
});
