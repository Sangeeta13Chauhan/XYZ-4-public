import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class RRScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Rustom's Rockstars</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/RR.jpg"/>
                The Rustom’s Rockstars group
                caters to children located in the
                Bandra-Mahim vicinity. This team
                of super enthusiastic and ambitious
                Rockstars have totally lived up to
                two significant values - “make a
                difference” and “fun while you
                learn”.They take pride in learning
                Gujarati, holding Humbandagis and
                partake in Parsi customs. They love
                exploring their adventurous side
                amidst nature and animals. Above
                all, they spread cheer through acts
                of kindness and community service.
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