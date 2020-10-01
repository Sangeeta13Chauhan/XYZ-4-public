import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class SeniorsScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>XYZ Seniors</Text>
            
            <View>
            <Text style={styles.container}>

            The XYZ Foundation has been 
            working since 2014 with children of the community
            between the ages of 5 and 15 years.
            We are now creating a new group – XYZ Seniors
            which aims at creating a fun, interactive and a creative
            outlet for youth over the age of 15 years.
            This group will create a sense of belonging and pride 
            within the community and also provide extra curricular 
            activities with social awareness, personality development
            and life skills. There will be fun events, sports, games and 
            other activities that are of the youth, by the youth and for
            the youth.
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