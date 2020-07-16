import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Button,Picker,BackHandler,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import axios from 'axios';

import Modal from "react-native-modal";
import NetInfo from "@react-native-community/netinfo";

export default class SignUp2 extends Component {
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
      async storeToken(user) {
        try {
           await AsyncStorage.setItem("userData", JSON.stringify(user));
           
           console.log(user)
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
     
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        NetInfo.fetch().then(state => {
            console.log("status:",state.isConnected)
            if(!state.isConnected){
          // this.setState({web:false,image:true})
          Alert.alert(
            "No Internet Connection",
            "Sorry, this app require internet connection. try again later" ,
            [
              {text:'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () =>{
                console.log('clicked');
                return BackHandler.exitApp();
                }},
            ],
            { cancelable: false }
          )
          }
            else{
              console.log("timer")
            }
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
          });
        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 'Content-Type': 'application/json' }
        })
        instance.post('/getProvinceByZoneId', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
            zone_id:'1'
        })
 
            .then(response => {
               console.log(response.data);
               this.setState({
                dataSource: response.data.data

              })



        })
            .catch(function (error) {
                console.log(error);
            });
      }
      
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            streetname: "",
            area: "",
            //value: "",
            province: '',
            // data:''
            dataSource:[],


        };



    }
   
    updateUser = (province) => {
        this.setState({ province: province })
    }
    static navigationOptions = {

        header: null,
    };
   

    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
           
        });

        setTimeout(() => {
            this.setState({
                isModalVisible: !this.state.isModalVisible
            });
            this.props.navigation.navigate('customer')
        }, 2000)
    };
    register = () => {
    
        const data1 = this.props.navigation.getParam('data1');
        const userid=data1[0]

        console.log(userid)
    

        if (this.state.streetname == "") {
            alert("Please enter your streetname or number")
        }
        else if (this.state.area == "") {
            alert("Please enter your area")
        }
        else if (this.state.province == "") {
            alert("Please select your province")
        }
        else {
            //this.toggleModal()
            this.setState({
                loading: true,

            })
            var instance = axios.create({
                baseURL: 'http://167.172.157.118/spazapro/public/api',
                 headers: {'Content-Type': 'application/json'}
            })
            instance.post('/registerStep2', {
                token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
               user_id:userid,
                street_name: this.state.streetname,
                province_id: this.state.province,
                location: this.state.area,
           
            })
            .then(response => {
                console.log(response);
                this.setState({
                 dataSource: response.data.data,
                 loading:false
               })
               this.storeToken(JSON.stringify(response.data));
               this.toggleModal()
         })
             .catch(function (error) {
                 console.log(error);
             });
 
        }
    }
    // register = async () => {
    //     fetch('http://167.172.157.118/spazapro/public/api/register', {
    //         method: 'post',
    //         headers: {

    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "provider": "mobileno",
    //             "data": {

    //                 "street_name": this.state.streetname,
    //                 "province_id": this.state.value,

    //             }
    //         })
    //     }).then((response) => response.json())
    //         .then((res) => {

    //             if (typeof (res.message) != "undefined") {

    //                 Alert.alert("Error", "Error: " + res.message);
    //             }
    //             else {

    //                 Alert.alert("Welcome", " You have succesfully logged in");
    //             }
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    // }


    render() {
        const {dataSource} = this.state;
        console.log(dataSource.user_id)
        console.log(dataSource.state_name)

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: "#010101" }} onPress={() => this.props.navigation.navigate('signup')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                Sign Up
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.container1}>
                    <View style={{marginTop:hp(2)}}>
                        <Text style={styles.text5}>Address</Text>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Street Name {'\u0026'} Number</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5),color:'#545454' }}
                            onChangeText={(streetname) => this.setState({ streetname })}
                            placeholderTextColor="#545454"  placeholder={"Enter Street Name"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Ares/Suburb</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5),color:'#545454' }}
                            onChangeText={(area) => this.setState({ area })}
                            placeholderTextColor="#545454"  placeholder={"Enter Area Name"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Province</Text>
                        <Picker selectedValue={this.state.province} onValueChange={this.updateUser} style={{color:'#545454'}}>
                                    <Picker.Item label="Select Province" color='#545454'/>
                                    <Picker.Item label="State1" value="1" color='#545454'/>
                                    <Picker.Item label="State2" value="2" color='#545454'/>
                                    <Picker.Item label="State3" value="3" color='#545454'/>
                                    <Picker.Item label="State4" value="4" color='#545454'/>

                                </Picker>
                    </View>
                    <View style={styles.container3}>
                        <View style={{ justifyContent: 'flex-start', width: '80%' }}>
                            <Text style={styles.text5}>Use Current Location</Text>
                        </View>
                        <View style={{ justifyContent: 'center', width: '20%' }}>
                            <TouchableOpacity>
                                <Image source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Addres-Icon.png')}

                                    style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.touch} onPress={() => this.register(this.state.streetname, this.state.area, this.state.province)}>
                            <Text style={styles.text4}>Save Changes</Text>
                            <Image source={require('D:/projects/react-native/new/shopping/image/5.SignUp-1/Next-Button.png')} style={styles.image2}></Image>
                        </TouchableOpacity>
                    </View>
                    {this.state.loading && (
          <ActivityIndicator
            style={{ height: 10,marginTop:hp(1) }}
            color='#bf202e'
            size="small"
          />
        )}
                    <Modal isVisible={this.state.isModalVisible}  >
                        <View style={styles.model} >
                            <Image
                                source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Succesfully.png')}
                                style={styles.image1}></Image>
                            <Text style={styles.text7} >Registration Successful</Text>
                            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                        </View>
                    </Modal>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <Text style={styles.text8} onPress={() => this.props.navigation.navigate('welcome1')}>Terms {'\u0026'} Conditions</Text>
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
        fontFamily: "Lato-Bold",
        color: '#bf202e',
        textAlign: 'center',
        // justifyContent: "center"
    },
    text2:
    {
        fontSize: 17,
        color: "#8d8d8d",
        fontFamily: "Lato-Regular"
    },
    line:
    {
        backgroundColor: '#B2B2B2',
        padding: hp(0.1),
        marginLeft: hp(6),
        marginRight: hp(6),

    },
    container1:
    {
        shadowColor: '#ddd',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 5,
        shadowOffset: {width: 5,height: 5},
        borderRadius: 10,
        backgroundColor: 'white',

        height: hp(72),
        marginLeft: hp(3),
        marginRight: hp(3),
        marginTop: hp(5),
 
        height: hp(72),
        marginLeft: hp(3),
        marginRight: hp(3),
        marginTop: hp(5),
        // marginBottom: hp(5)
    },
    fieldSet: {
        margin: hp(2),
        paddingHorizontal: hp(1),
        //paddingBottom: 2,
        borderRadius: hp(5),
        borderWidth: hp(0.3),
        //alignItems: "center",
        borderColor: "#ddd"
    },
    legend: {
        position: "absolute",
        top: -10,
        left: 13,
        fontFamily: 'Lato-Regular',
         backgroundColor: "#FFFFFF",
        color: "#c11d30",
        fontSize: hp(2.5)
    },
    text3:
    {
        textAlign: "center",
        marginBottom: 5,
        color: "#bc2737",
        fontFamily: "Lato-Regular"
    },
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
        marginTop: hp(4)
    },
    touch:
    {
        backgroundColor: "#c11d30",
        borderRadius: hp(1.5),
        width: wp(50),
        height: hp(7),
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"


    },
    text4:
    {
        textAlign: "center",
        fontSize: hp(3),
        color: "white",
        marginRight: hp(1.5),
    },
    image2:
    {
        height: normalize(23),
        width: normalize(23),


    },
    text5:
    {
        color: "#c11d30",
        fontFamily: "Lato-Regular",
        margin: hp(1),
        left: hp(1),
        fontSize: hp(3)
    },
    text6:
    {
        color: "#be5f6e",
        fontFamily: "Lato-Italic",
        margin: hp(1),
        left: hp(1),
        fontSize: hp(2.5)
    },
    container3:
    {
        flexDirection: "row",

    },
    model:
    {

        height: hp(45),
        width: wp(90),
        //height:370,
        // flex: 1,
        //margin:10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: hp(5),
    },

    image1:
    {
        height: normalize(75),
        width: normalize(75)
    },
    text7:
    {
        textAlign: "center",
        fontSize: hp(3.5),
        color: "black",
        marginTop: hp(4),
        fontFamily:'Lato-Bold'
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
    text8:
    {
        marginTop: hp(2.3),
        color: '#bf202e',
        //  textAlign: 'center',
        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },

})
