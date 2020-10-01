import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class CSScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Cyrus' Superstars</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/CS.jpg"/>
                The Cyrus’ Superstars are kids
                from Godrej Baug, Kharegat
                Colony and the Tardeo area.
                Singing and creating songs is
                their forte. Their fundays are
                novel and fun-filled which
                include fusion Parsi food,
                enjoying Gujarati theatre,
                visiting the Theobroma factory,
                Glass painting with seniors,
                dance sessions with parents.
            </Text>
            </View>
            </View>
        )
    }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    }
  });