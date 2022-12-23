import React, {useState} from 'react';

import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

const FeedBackForm = () => {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [message, onChangeMessage] = useState('');

    return (
        <ScrollView>
            <Text>
                How was your visit to Natana Restaurant?
            </Text>
            <Text>
                This is a charming Restaurant and offers a sensational 
                food experience with incredible organic meals
            </Text>
            <TextInput
                style={}
                value={}
                onChangeText={}
            />
            <TextInput
                style={}
                value={}
                onChangeText={}
            />
            <TextInput
                style={}
                value={}
                onChangeText={}
            />
        </ScrollView>
    )
}

export default FeedBackForm
