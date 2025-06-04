import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to JAJA's App!!!</Text>
            <Image
            source={require('C:/Users/ISMS/CA3MobileAppJaja/assets/images/me.jpg')}
            style={styles.image}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
      },
});