import React, { Component } from 'react';
import {Button, Text, TextInput, View} from "react-native-web";
import {StyleSheet} from "react-native";

class BodyAvecTextQuiChangeAutomatiquement extends Component {
    constructor() {
        super();

        this.textQuiNeChangePasLaffichage = '';

        this.state = {
            textQuiSaffiche: 'Texte de base',
        };
    }

    onButtonPress() {

    }

    onInputTextChange(newText) {
        this.setState({
            textQuiSaffiche: newText,
        })
    }

    render() {
        return (
            <View>
                <Text>Mon texte saisi : {this.state.textQuiSaffiche}</Text>
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

export default BodyAvecTextQuiChangeAutomatiquement;
