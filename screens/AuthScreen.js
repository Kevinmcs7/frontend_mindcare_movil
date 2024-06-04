import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function AuthScreen({ route }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const mode = route.params?.mode || 'login';
  const navigation = useNavigation();

  const handleAction = () => {
    console.log(`${mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'} con:`, username, password);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/user.png')}
            style={styles.userIcon}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <Image
              source={require('../images/user_name.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              textAlign="center"
            />
          </View>
          <View style={styles.inputRow}>
            <Image
              source={require('../images/password.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textAlign="center"
            />
          </View>
          <TouchableOpacity
            style={[styles.button, mode === 'login' ? styles.loginButton : styles.registerButton]}
            onPress={handleAction}
          >
            <Text style={styles.buttonText}>{mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</Text>
          </TouchableOpacity>
          {mode === 'register' && (
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          )}
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
    paddingVertical: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#58B694',
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 50,
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
    marginBottom: 30,
  },
  inputIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginButton: {
    borderColor: '#49A784',
  },
  registerButton: {
    borderColor: '#FF5733',
  },
  cancelButton: {
    backgroundColor: '#FF5733',
    marginTop: 20,
  },
});
