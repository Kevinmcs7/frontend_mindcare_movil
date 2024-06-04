import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function HomeScreen() {
  const [answers, setAnswers] = useState({
    stressReduction: [],
    identifyStress: [],
    stressSources: [],
    stressManagement: [],
    dailyImpact: [],
    exerciseRegularly: null,
    organizedPerson: null,
    satisfactionLevel: null,
    stressLevel: null,
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
          <Text style={styles.title}>Test de Estrés</Text>
          <Image source={require('../images/estres.png')} style={styles.image} />
          <Text style={styles.description}>
            El estrés es una respuesta natural del cuerpo ante situaciones desafiantes o amenazantes. Puede manifestarse a través de síntomas físicos, emocionales y conductuales. Identificar y manejar el estrés de manera efectiva es crucial para mantener una buena salud mental y física.
          </Text>
          <Text style={styles.questionsTitle}>Preguntas</Text>
          <View style={styles.questionsContainer}>
            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>1. ¿Qué actividades te ayudan a reducir el estrés?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Ejercicio', 'Meditación', 'Lectura', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.stressReduction.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('stressReduction', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>2. ¿Cómo identificas cuándo estás experimentando estrés?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Dolor de cabeza', 'Insomnio', 'Irritabilidad', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.identifyStress.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('identifyStress', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>3. ¿Cuáles son tus principales fuentes de estrés en este momento?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Trabajo', 'Familia', 'Salud', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.stressSources.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('stressSources', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>4. ¿Qué técnicas utilizas para manejar el estrés?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Respiración profunda', 'Ejercicio', 'Hobbies', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.stressManagement.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('stressManagement', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>5. ¿Cómo afecta el estrés a tu vida diaria?</Text>
            </View>
            <View style={[styles.answersContainer, styles.sameWidth]}>
              {['Problemas de sueño', 'Problemas de concentración', 'Relaciones tensas', 'Otros'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.answerRow,
                    answers.dailyImpact.includes(item) && styles.checked,
                  ]}
                  onPress={() => handleCheckboxChange('dailyImpact', item)}
                >
                  <Text style={[styles.answer, styles.bold]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>6. ¿Haces ejercicio regularmente?</Text>
            </View>
            <View style={[styles.checkboxContainer, styles.sameWidth]}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.exerciseRegularly === true && styles.checked,
                ]}
                onPress={() => handleYesNoChange('exerciseRegularly', true)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.exerciseRegularly === false && styles.checked,
                ]}
                onPress={() => handleYesNoChange('exerciseRegularly', false)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>No</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>7. ¿Te consideras una persona organizada?</Text>
            </View>
            <View style={[styles.checkboxContainer, styles.sameWidth]}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.organizedPerson === true && styles.checked,
                ]}
                onPress={() => handleYesNoChange('organizedPerson', true)}
              >
                <Text style={[styles.checkboxLabel, styles.bold]}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  answers.organizedPerson === false && styles.checked,
                ]}
                onPress={() => handleYesNoChange('organizedPerson', false)}
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
                    answers.satisfactionLevel === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('satisfactionLevel', num)}
                >
                  <Text style={[styles.scaleLabel, styles.bold]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.questionBox, styles.sameWidth]}>
              <Text style={styles.question}>9. ¿Cuál es tu nivel de estrés actualmente (1-8)?</Text>
            </View>
            <View style={[styles.scaleContainer, styles.sameWidth]}>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.scaleButton,
                    answers.stressLevel === num && styles.checked,
                  ]}
                  onPress={() => handleScaleChange('stressLevel', num)}
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

