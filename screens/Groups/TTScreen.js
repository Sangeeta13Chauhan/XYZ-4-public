import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class TTScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Tehmurasp's Titans</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/TT.jpg"/>
                The Tehmurasp’s Titans are
                from the Andheri area with kids
                from Salsette, Behram Baug,
                PanthakyBaug, etc. These kids
                are masters at indoor games
                and have won the XYZ Indoor
                Mania trophy thrice. It's a fun
                group who has done really well
                at Social Service activities in
                the past 5 years. They have
                raised funds to feed children
                the mid-day meals and collected
                numerous story books with the 
                help of all the XYZ groups and 
                donated the same to set up
                libraries in Anganwadis in Karjat.
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