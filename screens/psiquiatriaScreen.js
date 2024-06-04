import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PsiquiatriaScreen() {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
    };

    const goToUser = () => {
        navigation.navigate('UserScreen');
    };

    const goToSettings = () => {
        navigation.navigate('SettingsScreen');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Psiquiatría</Text>
                <Image source={require('../images/psiquiatria2.jpg')} style={styles.image} />
                <Text style={styles.description}>
                    La psiquiatría es la rama de la medicina que se dedica al estudio, diagnóstico, tratamiento y prevención de los trastornos mentales, emocionales y del comportamiento. Los psiquiatras son médicos especializados en salud mental, capacitados para recetar medicamentos y utilizar una variedad de terapias para ayudar a los pacientes.
                </Text>
                <Text style={styles.sectionTitle}>Ramas de la psiquiatría:</Text>
                <Text style={styles.sectionText}>
                    - Psiquiatría infantil y adolescente
                    {"\n"}- Psiquiatría geriátrica
                    {"\n"}- Psiquiatría de enlace
                    {"\n"}- Psiquiatría forense
                    {"\n"}- Psiquiatría de adicciones
                </Text>
                <Text style={styles.sectionTitle}>Trastornos psiquiátricos comunes:</Text>
                <Text style={styles.sectionText}>
                    - Esquizofrenia
                    {"\n"}- Trastorno bipolar
                    {"\n"}- Trastornos de ansiedad
                    {"\n"}- Trastornos del espectro autista
                    {"\n"}- Trastornos de la personalidad
                </Text>
                <Text style={styles.sectionTitle}>Importancia de la salud mental:</Text>
                <Text style={styles.sectionText}>
                    - Mejora la calidad de vida
                    {"\n"}- Fortalece las relaciones interpersonales
                    {"\n"}- Aumenta la productividad y el rendimiento
                    {"\n"}- Reduce el riesgo de enfermedades físicas
                    {"\n"}- Promueve el bienestar emocional y la resiliencia
                </Text>
                <Text style={styles.sectionTitle}>Cómo cuidar la salud mental:</Text>
                <Text style={styles.sectionText}>
                    - Buscar apoyo profesional cuando sea necesario.
                    {"\n"}- Practicar técnicas de autocuidado como el ejercicio y la meditación.
                    {"\n"}- Mantener una red de apoyo social fuerte.
                    {"\n"}- Establecer y mantener hábitos saludables de sueño y alimentación.
                    {"\n"}- Participar en actividades que fomenten la creatividad y la relajación.
                </Text>
                <Text style={styles.sectionTitle}>Recursos útiles:</Text>
                <Text style={styles.sectionText}>
                    - Línea de ayuda para la salud mental: {"\n"} [312 133 10 13]
                    {"\n"}- Aplicaciones de meditación y mindfulness: [Lista de aplicaciones]
                    {"\n"}- Sitios web con información sobre salud mental: {"\n"} [Lista de sitios web]
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
