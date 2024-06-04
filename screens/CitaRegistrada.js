import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CitaRegistrada() {
  const [citas, setCitas] = useState([]);
  const navigation = useNavigation();

  // Función para obtener las citas del backend
  const getCitas = async () => {
    try {
      const response = await fetch("http://192.168.1.7:3000/api/Dashboard");
      if (!response.ok) {
        throw new Error("Error al obtener las citas");
      }
      const data = await response.json();
      setCitas(data); // Almacena las citas en el estado
    } catch (error) {
      console.error("Error al obtener las citas:", error);
    }
  };

  // Llama a la función para obtener las citas cuando el componente se monte
  useEffect(() => {
    getCitas();
  }, []);

  const handleGoBack = () => {
    navigation.navigate('CitasScreens2'); // Cambia 'Dashboard' a la ruta que prefieras
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Cita Registrada!</Text>
      <Text style={styles.message}>
        Su cita ha sido registrada exitosamente. Aquí están todas las citas registradas:
      </Text>
      <ScrollView style={styles.citasContainer}>
        {citas.length > 0 ? (
          citas.map((cita, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardInfo}>Cita {index + 1}</Text>
              <Text style={styles.cardInfo}>Nombre: {cita.nombre}</Text>
              <Text style={styles.cardInfo}>Teléfono: {cita.telefono}</Text>
              <Text style={styles.cardInfo}>Fecha: {new Date(cita.fecha).toLocaleDateString()}</Text>
              <Text style={styles.cardInfo}>Hora: {cita.hora}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noCitas}>No hay citas registradas.</Text>
        )}
      </ScrollView>
      <TouchableOpacity onPress={handleGoBack} style={styles.button}>
        <Text style={styles.buttonText}>Agendar Una cita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6FEF8',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2AA486',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  citasContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  cardInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  noCitas: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2AA486',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
