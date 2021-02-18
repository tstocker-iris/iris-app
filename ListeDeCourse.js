import React, { Component } from 'react';
import {Text, View} from "react-native-web";


class ListeDeCourse extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    label: 'Dentifrice',
                },
                {
                    label: 'Tomate',
                },
                {
                    label: 'Poireau',
                },
                {
                    label: "Tarte au citron"
                }
            ]
        }
    }

    render() {
        return (
            <View>
                {this.state.items && this.state.items.length > 0 &&
                    this.state.items.map((objet) => {
                        return (
                            <Text>{objet.label}</Text>
                        );
                    })
                }
            </View>
        )
    }
}

export default ListeDeCourse
