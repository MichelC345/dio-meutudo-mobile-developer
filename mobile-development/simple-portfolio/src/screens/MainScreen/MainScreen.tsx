import React from 'react';
import { View, Text, Image, Linking, StyleSheet, Button, TouchableOpacity } from 'react-native';
import data from '../../../assets/data.json';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.picture }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(data.contact.linkedin)}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(data.contact.github)}>
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${data.contact.email}`)}>
        <Text style={styles.link}>{data.contact.email}</Text>
      </TouchableOpacity>

      <Button title="Habilidades" onPress={() => navigation.navigate('Skills')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  link: { fontSize: 18, color: 'blue', marginBottom: 8 }
});
