import React, {useState} from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from 'expo-router';

export default function Home() {
  const [count, setCount] = useState(0);
  console.log('render ', count);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on1 your app!</Text>
      <Text>Thanks god{count}</Text>
      <Button title="submit" onPress={() => setCount(count + 1)} />
      <Link href="/detail">detail</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
