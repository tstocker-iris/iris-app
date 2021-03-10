import React, { Component } from 'react';
import {Button, Text, TextInput, View} from "react-native-web";
import {StyleSheet} from "react-native";

class Body extends Component {
    constructor() {
        super();

        this.textQuiNeChangePasLaffichage = '';

        this.state = {
            textQuiSaffiche: 'Texte de base',
        };
    }

    onButtonPress() {
        this.setState({
            textQuiSaffiche: this.textQuiNeChangePasLaffichage,
        })
    }

    onInputTextChange(newText) {
        this.textQuiNeChangePasLaffichage = newText;
    }

    render() {
        return (
            <View>
                <Text>Mon texte saisi : {this.state.textQuiSaffiche}</Text>
                <TextInput style={styles.inputText} onChangeText={this.onInputTextChange.bind(this)} />

                <Button onPress={this.onButtonPress.bind(this)} title="Clickez moi pour récupérer et afficher le text"></Button>
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

export default Body;
