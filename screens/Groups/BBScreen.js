import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class BBScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Behram's Battalion</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/BB.jpg"/>
                Behram's Battalion is based out
                of Dadar, Wadala and Parel. The
                kids of BB like to be innovative
                in their fundays and try to 
                make each activity a lasting
                memory for all members. They
                have made a life size Znakes
                and Zadders and introduced the
                concept of BB Badges to
                engage the members in XYZ
                related activities to basically have
                a lot of fun.
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