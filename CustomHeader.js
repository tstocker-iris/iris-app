import React, { Component } from 'react';
import {StyleSheet, Text} from "react-native";

class CustomHeader extends Component {
    tata() {

    }

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
        backgroundColor: 'blue',
        marginBottom: '50px',
        padding: '10px'
    },
});


export default CustomHeader;
