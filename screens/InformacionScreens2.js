import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InformacionScreens2() {
    const navigation = useNavigation();

    const goToHome = () => {
        // Navegar a la pantalla HomeScreen
        navigation.navigate('Home');
    };

    const goToUser = () => {
        // Navegar a la pantalla UserScreen
        navigation.navigate('UserScreen');
    };

    const goToSettings = () => {
        // Navegar a la pantalla SettingsScreen
        navigation.navigate('SettingsScreen');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Estrés</Text>
                <Image source={require('../images/estres.png')} style={styles.image} />
                <Text style={styles.description}>
                    El estrés es una respuesta natural del cuerpo ante situaciones desafiantes o amenazantes. Puede manifestarse a través de síntomas físicos, emocionales y conductuales. Identificar y manejar el estrés de manera efectiva es crucial para mantener una buena salud mental y física.
                </Text>
                <Text style={styles.sectionTitle}>Síntomas comunes de estrés:</Text>
                <Text style={styles.sectionText}>
                    - Dolores de cabeza
                    {"\n"}- Problemas de sueño
                    {"\n"}- Fatiga
                    {"\n"}- Irritabilidad
                    {"\n"}- Problemas digestivos
                </Text>
                <Text style={styles.sectionTitle}>Consecuencias del estrés crónico:</Text>
                <Text style={styles.sectionText}>
                    - Ansiedad y depresión
                    {"\n"}- Problemas cardíacos
                    {"\n"}- Supresión del sistema inmunológico
                    {"\n"}- Trastornos del sueño
                    {"\n"}- Problemas de memoria y concentración
                </Text>
                <Text style={styles.sectionTitle}>Cómo manejar el estrés:</Text>
                <Text style={styles.sectionText}>
                    - Practicar técnicas de relajación como la respiración profunda y la meditación.
                    {"\n"}- Hacer ejercicio regularmente para liberar endorfinas y reducir la tensión.
                    {"\n"}- Establecer límites saludables y aprender a decir "no" cuando sea necesario.
                    {"\n"}- Priorizar actividades que traigan alegría y satisfacción.
                    {"\n"}- Mantener una dieta equilibrada y limitar el consumo de cafeína y alcohol.
                </Text>
                <Text style={styles.sectionTitle}>Recursos útiles:</Text>
                <Text style={styles.sectionText}>
                    - Línea de ayuda para la salud mental: {"\n"} [312 133 10 13]
                    {"\n"}- Aplicaciones de meditación y mindfulness: [Lista de aplicaciones]
                    {"\n"}- Sitios web con información sobre manejo del estrés: {"\n"} [Lista de sitios web]
                    {"\n"}- Libros recomendados sobre el tema: {"\n"} [Lista de libros]
                </Text>
            </ScrollView>
            {/* Botones adicionales fijos */}
            <View style={styles.fixedButtonsContainer}>
                <TouchableOpacity style={styles.fixedButton} onPress={goToHome}>
                    <Image source={require('../images/home2.png')} style={styles.additionalButtonIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fixedButton} onPress={goToUser}>
                    <Image source={require('../images/user2.png')} style={styles.additionalButtonIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fixedButton} onPress={goToSettings}>
                    <Image source={require('../images/settings.png')} style={styles.additionalButtonIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FEF8',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100, // Para evitar que los botones fijos oculten contenido
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
        marginBottom: 20,
        textAlign: 'justify',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#58B694',
        marginBottom: 10,
        marginTop: 20,
    },
    sectionText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
        textAlign: 'justify',
    },
    fixedButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#F6FEF8',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    fixedButton: {
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
