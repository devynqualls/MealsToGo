import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function List() {
    return (
        <View>
            <Text style={styles.text}>Main</Text>
        </View>
    )
}

    const styles = {
        text: {
            paddingTop: 10
        }
    }