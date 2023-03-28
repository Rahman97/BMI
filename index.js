import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'

const BmiCalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBmi = () => {
        const bmi = weight / ((height / 100) * (height / 100))
        setBmi(bmi.toFixed(1))

        if (bmi < 18.5 ) {
            setDescription('Underweight, eat more!!')
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            setDescription('u are normal, chill')
        }
        else if (bmi >= 25 && bmi <= 24.9) {
            setDescription('overweight, diet dude ')
        }
        else if (bmi >= 30) {
            setDescription('Obese u gonna dead  ')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}> Bmi Calculator </Text>
            </View>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                placeholder="Weight in kg"
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={(text) => setHeight(text)}
                placeholder="Height in cm"
                keyboardType='numeric'
            />
            <TouchableOpacity
            style={styles.button}
            onPress={calculateBmi}
            >
                <Text style={styles.buttonText}> Calculate</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.description}>{bmi} BMI</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

export default BmiCalculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e0ecde',
    },
    title: {
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',

    },
    input: {
        backgroundColor: "#fff",
        padding: 15,
        margin: 10 ,
        borderWidth: 2, 
        borderRadius:5,   
    },
    button:{ 
        paddingTop: 10,
        backgroundColor: '#68b2a0',
        borderRadius: 5, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
        borderWidth: 1/2, 
    },
    buttonText: { 
        fontSize: 10,
        color: '#fff',
        fontWeight:'500',
    },
    description: { 
        padding: 5,
        fontSize: 25, 
        fontWeight:'300', 
        color: '#FF0000'
        
    }
});

