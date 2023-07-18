import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [players, setPlayers] = useState('');
  const [active, setActive] = useState('');

  const handleShowAlert = () => {
    Alert.alert(
      'Sucesso',
      `Nome do time: ${name} \nEstado: ${state} \nQuantidade de jogadores: ${players} \nTime esta ativo?: ${active}`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>
            Cadastro de dados para o time de quadribol
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Dados do time</Text>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Nome do time</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.sectionTitle}>Estado</Text>
          <TextInput
            style={styles.input}
            value={state}
            onChangeText={setState}
          />
          <Text style={styles.sectionTitle}>Quantidade de jogadores</Text>
          <TextInput
            style={styles.input}
            value={players}
            onChangeText={setPlayers}
            keyboardType="numeric"
            maxLength={30}
          />
          <Text style={styles.sectionTitle}>Time esta ativo?</Text>
          <TextInput
            style={styles.input}
            value={active}
            onChangeText={setActive}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={(): void => handleShowAlert()}>
            <Text style={styles.buttonLabel}>Salvar informaçoes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#1d2c3e',
  },
  screen: {
    backgroundColor: '#1d2c3e',
    height: '100%',
    padding: 20,
  },
  container: {
    marginVertical: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#2c425d',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
