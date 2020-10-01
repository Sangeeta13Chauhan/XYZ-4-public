import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class AAScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Artaxerxes' Army</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/AA.bmp"/>
                Artaxerxes’ Army is the backbone of XYZ. The team has worked tirelessly over the years to
                create new events and activities to ensure that the members enjoy every moment that they
                are a part of XYZ. Each individual works hard to bring about a paradigm change in the way the
                events are organized and executed. This committee also conducts workshops to Train The
                Trainers and develops the next generation of leaders to take the foundation forward.
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