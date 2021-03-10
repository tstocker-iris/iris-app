import React, { Component } from 'react';
import {Button, Text, TextInput, View} from "react-native-web";

class TodoList extends Component {
    render() {
        return (
            <View>
                <Text>Ma TodoList</Text>
                {/*Placer ici la boucle*/}

                <TextInput />
                <Button title={"Ajouter un item à ma liste"}/>
            </View>
        );
    }
}

export default TodoList
