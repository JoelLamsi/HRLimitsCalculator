import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerRate, setLowerRate] = useState(0);
  const [upperRate, setUpperRate] = useState(0);

  function calculate(text: string) {
    if (isNaN(Number(text)) || text === null || text === "") {
      setAge('');
      setLowerRate(0);
      setUpperRate(0);
      return;
    } else if (Number(text) < 0 || Number(text) > 120) {
      setLowerRate(0);
      setUpperRate(0);
      return;
    }
    setAge(text);
    const val = Number(text)
    const lower = (220 - val) * 0.65;
    const upper = (220 - val) * 0.85;
    setLowerRate(lower);
    setUpperRate(upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style={styles.textbox}
        keyboardType='number-pad' value={age} 
        onChangeText={val => calculate(val)}/>
      <Text>Lower limit: {lowerRate.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperRate.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 24
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textbox: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
    marginEnd: 8,
    padding: 10,
    borderRadius: 6
  }
});
