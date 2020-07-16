import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
import axios from 'axios';

console.disableYellowBox = true;

export default class Agentverifyuser extends Component {
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
            code: ''
        };
    }
    static navigationOptions = {

        header: null,
    };
    validation = () => {
        const data = this.props.navigation.getParam('data');
        const mobilenumber = data[0]
        console.log(data[0])
        if (this.state.code == "") {
            alert("Please enter your pin number")
        } else if (this.state.code.length != 5) {

            alert("Please Enter valid pin number")

        }
        else {
            var instance = axios.create({
                baseURL: 'http://167.172.157.118/spazapro/public/api',
                // headers: { 'Content-Type': 'application/json' }
            })
            instance.post('/agentVerify', {
                token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
                mobile_no: mobilenumber,
                verify_code: this.state.code
            })
            .then(response => {
                console.log(response.data);
              
                if(response.data.result=="success"){
                // this.props.navigation.navigate('customer', {
                //     data: [this.state.mobile_numbers]
                
                // })
                this.toggleModal()
            }

            else{
                alert("PIN Incorrect")
            }
            })
        
                .catch(response => {
                    alert(response.error)
                    console.log(response.error);

                });
        }
    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });

        setTimeout(() => {
            this.setState({
                isModalVisible: !this.state.isModalVisible

            });
            this.props.navigation.navigate('agent')
        }, 2000)
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold' }}
                        onPress={() => this.props.navigation.navigate('agentlogin')}
                    >
                        Back
                        </Text>
                </View>
                <View style={styles.header1}>
                    <Image source={require('D:/projects/react-native/new/shopping/image/1.Splash/Logo.png')} style={styles.image}></Image>


                </View>
                <View style={styles.body}>
                    <View style={{ marginTop: hp(3) }}>
                        <Text style={styles.text}>Verifying User</Text>
                        <Text style={styles.text1}>Please enter the unique code sent via SMS</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>
                            <OTPInputView
                                style={{ width: '85%', height: 50, }}
                                pinCount={5}
                                onCodeChanged={code => { this.setState({ code }) }}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code => {

                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp(5) }}>
                            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => this.validation(this.state.code)}
                            >
                                <Text style={styles.text3}>
                                    Verify
                     </Text>
                            </TouchableOpacity>
                            <Modal isVisible={this.state.isModalVisible} onRequestClose={() => { this.visibleModal(false); }} >
                                <View style={styles.model2} >

                                    <Image source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Succesfully.png')} style={styles.image4}></Image>
                                    <Text style={styles.text7} >Verification successful.</Text>
                                    <Text style={styles.text11} >Signing you in.</Text>



                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', }}>
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
        fontSize: hp(3),
        fontFamily: "Lato-Regular",
        marginLeft: hp(4),
        marginRight: hp(3),

    },
    text1: {
        fontSize: hp(2.5),
        marginTop: hp(3),
        marginLeft: hp(4),
        marginRight: hp(4),
        fontFamily: "Lato-Regular",


    },
    text2: {
        height: hp(8),
        marginTop: hp(3),
        marginLeft: hp(3),
        marginRight: hp(3),
        borderWidth: hp(0.1),
        borderRadius: hp(3),
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),


    },
    body: {
        marginTop: hp(6),
        marginBottom: hp(4),
        marginLeft: hp(4),
        marginRight: hp(4),
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
        fontSize: hp(2.5)
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
    underlineStyleBase: {
        width: 40,
        height: 40,
        backgroundColor: '#d37b81',
        color: 'black',
        borderRadius: hp(1)
        // borderWidth: 0,
        // borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "pink",
        backgroundColor: '#d37b81',
        color: 'black'
    },
    model2:
    {
        height: hp(50),
        width: wp(90),
        //height:370,
        // flex: 1,
        //margin:10,
        // flexDirection: 'column',
        // justifyContent: 'center',

        backgroundColor: "white",
        borderRadius: hp(5),
        alignItems: 'center',

    },

    text7:
    {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        marginTop: hp(4),
        color: '#030303',
        marginBottom: hp(1)

    },
    text11:
    {
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
        color: "#010101"
    },
    image4:
    {

        height: normalize(80),
        width: normalize(80),
        marginTop: hp(10)
    },
})