import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Configuración</Text>
      <Image source={require('../images/settings.png')} style={styles.settingsImage} />
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Notificaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Tema</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Idioma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.additionalButtonsContainer}>
        <TouchableOpacity style={styles.additionalButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.additionalButton} onPress={() => navigation.navigate('UserScreen')}>
          <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.additionalButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Image source={require('../images/settings.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FEF8',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58B694',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingsImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#58B694',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  additionalButtonsContainer: {
    position: 'absolute', // Cambiado a absolute para fijar los botones en la parte inferior
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '113%',
    paddingHorizontal: 20,
    backgroundColor: '#F6FEF8',
    paddingVertical: 13,
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
    marginHorizontal: 70,
  },
  additionalButtonIcon: {
    width: 50,
    height: 50,
  },
});
