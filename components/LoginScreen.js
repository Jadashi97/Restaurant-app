import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const LoginScreen = () => {

    const [email, onChangeEmail] = useState(" ");
    const [password, onChangePassword] = useState("");



    return (
        <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Natana Restaurant</Text>
        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          placeholder={"Email Address"}
          onChange={onChangeEmail}
          keyboardType={'email-address'} 
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          placeholder={"password"}
          onChange={onChangePassword}
          keyboardType={'default'}
          secureTextEntry={true}  
        />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
    regularText:{
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: 'center'
    },
    inputBox:{
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#EDEFEE',
    }
})
export default LoginScreen
