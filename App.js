import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './Body';
import CustomHeader from "./CustomHeader";
import BodyAvecTextQuiChangeAutomatiquement from "./BodyAvecTextQuiChangeAutomatiquement";
import ListeDeCourse from "./ListeDeCourse";
import StateManagement from "./StateManagement";
import TodoList from "./TodoList";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomHeader title={"Mon app IRIS"} />
      {/*<Body />*/}
      {/*<BodyAvecTextQuiChangeAutomatiquement />*/}
      {/*<ListeDeCourse />*/}
      {/*<StateManagement />*/}
      <TodoList />
      <StatusBar style="auto" />
    </View>
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
