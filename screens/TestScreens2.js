import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TestScreens2() {
  const [activeButton, setActiveButton] = useState(null);
  const navigation = useNavigation();

  const handleButtonPress = (button) => {
    setActiveButton(button);
    switch (button) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'button2':
        navigation.navigate('TestPsicologiaScreen'); // Navega a TestScreens2.js para todos estos botones
        break;
      case 'button1':
        navigation.navigate('TestScreens'); // Navega a TestScreens2.js para todos estos botones
        break;
      case 'button3':
        navigation.navigate('TestPsiquiatriaScreen'); // Navega a TestScreens2.js para todos estos botones
        break;
      case 'button4':
        navigation.navigate('TestScreens'); // Navega a TestScreens2.js para todos estos botones
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
  };

  const getDescription = (button) => {
    switch (button) {
      case 'button1':
        return 'Aquí encontrarás un test de estrés';
      case 'button2':
        return 'Aquí encontrarás un test de psicología';
      case 'button3':
        return 'Aquí encontrarás un test de psiquiatría';
      case 'button4':
        return 'Aquí encontrarás un test de bienestar social';
      default:
        return '';
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Test</Text>
        <View style={styles.searchContainer}>
          <Image source={require('../images/lupa.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Ingresar Test"
          />
        </View>
        <View style={styles.buttonsGrid}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}>Estrés</Text>
            <TouchableOpacity
              style={[
                styles.gridButton,
                activeButton === 'button1' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button1')}
            >
              <Text>{getDescription('button1')}</Text>
              <Image source={require('../images/estres3.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}>Psicología</Text>
            <TouchableOpacity
              style={[
                styles.gridButton,
                activeButton === 'button2' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button2')}
            >
              <Text>{getDescription('button2')}</Text>
              <Image source={require('../images/psicologico.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}>Psiquiatría</Text>
            <TouchableOpacity
              style={[
                styles.gridButton,
                activeButton === 'button3' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button3')}
            >
              <Text>{getDescription('button3')}</Text>
              <Image source={require('../images/psiquiatria.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}>Bienestar Social</Text>
            <TouchableOpacity
              style={[
                styles.gridButton,
                activeButton === 'button4' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button4')}
            >
              <Text>{getDescription('button4')}</Text>
              <Image source={require('../images/bienestar_social.png')} style={[styles.additionalButtonIcon, styles.iconLarge]} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.additionalButtonsContainer}>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('home')}
        >
          <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('user')}
        >
          <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={() => handleButtonPress('settings')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58B694',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 0,
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  buttonWrapper: {
    width: '100%', // Cambiado para ocupar toda la fila
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  gridButton: {
    backgroundColor: '#58B694',
    width: '100%',
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  activeButton: {
    backgroundColor: '#49A784',
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
    width: 90,
    height: 90,
    },
    });
    
