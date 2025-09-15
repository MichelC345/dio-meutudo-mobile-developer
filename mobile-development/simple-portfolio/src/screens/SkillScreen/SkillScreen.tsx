import React from 'react';
import { View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
import data from '../../../assets/data.json';

export default function SkillScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.picture }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.title}>Habilidades</Text>
      <FlatList
        data={data.skills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>• {item}</Text>
          </View>
        )}
      />
      <Button title="Fale Comigo" style={styles.returnButton} onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  skillItem: { marginVertical: 4 },
  skillText: { fontSize: 18 },
  returnButton: {marginBottom: '25%'}
});
