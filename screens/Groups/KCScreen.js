import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class KCScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Ketayuns Conquerors</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/KC.jpg"/>
                Ketayun’s Conquerors is made
                up the girls from the boarding
                section of the Bai Ava Bai
                Framji Petit School. An
                extremely energized and hands
                on group with a competitive
                spirit. They have been winners
                of the Best XYZ Group Award
                twice in the last 5 years. Being
                boarders, most of the activities
                happen within the premises of
                the school. The girls themselves
                take care of pets, do gardening,
                come up with amazing
                entrepreneurial ideas such
                as mehendi, painting canvas,
                dancing for a show etc.
                They learn Gujarati and Prayers
                from their teachers and also
                learn a lot about the
                Zoroastrian religion from
                our Mobeds.
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