import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState(" ");
    const [password, onChangePassword] = useState("");
    const [loggedIn, onLogin] = useState(false);



    return (
        
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Natana Restaurant</Text>
            {loggedIn && <Text style={styles.headerText}>You are logged in! </Text>}

            {!loggedIn && (
                <>
                <Text style={styles.regularText}>Login to continue! </Text>
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
                <Pressable onPress={()=> navigation.navigate("Welcome")} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
                </>
            )}
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
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
})
export default LoginScreen
