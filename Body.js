import React, { Component } from 'react';
import {Button, Text, View} from "react-native-web";

class Body extends Component {
    constructor() {
        super();

        this.state = {
            compteur : 0
        };
    }

    onPressIncrement() {
        this.setState({
            compteur: this.state.compteur + 1,
        });
    }

    render() {
        return (
            <View>
                <Text>Nombre de clic effectué : {this.state.compteur}</Text>

                <Button onPress={() => this.onPressIncrement()} title="Clickez moi pour incrémenté"></Button>
            </View>
        );
    }
}

export default Body;
