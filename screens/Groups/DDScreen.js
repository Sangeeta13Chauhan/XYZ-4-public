import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class DDScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Darius' Daredevils</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/DD.jpg"/>
                The Daraius’ Daredevils are based in Cusrow
                Baug and cater to the colony kids along with
                children in and around Colaba and Fort.
                While the kids take part in all the activities,
                literary arts, nature, religion, social service,
                outdoor games and sporting activities are
                enjoyed the most. All in all the
                Daredevils are a fun loving bunch of kids.
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