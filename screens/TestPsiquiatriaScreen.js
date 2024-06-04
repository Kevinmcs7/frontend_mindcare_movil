import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TestPsiquiatriaScreen() {
  const [answers, setAnswers] = useState({
    mood: null,
    anxiety: null,
    sleep: null,
    appetite: null,
    concentration: null,
  });

  const navigation = useNavigation();

  const handleScaleChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const navigateToSettingsScreen = () => {
    navigation.navigate('SettingsScreen');
  };

  const navigateToUserScreen = () => {
    navigation.navigate('UserScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Test Psiquiátrico</Text>
          <Image source={require('../images/psiquiatria2.jpg')} style={styles.image} />
          <Text style={styles.description}>
            Este test evalúa diferentes aspectos relacionados con la salud mental y el bienestar emocional.
            Por favor, indique en qué medida experimenta los siguientes síntomas en su vida diaria.
          </Text>
          <Text style={styles.questionsTitle}>Preguntas</Text>
          <View style={styles.questionsContainer}>
            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>1. Estado de ánimo</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {[1, 2, 3, 4, 5].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.mood === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('mood', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>2. Ansiedad</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {[1, 2, 3, 4, 5].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.anxiety === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('anxiety', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>3. Calidad del sueño</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {[1, 2, 3, 4, 5].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.sleep === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('sleep', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>4. Apetito</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {[1, 2, 3, 4, 5].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.appetite === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('appetite', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>5. Concentración</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {[1, 2, 3, 4, 5].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.concentration === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('concentration', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Botones adicionales al final */}
      <View style={styles.additionalButtonsContainer}>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={navigateToHomeScreen} // Navega a HomeScreen
        >
          <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={navigateToUserScreen} // Navega a UserScreen
        >
          <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalButton}
          onPress={navigateToSettingsScreen} // Navega a SettingsScreen
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
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100, // Added padding to prevent content being hidden by fixed buttons
  },
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 40,
    textAlign: 'justify',
  },
  questionsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#58B694',
  },
  questionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  questionBox: {
    marginBottom: 20,
    backgroundColor: '#58B694',
    padding: 10,
    borderRadius: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  sameWidth: {
    width: 350,
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  scaleButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  scaleLabel: {
    fontSize: 16,
    color: '#000',
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

