import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from "./CustomHeader";
import {Component} from "react/cjs/react.production.min";
import Body from "./Body";
import StateManagement from "./StateManagement";
import ListeDeCourse from "./ListeDeCourse";

// export default function App() {
class App extends Component {
    constructor(){
        super();

        this.header = Component.createRef();
    }

    toto() {
        this.header.tata();
    }

    render() {
        return (
            <View style={styles.container}>

                <CustomHeader ref={this.header} title={"Mon app IRIS"}/>
                {/*<Body />*/}
                {/*<BodyAvecTextQuiChangeAutomatiquement />*/}
                <ListeDeCourse />
                {/*<StateManagement />*/}
                {/*<TodoList/>*/}
                <StatusBar style="auto"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
