import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class DonorScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>XYZ Donors</Text>
            
            <View>
            <Text style={styles.container}>

            Dear Sir / Madam,

Xtremely Young Zoroastrians (XYZ) is an organisation 
aimed at promoting togetherness and camaraderie within 
the youngsters of the Zoroastrian Community. XYZ aspires
 to mould the children between the ages of 5 and 15 years
 to become better individuals and inculcate the Zoroastrian 
values through fellowship and service activities.

We at Xtremely Young Zoroastrians would like to thank you
so much for showing interest in our activities. XYZ 
Foundation is a registered trust with the Charity 
Commissioner of Greater Mumbai with the Registered Trust
No. E30970 (M) from 16th March 2015 with
 PAN No. AAATX0125H and TAN No. MUMX00599E.
 
XYZ Foundation has received the 80-G Certificate from the
 Office of the Commissioner of Income Tax. From 29th July
 2016 onwards, all donations received by XYZ Foundation
will also benefit the donor with 50% deduction in their
Income Tax.

The purpose of XYZ is to build a strong sense of community
belonging and pride in the Zoroastrian children. 
The religious practices are an important part of our culture
and we want our children to start adhering to them from an
early age.

Since leadership skills like goal setting, decision making, 
team work, people skills, money management and ethics
are also very important attributes, they too will be inculcated
 through various activities of XYZ through our Sunday
sessions which take place in 8 centres all over the city of 
Mumbai, namely – Colaba, Tardeo, Byculla, Parel, Dadar,
Avabai Petit School Boarders, Bandra and Andheri.


XYZ Foundation has carried out numerous events for the 
children of our community like XYZ Games,
XYZs Got Talent, XYZ Summer Camp, 
XYZ LAFA – Literary Arts & Fine Arts, XYZ Indoor Mania, 
XYZ Xtravaganza and XYZ Leadership Camp.

To meet our objectives, we solicit the support of each and 
every individual and organisation that shares our vision for
a brighter future. We hope that you help to catapult our 
effort and enthusiasm to its zenith.

XYZ currently has 500 members, ie. children in the age 
group of 5-15 years in our 8 centres. 

We thus request you, to give us some time to meet, so that 
we can explain our initiative to you personally and/or 
indicate in which way you can help to further XYZ’s 
objectives. Your support can be either in cash or kind and
will be invaluable to help develop our cause.

We take this opportunity to thank you in anticipation, in
helping us realise our vision, which will be completely in the
interest of our Xtremely Young Zoroastrians.

Looking forward to hearing from you soon. 

With warm regards,
Hoshaang Gotla

Founder, XYZ

<img src="C:\Users\yazdk\Documents\XYZ\XYZ Application\XYZ_application\assets\Donor chart.png"/>

Donations of any amount are accepted. Cheques must be
drawn in favour of XYZ Foundation and could we request 
you to please provide your PAN Number at the back of 
cheque.
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