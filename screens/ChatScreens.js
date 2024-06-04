import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage('');
    }
  };

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

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContainer}
      />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80} // adjust this value based on your layout
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginVertical: 20,
  },
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 120, // Increase padding to make space for input and buttons
  },
  message: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
    backgroundColor: '#E1FFE7',
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F6FEF8',
    position: 'absolute',
    bottom: 120, // Adjust the position to be above the buttons
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#58B694',
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
