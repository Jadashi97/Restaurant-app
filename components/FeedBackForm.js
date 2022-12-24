import React, {useState} from 'react';

import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

const FeedBackForm = () => {
    // declare variables
    const [firstName, onChangeFistName] = useState(" ");

    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
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
