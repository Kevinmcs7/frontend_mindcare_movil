import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function UserScreen() {
  const navigation = useNavigation(); // Obtiene la instancia de navegación

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Perfil</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/user.png')}
            style={styles.userIcon}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <View style={styles.inputHalfContainer}>
              <TextInput
                style={[styles.inputHalf, styles.inputText]}
                placeholder="Nombre"
                autoCapitalize="words"
              />
            </View>
            <View style={styles.inputHalfContainer}>
              <TextInput
                style={[styles.inputHalf, styles.inputText]}
                placeholder="Apellidos"
                autoCapitalize="words"
              />
            </View>
          </View>
          <TextInput
            style={[styles.input, styles.inputText]}
            placeholder="Teléfono"
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.input, styles.inputText]}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, styles.inputText]}
            placeholder="Contraseña"
            secureTextEntry
          />
          {/* Botones debajo de los campos */}
          <View style={styles.saveCancelButtonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.saveButton]}
              onPress={() => console.log('Guardar')} // Acción de guardar
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]}
              onPress={() => console.log('Cancelar')} // Acción de cancelar
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Botones fijos */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, styles.additionalButton]}
          onPress={() => handleNavigation('Home')} // Navega a HomeScreen
        >
          <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.additionalButton]}
          onPress={() => handleNavigation('UserScreen')} // Navega a UserScreen (actual)
        >
          <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.additionalButton]}
          onPress={() => handleNavigation('SettingsScreen')} // Navega a SettingsScreen
        >
          <Image source={require('../images/settings.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FEF8',
    justifyContent: 'center', // Alineación vertical al centro
    marginTop: -40, // Mover todo hacia arriba
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#58B694',
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userIcon: {
    width: 100,
    height: 100,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  inputHalfContainer: {
    flex: 1,
    marginRight: 5,
  },
  inputHalf: {
    flex: 1,
    padding: 25,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
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
  inputText: {
    color: '#000', // Color del texto negro
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#F6FEF8',
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#49A784',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  additionalButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  additionalButtonIcon: {
    width: 50, 
    height: 50,
  },
  saveCancelButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20, // Espacio entre los botones de guardar y cancelar y los botones fijos
  },
  saveButton: {
    backgroundColor: '#fff', // Cambia el color del botón de guardar
    marginRight: 10, // Espacio entre el botón de guardar y el de cancelar
  },
  cancelButton: {
    backgroundColor: '#fff', // Cambia el color del botón de cancelar
    marginLeft: 10, // Espacio entre el botón de cancelar y el de guardar
  },
});
