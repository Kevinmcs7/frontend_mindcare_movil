import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function HomeScreen() {
  const [activeButton, setActiveButton] = useState(null);
  const navigation = useNavigation(); // Obtiene la instancia de navegación

  const handleButtonPress = (button) => {
    if (button === 'home') {
      setActiveButton(null); // Limpiar el estado para simular la recarga
    } else {
      setActiveButton(button);
      // Navega a la pantalla correspondiente al botón presionado
      switch (button) {
        case 'button1':
          navigation.navigate('InformacionScreens');
          break;
        case 'button2':
          navigation.navigate('TestScreens2');
          break;
        case 'button3':
          navigation.navigate('CitasScreens');
          break;
        case 'button4':
          navigation.navigate('ChatScreens');
          break;
        case 'user':
          navigation.navigate('UserScreen');
          break;
        case 'settings':
          navigation.navigate('SettingsScreen');
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hola, Kevin!!</Text>
          <Image source={require('../images/image_home.jpg')} style={styles.headerImage} />
        </View>
        <View style={styles.buttonsGrid}>
          <TouchableOpacity
            style={[
              styles.gridButton,
              activeButton === 'button1' && styles.activeButton,
            ]}
            onPress={() => handleButtonPress('button1')}
          >
            <Text style={styles.buttonText}>Información</Text>
            <Image source={require('../images/informacion.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gridButton,
              activeButton === 'button2' && styles.activeButton,
            ]}
            onPress={() => handleButtonPress('button2')}
          >
            <Text style={styles.buttonText}>Test</Text>
            <Image source={require('../images/test.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gridButton,
              activeButton === 'button3' && styles.activeButton,
            ]}
            onPress={() => handleButtonPress('button3')}
          >
            <Text style={styles.buttonText}>Citas</Text>
            <Image source={require('../images/agenda.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gridButton,
              activeButton === 'button4' && styles.activeButton,
            ]}
            onPress={() => handleButtonPress('button4')}
          >
            <Text style={styles.buttonText}>Chat</Text>
            <Image source={require('../images/Chat.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.additionalButtonsContainer}>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('home')} // Agrega la funcionalidad para el botón Home
        >
          <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('user')} // Agrega la funcionalidad para el botón User
        >
          <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('settings')} // Agrega la funcionalidad para el botón Settings
        >
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
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58B694',
    marginBottom: 10,
  },
  headerImage: {
    width: 350,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  gridButton: {
    backgroundColor: '#58B694',
    width: '45%',
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#49A784',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  additionalButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6FEF8',
    paddingVertical: 10,
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
  iconLarge: {
    width: 70, // Tamaño más grande para los iconos de los botones
    height: 70,
  },
});
