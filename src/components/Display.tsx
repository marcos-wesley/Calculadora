import React from "react";
import { StyleSheet, Text, View } from "react-native";

const sytles = StyleSheet.create ({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})


export default function Display(props) {
  return (
    <View style={sytles.display}>
        <Text style={sytles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>
  );
}
