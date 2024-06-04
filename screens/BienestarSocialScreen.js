import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BienestarSocialScreen() {
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
                <Text style={styles.title}>Bienestar Social</Text>
                <Image source={require('../images/bienestar_social2.png')} style={styles.image} />
                <Text style={styles.description}>
                    El bienestar social se refiere a la calidad de vida que experimentan las personas en sus relaciones sociales y en su comunidad. Incluye factores como la integración social, el apoyo social, la equidad y la justicia social. El bienestar social es esencial para el desarrollo personal y colectivo, y se logra a través de políticas y programas que promuevan la cohesión social y la inclusión.
                </Text>
                <Text style={styles.sectionTitle}>Aspectos del bienestar social:</Text>
                <Text style={styles.sectionText}>
                    - Integración social
                    {"\n"}- Apoyo social
                    {"\n"}- Equidad y justicia social
                    {"\n"}- Participación comunitaria
                    {"\n"}- Calidad de vida
                </Text>
                <Text style={styles.sectionTitle}>Beneficios del bienestar social:</Text>
                <Text style={styles.sectionText}>
                    - Mejora la salud mental y emocional
                    {"\n"}- Fomenta la cohesión social
                    {"\n"}- Aumenta la resiliencia comunitaria
                    {"\n"}- Promueve la equidad y la justicia
                    {"\n"}- Reduce la pobreza y la exclusión social
                </Text>
                <Text style={styles.sectionTitle}>Cómo promover el bienestar social:</Text>
                <Text style={styles.sectionText}>
                    - Participar en actividades comunitarias
                    {"\n"}- Fomentar redes de apoyo social
                    {"\n"}- Abogar por políticas inclusivas y justas
                    {"\n"}- Promover la educación y la conciencia social
                    {"\n"}- Involucrarse en el voluntariado y el servicio comunitario
                </Text>
                <Text style={styles.sectionTitle}>Recursos útiles:</Text>
                <Text style={styles.sectionText}>
                    - Organizaciones comunitarias: {"\n"} [Lista de organizaciones]
                    {"\n"}- Programas de apoyo social: {"\n"} [Lista de programas]
                    {"\n"}- Sitios web con información sobre bienestar social: {"\n"} [Lista de sitios web]
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
