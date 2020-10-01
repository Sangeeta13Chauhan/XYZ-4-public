import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class PPScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Pourushap's Platoon</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/PP.png"/>
                XYZ’s Advisory Council is also known as Pourushasp’s Platoon. It comprises of
                luminaries of the community who take time out of their busy schedule to meet and
                discuss the activities of XYZ and the way forward. Each individual who is a part of
                the council gives their own expertise in the fields or religion, philanthropy, law,
                education, motivation, health, finance and community development
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