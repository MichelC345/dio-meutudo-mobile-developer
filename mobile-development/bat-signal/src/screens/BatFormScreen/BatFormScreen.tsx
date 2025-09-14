import React, { useState } from "react";
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {styles} from "./BatFormScreenStyles"
const BAT_LOGO_PATH = "../../../assets/bat-logo-v2.png";

export default function BatFormScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [observation, setObservation] = useState("");
  
  const handleSubmit = () => {
    console.log("Form submitted:", name, phone, location, description, observation);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require(BAT_LOGO_PATH)}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome."
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu telefone."
        value={name}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Local da ocorrência:</Text>
      <TextInput
        style={styles.input}
        placeholder="Especifique: rua, bairro e endereço."
        value={location}
        onChangeText={setLocation}
      />
      <Text style={styles.label}>Descrição:</Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva com mais detalhes a ocorrência."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Observações:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Deixe aqui quaisquer observações que auxiliem na investigação."
        value={observation}
        onChangeText={setObservation}
        multiline
      />
      <Text style={styles.hint}>Máximo 500 caracteres</Text>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
