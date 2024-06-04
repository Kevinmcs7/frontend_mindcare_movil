import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CitasScreens2() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [show, setShow] = useState(false);

  const handleButtonPress = (button) => {
    switch (button) {
      case 'home':
        navigation.navigate('Home');
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

  const handleSchedule = async () => {
    if (!name || !phone || !date || !time) {
      Alert.alert("Campos obligatorios", "Por favor, completa todos los campos.");
      return;
    }

    const formData = {
      nombre: name,
      telefono: phone,
      fecha: date,
      hora: time,
    };

    try {
      const response = await fetch("http://192.168.1.7:3000/api/Registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Cita agendada correctamente.");
        setName('');
        setPhone('');
        setDate(new Date());
        setTime('');
      } else {
        Alert.alert("Error", "Error al agendar la cita");
      }
    } catch (error) {
      Alert.alert("Error de red", error.message);
    }
  };

  const handleNavigateToCitaRegistrada = () => {
    navigation.navigate('CitaRegistrada');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Detalles de la Cita</Text>
        <View style={styles.profileContainer}>
          <Image source={require('../images/user.png')} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.detailText}>Nombre: Dr. John Doe</Text>
            <Text style={styles.detailText}>Edad: 45</Text>
            <Text style={styles.detailText}>Sexo: Masculino</Text>
            <Text style={styles.detailText}>Especialidad: Psicología Clínica</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Dr. John Doe es un psicólogo clínico con más de 20 años de experiencia...
        </Text>
        <Text style={styles.subtitle}>Agendar Cita</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TouchableOpacity onPress={showDatepicker} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              minimumDate={new Date()} // Aquí se establece la fecha mínima
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Hora (HH:MM)"
            value={time}
            onChangeText={setTime}
          />
          <TouchableOpacity style={styles.button} onPress={handleSchedule}>
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={handleNavigateToCitaRegistrada}>
            <Text style={styles.buttonText}>Ir a Cita Registrada</Text>
          </TouchableOpacity>
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
  scrollContainer: {
    padding: 20,
    paddingBottom: 150, // Añadido margen inferior para asegurar que el contenido no quede oculto detrás de los botones
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58B694',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileDetails: {
    flex: 1,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#58B694',
    marginBottom: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateButton: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#58B694',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: '#58B694',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  additionalButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
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
