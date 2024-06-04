import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Auth', { mode: 'login' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MINDCARE</Text>
      <Image
        source={require('../images/image_home.jpg')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Image
            source={require('../images/login.png')}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonRow}>
          <Image
            source={require('../images/register.png')}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Image
          source={require('../images/facebook.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('../images/instagram.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('../images/twitter.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('../images/whatsapp.png')}
          style={styles.socialIcon}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FEF8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#58B694',
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#49A784',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 25,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
  },
  spacer: {
    height: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 30,
  },
  socialIcon: {
    width: 55,
    height: 55,
    marginBottom: 50,
    marginRight: 25,
  },
});
