import React, { Component } from 'react';
import {Text} from "react-native-web";
import {StyleSheet} from "react-native";

class CustomHeader extends Component {
    render() {
        return (
            <Text style={styles.header}>
                {this.props.title}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        marginBottom: '50px',
        padding: '10px'
    },
});


export default CustomHeader;
