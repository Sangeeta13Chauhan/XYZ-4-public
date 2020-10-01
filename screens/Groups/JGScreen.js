import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class JGScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Jamshed's Giants</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/JG.jpg"/>
                Jamshed's Giants are an integral
                part of XYZ situated in the heart 
                of Byculla. They are a bunch of
                happy go lucky kids who 
                believe in having loads of fun
                and putting in their best
                foot forward. The children are 
                extremely creative and have
                loads of fun at all events.
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