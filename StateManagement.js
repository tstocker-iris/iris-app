import React, { Component } from 'react';
import {Button, Text, TextInput, View} from "react-native-web";
import {StyleSheet} from "react-native";

class StateManagement extends Component {
    constructor() {
        super();

        this.textQuiNeChangePasLaffichage = '';

        this.state = {
            texts: {
                textQuonModifie: "Texte modifiable",
                textQuonNeModifiePas: "Texte non modifiable",
                textQuonNeModifiePasDeux: "Texte non modifiable 2",
                textQuonNeModifiePasTrois: "Texte non modifiable 3",
                textQuonNeModifiePasQuatre: "Texte non modifiable 4",
                textQuonNeModifiePasCinq: "Texte non modifiable 5",
                textQuonNeModifiePas6: "Texte non modifiable 6",
            },
        };
    }

    onInputTextChange(newText) {
        this.setState({
            texts: {
                ...this.state.texts,
                textQuonModifie: newText
            },
        })
    }

    render() {
        return (
            <View>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePas}</Text>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePasDeux}</Text>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePasTrois}</Text>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePasQuatre}</Text>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePasCinq}</Text>
                <Text>Mon Non modifiable : {this.state.texts.textQuonNeModifiePas6}</Text>
                <Text>Mon modifiable : {this.state.texts.textQuonModifie}</Text>
                <TextInput style={styles.inputText} onChangeText={this.onInputTextChange.bind(this)} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputText: {
        padding: '10px',
        margin: '15px',
        border: '1px solid black'
    },
});

export default StateManagement;
