import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = ()=>{

        alert('Name: ${name}\nEmail: ${email}');
    };
                                  
    return (
        <View style={styles.container}>
            <Text style={styles.label}> Name:</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            />

            <Text style={styles.label}> Email:</Text>
            <TextInput                 
             style={styles.input}
             placeholder="Enter your email"
             value={email}
             onChangeText={setEmail}
             keyboardType="email-address"
             autoCapitalize="none"
             />

             <Button title="Save" onPress={handleSave}/>
            </View>
    );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 20,
        justifyContent: 'center',
    
    },
     label:{
        fontSize:16,
        marginBottom: 6,
        fontWeight: '500',
     },
     input: {
        borderWidth: 3,
        borderColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 6,
        marginBottom: 20,
     },
 });