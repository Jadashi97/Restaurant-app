import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, useColorScheme, useWindowDimensions} from 'react-native';

export default function WelcomeScreen() {
    const colorScheme = useColorScheme(); // used to switch between color themes
    const window = useWindowDimensions(); // used to detail the app's dimensions

    return (
            <ScrollView
                indicatorStyle='white'
                style={[styles.container, 
                        colorScheme === 'light'
                        ? {backgroundColor: '#fff'}
                        : {backgroundColor: '#333333'}
                ]}>
                <View style={styles.headerWrapper}>
                    <Image style={styles.logo} source={require('../assets/myLogo.png')}/>
                    <Text style={[styles.headerText,
                        colorScheme === 'light'
                        ? {color: '#333333'}
                        : {color: '#EDEFEE'}
                    ]}>
                        Welcome to Natana Restaurant 
                    </Text> 
                </View>
                <Text
                    style={[
                        styles.mainInfo,
                        colorScheme === 'light'
                        ? {color: '#333333'}
                        : {color: '#EDEFEE'}
                    ]}>
                    
                    The Natana Restaurant is a charming neighborhood bistro that 
                    serves simple food and classic cocktails in a casual environment.
                    We would like to see you more. We love that you are here to support us 
                    and offer back to the local community.
                </Text>
                {/* <Image 
                    style={styles.image} 
                    source={require('../assets/pic1.png')}
                    resizeMode= "cover"
                    accessibility={true}
                    accessibilityLabel={'Natana Restaurant food'}
                />
                <Image 
                    style={styles.image} 
                    source={require('../assets/pic5.png')}
                    resizeMode= "cover"
                    accessibility={true}
                    accessibilityLabel={'Natana Restaurant food'}
                />
                <Image 
                    style={styles.image} 
                    source={require('../assets/pic3.png')}
                    resizeMode= "cover"
                    accessibility={true}
                    accessibilityLabel={'Natana Restaurant food'}
                />
                <Image 
                    style={styles.image} 
                    source={require('../assets/pic4.png')}
                    resizeMode= "cover"
                    accessibility={true}
                    accessibilityLabel={'Natana Restaurant food'}
                /> */}
                <Text style={styles.regular}>Window Dimensions</Text>
                <Text style={styles.regular}>Height: {window.height}</Text>
                <Text style={styles.regular}>Width: {window.width}</Text>
                <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#333333'
    },
    logo:{
        height: 70,
        width: 70,
        resizeMode: "contain",
        borderRadius: 10,
    },
    headerText: {
        padding: 20,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    mainInfo: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
});