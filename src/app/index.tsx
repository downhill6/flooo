import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/header';
import {CardList} from '../components/card-list';
import {Footer} from '../components/footer';

export default function Home() {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8, 6, 7, 8, 6, 7,
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CardList data={data} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafan',
    borderWidth: 1,
    borderColor: 'red',
  },
});
