import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class XIScreen extends Component {
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
            <Image src = "../assets/XI Logo.png"/>
                <Image src = "../assets/XI.png"/>
                XYZ’s Xerxes’ Invincibles is the alumni group of XYZ. After the members cross the age of
                15 years, they can join the XI. This group is also known as XYZ Seniors. They have been
                groomed over the last couple of years to plan and organize XYZ events and mentor the
                current XYZs as well. The group will now even organize events for other youth and
                members of the community to ensure bonding and a sense of belonging and pride.
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