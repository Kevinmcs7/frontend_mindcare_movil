import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Navegar a la pantalla de inicio
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registrarse</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/user.png')}
            style={styles.userIcon}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputHalf}
              placeholder="Nombre"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="none"
              textAlign="center"
            />
            <TextInput
              style={styles.inputHalf}
              placeholder="Apellidos"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="none"
              textAlign="center"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textAlign="center"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.socialIconsContainer}>
            <Image
              source={require('../images/gmail.png')}
              style={styles.socialIcon}
            />
            <Image
              source={require('../images/facebook.png')}
              style={styles.socialIcon}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FEF8',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#58B694',
    textAlign: 'center',
    marginTop: 30,
  },
  iconContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  userIcon: {
    width: 100,
    height: 100,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  inputHalf: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginRight: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#49A784',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10, // Reducido el margen superior
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Cambiado de space-evenly a center
    width: '100%',
    marginTop: 40, // Reducido el margen superior
  },
  socialIcon: {
    width: 65,
    height: 65,
    marginHorizontal: 20, // Separación horizontal añadida
  },
});

