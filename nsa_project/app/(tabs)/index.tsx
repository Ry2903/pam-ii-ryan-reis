import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logotext}>NSA</Text>
      </View>
  
      <Text style={styles.info}>Ensino Médio com Desenvolvimento de Sistemas</Text>
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Frequencia')}>
          <Text style={styles.buttonText}>Frequência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Declaracoes')}>
          <Text style={styles.buttonText}>Declarações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Boletim')}>
          <Text style={styles.buttonText}>Boletim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mensagens')}>
          <Text style={styles.buttonText}>Mensagens</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    backgroundColor: '#61a5c2',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotext: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'Lobster',
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',

  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});