import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CitasScreen() {
  const [activeButton, setActiveButton] = useState(null);
  const navigation = useNavigation();

  const handleButtonPress = (button) => {
    setActiveButton(button);
    switch (button) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'button1':
      case 'button2':
      case 'button3':
      case 'button4':
      case 'button5':
      case 'button6':
      case 'button7':
      case 'button8':
        navigation.navigate('CitasScreens2'); // Navega a CitasScreens2.js para todos estos botones
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

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Citas</Text>
      <View style={styles.searchContainer}>
        <Image source={require('../images/lupa.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Ingresa el tema"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Estrés</Text>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button1' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button1')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button2' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button2')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button3' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button3')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button4' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button4')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Psicológico</Text>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button5' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button5')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button6' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button6')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button7' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button7')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.smallButton,
                activeButton === 'button8' && styles.activeButton,
              ]}
              onPress={() => handleButtonPress('button8')}
            >
              <Image source={require('../images/user.png')} style={styles.smallButtonIcon} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58B694',
    textAlign: 'center',
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 20,
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
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  sectionContainer: {
    width: '90%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallButton: {
    backgroundColor: '#58B694',
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#49A784',
  },
  smallButtonIcon: {
    width: 50,
    height: 50,
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
});
