// SkillScreen.tsx
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import data from '../../../assets/data.json';

export default function SkillScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarCard}>
        <Image source={{ uri: data.picture }} style={styles.image} />
      </View>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.username}>@{data.username || 'username'}</Text>

      {/* Skills */}
      <Text style={styles.title}>Pergunte-me sobre:</Text>
      <FlatList
        data={data.skills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>• {item}</Text>
          </View>
        )}
        scrollEnabled={false}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.backButtonText}>Voltar ao Perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a', // same dark navy background
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
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f5f9',
  },
  username: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 12,
  },
  skillItem: {
    backgroundColor: '#1e293b',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 4,
    width: '100%',
    alignSelf: 'center',
  },
  skillText: {
    fontSize: 16,
    color: '#f1f5f9',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
