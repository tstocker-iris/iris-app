import React, { Component } from 'react';
import {Button, CheckBox, Text, TextInput, View} from "react-native-web";
import {StyleSheet} from "react-native";

class TodoList extends Component {

    constructor() {
        super();

        this.state = {
            todoList: [],
            doneList: [],
            currentText: '',
        };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.setSelection = this.setSelection.bind(this);
    }

    
    onChangeText(text) {
        this.setState({
            currentText: text,
        })
    }

    onButtonPress() {
        this.setState({
            todoList: [...this.state.todoList, this.state.currentText],
            doneList: [...this.state.doneList, false],
        })
    }

    setSelection(index) {
        let currentDoneList = this.state.doneList;
        currentDoneList[index] = !currentDoneList[index];
        this.setState({
            doneList: currentDoneList,
        })
    }

    render() {
        return (
            <View>
                <Text style={{marginBottom: '10px'}}>Ma TodoList</Text>
                {/*Placer ici la boucle*/}
                {this.state.todoList && this.state.todoList.length > 0 && this.state.todoList.map((item, index) => {
                        return (
                            <View key={index} style={styles.checkboxContainer}>
                                <CheckBox
                                    value={this.state.doneList[index]}
                                    onValueChange={() => this.setSelection(index)}
                                    style={styles.checkbox}
                                />
                                <Text style={[this.state.doneList[index] ? styles.textBarre : '']}>{item}</Text>
                            </View>
                        );
                    })
                }
                {!this.state.todoList || this.state.todoList.length == 0 &&
                    <Text>Aucun item dans la todolist</Text>
                }

                <TextInput style={styles.textInput}
                           onChangeText={text => this.onChangeText(text)}
                           value={this.state.currentText}/>
                <Button title={"Ajouter un item à ma liste"} onPress={this.onButtonPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        border: '1px solid black',
        padding: '10px',
        marginBottom: '20px',
        marginTop: '20px',
    },
    textBarre: {
        textDecoration: 'line-through',
        fontWeight: 'bold',
    },
    checkbox: {
        alignSelf: "center",
        marginRight: '10px',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
});

export default TodoList
