import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function TestPsicologiaScreen() {
  const [answers, setAnswers] = useState({
    relaxationTechniques: [],
    recognizeSymptoms: [],
    psychologicalChallenges: [],
    copingStrategies: [],
    impactOnLife: [],
    seekHelp: null,
    emotionalAwareness: null,
    lifeSatisfaction: null,
    psychologicalWellbeing: null,
  });

  const navigation = useNavigation(); // Obtiene la instancia de navegación

  const handleCheckboxChange = (category, value) => {
    setAnswers((prevAnswers) => {
      const updatedCategory = prevAnswers[category].includes(value)
        ? prevAnswers[category].filter((item) => item !== value)
        : [...prevAnswers[category], value];
      return { ...prevAnswers, [category]: updatedCategory };
    });
  };

  const handleYesNoChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

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
          <Text style={styles.title}>Test de Psicología</Text>
          <Image source={require('../images/psicologia.jpg')} style={styles.image} />
          <Text style={styles.description}>
            La psicología es el estudio científico de la mente y el comportamiento. Este test está diseñado para ayudarte a evaluar y entender mejor tu bienestar psicológico y emocional.
          </Text>
          <Text style={styles.questionsTitle}>Preguntas</Text>
          <View style={styles.questionsContainer}>
            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>1. ¿Qué técnicas de relajación utilizas?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Meditación', 'Respiración profunda', 'Yoga', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.relaxationTechniques.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('relaxationTechniques', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>2. ¿Cómo reconoces los síntomas de problemas psicológicos?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Ansiedad', 'Depresión', 'Irritabilidad', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.recognizeSymptoms.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('recognizeSymptoms', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>3. ¿Cuáles son tus principales desafíos psicológicos en este momento?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Estrés laboral', 'Relaciones personales', 'Autoestima', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.psychologicalChallenges.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('psychologicalChallenges', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>4. ¿Qué estrategias utilizas para afrontar los desafíos psicológicos?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Terapia', 'Hablar con amigos/familia', 'Ejercicio', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.copingStrategies.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('copingStrategies', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>5. ¿Cómo afecta tu bienestar psicológico a tu vida diaria?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Problemas de sueño', 'Dificultades de concentración', 'Conflictos interpersonales', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.impactOnLife.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('impactOnLife', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>6. ¿Buscas ayuda profesional cuando tienes problemas psicológicos?</Text>
            </View>
            <View style={[styles.checkboxContainer, styles.sameWidth]}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.seekHelp === true && styles.checked,
                ]}
                onPress={() => handleYesNoChange('seekHelp', true)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.seekHelp === false && styles.checked,
                ]}
                onPress={() => handleYesNoChange('seekHelp', false)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>No</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>7. ¿Te consideras una persona consciente de tus emociones?</Text>
            </View>
            <View style={[styles.checkboxContainer, styles.sameWidth]}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.emotionalAwareness === true && styles.checked,
                ]}
                onPress={() => handleYesNoChange('emotionalAwareness', true)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.emotionalAwareness === false && styles.checked,
                ]}
                onPress={() => handleYesNoChange('emotionalAwareness', false)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>No</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>8. ¿Cuál es tu nivel de satisfacción con tu vida actualmente (1-8)?</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.lifeSatisfaction === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('lifeSatisfaction', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>9. ¿Cuál es tu nivel de bienestar psicológico actualmente (1-8)?</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.psychologicalWellbeing === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('psychologicalWellbeing', num)}
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
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  answerRow: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  answer: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkbox: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000',
  },
  checked: {
    backgroundColor: '#D5ECD4',
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
