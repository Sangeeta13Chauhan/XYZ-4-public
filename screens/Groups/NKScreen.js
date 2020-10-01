import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class NKScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Noshirwans Knights</Text>
            
            <View>
            <Text style={styles.container}>
                <Image src = "../assets/NK.jpg"/>
                The Noshirwan’s Knights from
                Thana are a small but a super
                charged group. They just
                completed 3 years and are
                proud to be part of XYZ. They    
                have never missed doing a
                funday from the time of
                inception. Their brilliant fundays
                have been an educational
                where the kids learn composting
                and organic farming. They
                have also made rakhis and
                photo frames and are brilliant
                at creating innovative games
                for getting their parents and
                seniors to enjoy. The
                Noshirwan’s Knights work
                towards raising funds,
                collecting food grains and
                donating the same and serving
                the hungry.
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