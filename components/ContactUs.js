import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Linking,Platform,BackHandler,Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import email from 'react-native-email'
import SendSMS from 'react-native-sms'


console.disableYellowBox = true;
export default class ContactUs extends Component {

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('NewScreen');
      }
      
      handleBackButton = () => {
       Alert.alert(
           'Exit App',
           'Exiting the application?', [{
               text: 'Cancel',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel'
           }, {
               text: 'OK',
               onPress: () => BackHandler.exitApp()
           }, ], {
               cancelable: false
           }
        )
        return true;
      } 
      
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
      
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {

        header: null,
    };
    handleEmail=()=>
    {
      const to =['contactus@sisonke.africa']
      email(to,{
       
     
      }).catch(console.error)
    }
    someFunction() {
        SendSMS.send({
            //Message body
            
            //Recipients Number
            recipients: ['0846783000'],
            //An array of types that would trigger a "completed" response when using android
            successTypes: ['sent', 'queued']
        }, (completed, cancelled, error) => {
            if(completed){
              console.log('SMS Sent Completed');
            }else if(cancelled){
              console.log('SMS Sent Cancelled');
            }else if(error){
              console.log('Some error occured');
            }
        });
      }
      dialCall = () => {
 
        let phoneNumber = '';
     
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${0128440183}';
        }
        else {
          phoneNumber = 'telprompt:${0128440183}';
        }
     
        Linking.openURL(phoneNumber);
      };
  
    render() {
        return (
            <View style={styles.contanier}>
     


                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "15%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold' ,color:'#010101'}}
                                onPress={() => this.props.navigation.navigate('settings')}
                            >
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%" }} >
                            <Text style={styles.text}>
                            Contact Us
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.text1}>
                        Get in touch with Sisonke
                        </Text>
                    </View>
                </View>

                <View style={styles.line} />

         

           

                <View style={styles.contanier2}>
                    <View style={styles.contanier3}>
                        <Text style={styles.text4}>Website</Text>
                        <Text style={styles.text5}>www.sisonke.africa</Text>
                        <View style={styles.contanier4}>
                           <TouchableOpacity  onPress={() => {
            //on clicking we are going to open the URL using Linking
            Linking.openURL('http://www.sisonke.africa/');
          }}>
                            <Image 
                            source={require('D:/projects/react-native/new/shopping/image/4.Contact-Us/Button-Icon.png')}
                             style={styles.image}></Image>
                      </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contanier3}>
                        <Text style={styles.text4}>Email Support</Text>
                        <Text style={styles.text5}>contactus@sisonke.africa</Text>
                        <View style={styles.contanier4}>
                        <TouchableOpacity onPress={this.handleEmail}>
                            <Image source={require('D:/projects/react-native/new/shopping/image/4.Contact-Us/Button-Icon.png')} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contanier3}>
                        <Text style={styles.text4}>Call Us</Text>
                        <Text style={styles.text5}>012 844 0183</Text>
                        <View style={styles.contanier4}>
                        <TouchableOpacity onPress={this.dialCall}>
                            <Image source={require('D:/projects/react-native/new/shopping/image/4.Contact-Us/Button-Icon.png')} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contanier3}>
                        <Text style={styles.text4}>Whatsapp {'\u0026'} SMS</Text>
                        <Text style={styles.text5}>084 678 3000</Text>
                        <View style={styles.contanier4}>
                           <TouchableOpacity onPress={this.someFunction.bind(this)}>
                            <Image source={require('D:/projects/react-native/new/shopping/image/4.Contact-Us/Button-Icon.png')} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contanier:
    {
        flex: 1,
        backgroundColor:'white'
    },
    header: {
        height: hp(10),

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e',
        textAlign:'center'
    },
    text1: {
        color: '#8d8d8d',
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
    },
    text2: {
        fontFamily: "Lato-Bold",
        textAlign: 'center',
        fontSize: hp(2.5),

    },
    line: {

        backgroundColor: '#b2b2b2',
        padding: hp(0.1),
        marginLeft: hp(3),
        marginRight: hp(3)
    },

 
    contanier2:
    {
        flex: 1,
        marginLeft: hp(4),
        marginRight: hp(4),
        marginTop:hp(3),
     

    },
    contanier3:
    {
        height: hp(17),
        backgroundColor: "#bd1f2e",
        borderRadius: hp(2),
        marginTop: hp(2),
        paddingLeft: hp(2),
        paddingRight: hp(2),
        paddingTop: hp(2),
        paddingBottom: hp(2),
    },



    text4:
    {
        
        marginLeft: hp(2),
        fontSize: hp(3.5),
        color: "white",
        fontFamily:'Lato-Bold'

    },

    text5:
    {
        marginTop: hp(0.3),
        marginLeft: hp(2),
        color: "white",
        fontFamily:'Lato-Regular',
        fontSize: hp(3),
    },

    image:
    {
        height: normalize(25),
        width: normalize(25),
   
    },
    contanier4:
    {
      marginTop: hp(1),
      alignItems:'flex-end',
        justifyContent: "flex-end",
        marginRight: hp(2),
    
    }
})
