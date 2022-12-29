import React, {useState} from 'react';

import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const FeedBackForm = () => {
    // declare variables
    const [firstName, onChangeFistName] = useState(" ");
    const [lastName, onChangeLastName] = useState(" ");
    const [message, onChangeMessage] = useState(" ");
    const [phone, onChangePhoneNumber] = useState('');

    return (
        <KeyboardAvoidingView
            // this handles for what shoould happen to the keyboard when text happens
            style={styles.container}
            behavior={Platform.OS === 'ios'? 'padding' : 'height'}> 
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headingSection}>
                    Welcome to Natana Restaurant.
                </Text>
                <Text style={styles.infoSection}>
                    This is a restautarant built to serve our
                    local community with recipes that come from 
                    mama's Kitchen.
                </Text>
                <TextInput
                    style={styles.inputBox}
                    value={firstName}
                    placeholder={"First Name"}
                    onChange={onChangeFistName}
                />
                <TextInput
                    style={styles.inputBox}
                    value={lastName}
                    placeholder={"Last Name"}
                    onChange={onChangeLastName}
                />
                <TextInput
                    style={styles.inputBox}
                    value={phone}
                    placeholder={"Phone Number"}
                    onChange={onChangePhoneNumber}
                    keyboardType={"phone-pad"}
                />
                <TextInput
                    style={styles.messageInput}
                    value={message}
                    placeholder={"Please Leave FeedBack it helps us deliver the best care to you the customer"}
                    onChange={onChangeMessage}
                    multiline={true}
                    maxLength={250}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBox: {
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#EDEFEE',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#EDEFEE'
    },
    infoSection: { 
        fontSize: 24, 
        padding: 20, 
        marginVertical: 8, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        backgroundColor: '#495E57',     
    },
    headingSection: { 
        fontSize: 28, 
        padding: 20, 
        marginVertical: 8, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        backgroundColor: '#495E57', 
     }, 
})


export default FeedBackForm
