import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, Alert, AsyncStorage, TouchableOpacity,BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
import axios from 'axios';

export default class Agentlogin extends Component {
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
            isModalVisible: false,
            mobile_numbers: '',
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR'
        };
    }
    validation = () => {
        if (this.state.mobile_numbers == "") {
            // alert("Please enter your mobile number")
            this.toggleModal()
        } else if (this.state.mobile_numbers.length != 10) {

            // alert("Please Enter 10 digits")
            this.toggleModal()

        }
        else {
            var instance = axios.create({
                baseURL: 'http://167.172.157.118/spazapro/public/api',
                headers: { 'Content-Type': 'application/json' }
            })
            instance.post('/agentLogin', {
                token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
                mobile_numbers: this.state.mobile_numbers,
            })
                // .then(function (response) {
                //     this.props.navigation.navigate('verifyuser',{
                //         data: [this.state.mobile_numbers ]

                //     })
                //     console.log(response.data);
                // })
                .then(response => {
                    console.log(response.data);
                  
                    if(response.data.result=="success"){
                    this.props.navigation.navigate('agentverifyuser', {
                        data: [this.state.mobile_numbers]
                    
                    })
                }
                else{
                    alert("Please enter Valid Number")
                }
                })
            
                .catch(function (error) {
                    console.log(error);
                    alert("mobile incorret")
                });

        }
    }

    static navigationOptions = {

        header: null,
    };
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
        setTimeout(() => {
            this.setState({
                isModalVisible: !this.state.isModalVisible
            });
            this.props.navigation.navigate('agentlogin')
        }, 2000)

    };




    // Login = () => {
    //     var instance = axios.create({
    //         baseURL: 'http://167.172.157.118/spazapro/public/api',
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     instance.post('/login', {
    //         token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
    //         mobile_numbers: this.state.mobile_numbers,
    //     })
    //         .then(function (response) {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }




    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold' }}
                        onPress={() => this.props.navigation.navigate('agentwelcome')}
                    >
                        Back
                        </Text>
                </View>
                <View style={styles.header1}>
                    <Image
                        source={require('D:/projects/react-native/new/shopping/image/1.Splash/Logo.png')}
                        style={styles.image}></Image>


                </View>
                <View style={styles.body}>
                    <View style={{ marginTop: hp(3) }}>
                        <Text style={styles.text}>Log in</Text>
                        <Text style={styles.text1}>Mobile Number</Text>

                        <TextInput
                            onChangeText={(mobile_numbers) => this.setState({ mobile_numbers })}
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.text2}
                            underlineColor="transparent"

                            placeholder={"Enter Your Number"}
                        />

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp(5) }}>
                            <TouchableOpacity style={styles.button}
                                activeOpacity={1}
                                onPress={() => this.validation(this.state.mobile_numbers)}
                            // onPress={this.toggleModal}
                            // onPress={this.Login()}

                            // onPress={this.registerCall()}
                            >
                                <Text style={styles.text3}  >
                                    Enter
                     </Text>
                            </TouchableOpacity>
                            <Modal isVisible={this.state.isModalVisible} onRequestClose={() => { this.visibleModal(false); }} >
                                <View style={styles.model3} >

                                    <Image
                                        source={require('D:/projects/react-native/new/shopping/image/verficationFail.png')} style={styles.image4}></Image>
                                    <Text style={styles.text7} >Verification Failed.</Text>
                                    <Text style={styles.text11} >Mobile number Verification</Text>
                                    <Text style={styles.text11} >unsuccessful.please try again or</Text>
                                    <Text style={styles.text11} >Contact us if this persists.</Text>


                                    {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}

                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: hp(2) }}>
                    <Text style={styles.text4} onPress={() => this.props.navigation.navigate('welcome1')}>Terms {'\u0026'} Conditions</Text>
                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'white'

    },
    header: {
        height: hp(6),

        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    header1: {
        height: hp(25),

        justifyContent: 'center',
        alignItems: 'center',


    },

    image: {
        width: normalize(132), height: normalize(150),

    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e',
        textAlign: 'center'
    },
    text1: {
        fontSize: hp(2.5),
        marginTop: hp(5),
        marginLeft: hp(4),
        marginRight: hp(3),
        fontFamily: "Lato-Regular",


    },
    text2: {
        height: hp(8),
        marginTop: hp(2),
        marginLeft: hp(3),
        marginRight: hp(3),
        borderWidth: hp(0.1),
        borderColor: '#ddd',
        borderRadius: hp(3),
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
        fontFamily: 'Lato-Regular'


    },
    body: {
        margin: hp(4),
        height: hp(45),
        shadowColor: '#ddd',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        borderRadius: 10,
        backgroundColor: 'white',





    },
    text3: {
        textAlign: 'center',
        color: 'white',
        fontSize: hp(3),
        fontFamily: "Lato-Regular",

    },
    button: {
        width: wp(45),
        height: hp(7),
        backgroundColor: '#bf202e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(5)
    },
    text4: {
        marginBottom: hp(1),
        color: '#bf202e',
        marginTop: hp(2),
        textAlign: 'center',
        fontSize: hp(2.5),
        fontFamily: 'Lato-Regular'
    },
    model3:
    {

        height: hp(40),
        width: wp(90),
        backgroundColor: "white",
        borderRadius: hp(5),
        alignItems: 'center',
        justifyContent: "center"

    },
    text12:
    {
        fontSize: hp(3.4),
        fontFamily: "Lato-Black",
        color: "#010101"
    },
    text7:
    {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        justifyContent: "center",
        color: '#030303',
        marginBottom: hp(1)

    },
    image4:
    {

        height: normalize(80),
        width: normalize(80),
        // marginTop:hp(5)
    },
})