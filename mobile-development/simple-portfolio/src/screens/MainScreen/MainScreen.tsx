// MainScreen.tsx
import React from 'react';
import { View, Text, Image, Linking, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import data from '../../../assets/data.json';

export default function MainScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar Card */}
      <View style={styles.avatarCard}>
        <Image source={{ uri: data.picture }} style={styles.image} />
      </View>

      {/* Name + Description */}
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.username}>@{data.username || 'username'}</Text>
      <Text style={styles.bio}>{data.bio || 'Programador Full-Stack'}</Text>

      {/* Location / Joined */}
      <Text style={styles.meta}>
        {data.location || 'Cidade,Estado País'} • Entrou em {data.joined || 'Jan 2024'}
      </Text>

      {/* Contact Buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#0A66C2' }]}
          onPress={() => Linking.openURL(data.contact.linkedin)}>
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#171515' }]}
          onPress={() => Linking.openURL(data.contact.github)}>
          <Text style={styles.socialText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: '#444' }]}
        onPress={() => Linking.openURL(`mailto:${data.contact.email}`)}>
        <Text style={styles.socialText}>{data.contact.email}</Text>
      </TouchableOpacity>

      {/* Navigate to Skills */}
      <TouchableOpacity style={styles.skillButton} onPress={() => navigation.navigate('Skills')}>
        <Text style={styles.skillButtonText}>Ver Habilidades</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a', // dark navy
    padding: 20,
    paddingBottom: 40,
  },
  avatarCard: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f1f5f9',
  },
  username: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    color: '#e2e8f0',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  socialButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
  },
  socialText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skillButton: {
    marginTop: 20,
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  skillButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
