import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Button,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';

export default class ProfileDetails1 extends Component {
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
            isModalVisible: false
        };
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
            this.props.navigation.navigate('customer')
        }, 2000)
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text 
                            style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: "#010101" }}
                            onPress={() => this.props.navigation.navigate('profiledetails')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                Profile Details
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.container1}>
                <View style={{ flexDirection: "row", margin: hp(1), left: hp(1), }}>
                        <Image source={require('D:/projects/react-native/new/shopping/image/20.ProfileDetail/Account.png')}
                         style={styles.image5}></Image>
                        <Text style={{ marginTop: hp(1), marginLeft: hp(1), fontSize: hp(2.5), color: "#b9252d",
                         fontFamily: "Lato-Regular" }}>Edit Profile (2 of 2)</Text>
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.text5}>Date Of Birth</Text>
                        {/* <Text style={styles.text6}>(Default for Delivery)</Text> */}
                        <View style={styles.fieldSet1}>
                        <Text style={styles.legend}>Day </Text>
                        <Text style={styles.legend2}>   Month  </Text>
                        <Text style={styles.legend3}>  Year</Text>

                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }}></TextInput>

                    </View>
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.text5}>Address</Text>
                        
                        {/* <Text style={styles.text6}>(Default for Delivery)</Text> */}
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Street Name {'\u0026'} Number</Text>
                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }} placeholder={"Enter street name"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Ares/Suburb</Text>
                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }} placeholder={"Area"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Province</Text>
                        <RNPickerSelect
                
            onValueChange={(value) => console.log(value)}
           tit
            dropDownImage={require("D:/projects/react-native/new/shopping/image/5.SignUp-1/DropDown-Arrow-Red.png")}
            items={[
             
                { label: 'State1', value: 'India' },
                { label: 'State2', value: 'USA' },
                { label: 'state3', value: 'UK' },
            ]}
        />
                    </View>
                    {/* <View style={styles.container3}>
                        <View style={{justifyContent:'flex-start',width:'80%'}}>
                            <Text style={styles.text5}>Use Current Location</Text>
                            <Text style={styles.text6}>(Only if at Customer address)</Text>
                        </View>
                        <View style={{justifyContent:'center',width:'20%'}}>
                            <Image 
                            source={require('/Users/imac/Documents/Client/shopping/image/5.SignUp-2/Addres-Icon.png')} style={styles.image}></Image>
                        </View>
                    </View> */}
                    <View style={styles.container2}>
                        <TouchableOpacity  activeOpacity={1} style={styles.touch} onPress={this.toggleModal}>
                            <Text style={styles.text4}>Save Changes</Text>
                            <Image source={require('D:/projects/react-native/new/shopping/image/5.SignUp-1/Next-Button.png')} style={styles.image2}></Image>
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.model} >
                            <Image 
                            source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Succesfully.png')}
                             style={styles.image3}></Image>
                            <Text style={styles.text7} >Updated Successful</Text>
                            <Text style={styles.text10} >Customer Details were</Text>
                            <Text style={styles.text10} >Successfully Updated</Text>

                            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                        </View>
                    </Modal>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor:'white'
    },
    header:
    {
        height: hp(10),

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Black",
        color: '#bf202e',
        textAlign: 'center',
        // justifyContent: "center"
    },
    // text2:
    // {
    //     fontSize: 17,
    //     color: "#8d8d8d",
    //     fontFamily: "Lato-Regular"
    // },
    line:
    {
        backgroundColor: '#B2B2B2',
        padding: hp(0.1),
        marginLeft: hp(6),
        marginRight: hp(6),


    },
    container1:
    {
        borderWidth: hp(0.3),
        //borderRadius: 5,
        borderColor: '#ddd',
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,

        height: hp(75),
        marginLeft: hp(3),
        marginRight: hp(3),
        marginTop: hp(2.5),
        borderRadius: hp(3),
        // marginBottom: hp(5)
        // marginBottom: hp(5)
    },
    fieldSet: {
        marginTop: hp(1.5),
        marginBottom: hp(1.5),
        marginLeft: hp(2),

        marginRight: hp(2),
        paddingHorizontal: hp(1),
        //paddingBottom: 2,
        borderRadius: hp(5),
        borderWidth: hp(0.3),
        //alignItems: "center",
        borderColor: "#ddd"
    },
    fieldSet1:
    {
        marginTop: hp(1.5),
        marginBottom: hp(1.5),
        marginLeft: hp(2),

        marginRight: hp(2),
        paddingHorizontal: hp(1),
        //paddingBottom: 2,
        borderRadius: hp(5),
        borderWidth: hp(0.3),
        //alignItems: "center",
        borderColor: "#ddd",
        flexDirection:"row"
    },
    legend: {
        position: "absolute",
        top: -10,
        left: 13,
       
        // backgroundColor: "#FFFFFF",
        color: "#bf202e",
        fontSize:hp(2.5)
    },
    legend2:
    {
        position: "absolute",
        top: -10,
        left: hp(18),
       
        // backgroundColor: "#FFFFFF",
        color: "#bf202e",
        fontSize:hp(2.5)
    },
    legend3:
    {
        position: "absolute",
        top: -10,
        left: hp(40),
       
        // backgroundColor: "#FFFFFF",
        color: "#bf202e",
        fontSize:hp(2.5)
    },
    // text3:
    // {
    //     textAlign: "center",
    //     marginBottom: 5,
    //     color: "#bc2737",
    //     fontFamily: "Lato-Regular"
    // },
    container2:
    {
        flexDirection: "row",
        //backgroundColor: "#c11d30",
        //borderRadius: 10,
        //width: 100,
        // height: 40,
        // alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
        marginTop:hp(1)
    },
    touch:
    {
        backgroundColor: "#c11d30",
        borderRadius: hp(1.5),
        width: wp(50),
        height: hp(7),
        flexDirection: "row",
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center"

    },
    text4:
    {
        textAlign: "center",
        fontSize: hp(3),
        color: "white",
     marginRight: hp(1.5),
    },
    image2:
    { height: normalize(23),
        width:normalize(23),

    },
    text5:
    {
        color: "#c11d30",
        fontFamily: "Lato-Regular",
        margin: hp(1),
        left: hp(1),
        fontSize:hp(3)
    },
    text6:
    {
        color: "#be5f6e",
        fontFamily: "Lato-Italic",
        margin: hp(1),
        left: hp(1),
        fontSize:hp(2.5)
    },
    container3:
    {
        flexDirection: "row",
       
    },
    model:
    {

        height: hp(50),
        width: wp(90),
        //height:370,
        // flex: 1,
        //margin:10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: hp(5),
       // marginRight:hp(5),

    },

    image5:
    {
        height: hp(3.6),
        width: wp(6),
        marginTop: hp(1)
    },
    text7:
    {
        fontSize: hp(4.5),
        fontFamily: "Lato-Bold",
        marginTop:hp(4),
        color: '#030303',
        marginBottom:hp(1)

    },
    text9:
    {
        marginTop: hp(1.5),
        color: '#bf202e',
        textAlign: 'center',
        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },
    image:
    {
        
        height: normalize(41),
        width: normalize(39),
    },
    image1:
    {
        height: hp(5),
        width: wp(7),
        marginTop: hp(1)
    },
    image3:
    {
        height: normalize(60),
        width: normalize(60),
    },
    text10:
    {
        fontSize:hp(2.8),
        fontFamily:"Lato-Bold",
      //  marginTop:hp(2)
    },
    container4:
    {
        justifyContent:"center",
        marginRight:hp(3)
    },
    dropDownImageStyle: {
        marginLeft: 10,
        width: 10,
        height: 10,
        alignSelf: "center"
      },

})
