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

      <View style={styles.box}>
        <Text style={styles.persona}>{`RM: 0000000 \nSemestre: 5 \nMódulo/Série atual: 3 série \nTurma: B`}</Text>
      </View>

  
      <View style={styles.desc}>
      <Text style={styles.info}>Ensino Médio com Desenvolvimento de Sistemas</Text>
      </View>
      

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
  persona: {
    color: '#fff',
    fontSize: 20
  },
  box: {
    backgroundColor: '#a9a3a8',
    padding: 10,
    margin: 20,
    borderWidth: 2,           // Define a espessura do contorno
    borderColor: '#808080',   // Define a cor do contorno 
    borderRadius: 10,    
  },
  desc: {
    backgroundColor: '#a9a3a8',
    padding: 5,
    margin: 5,
  },
  info: {
    color: '#fff',
    fontSize: 18,
    justifyContent: 'center',

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