import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}> {/* Criando um container */}
      <Text style={styles.title}>Habilitação selecionada</Text>
      <Text style={styles.info}>Ensino Médio com Desenvolvimento de Sistemas</Text>
        title="Ir para a tela de Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  info: {
    height: 8,
    backgroundColor: #ffffff,

  }
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
