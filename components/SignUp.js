import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity,Picker,BackHandler,Alert,ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";

export default class SignUp extends Component {
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
  
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            surname: "",
            user:"",
            Bname: "",
            mobilenumber: "",
            dataSource:[],
            userid:"",
            loading:true,
            loading1:false

        };
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
              this.startTimer();
            }
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
          });
        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 'Content-Type': 'application/json' }
        })
        instance.post('/getBuyerCategory', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
        })
 
            .then(response => {
               console.log(response);
               this.setState({
                dataSource: response.data.data,
                loading:false
              })
        })
            .catch(function (error) {
                console.log(error);
            });

      
     

        }
    

    updateUser = (user) => {
        this.setState({ user: user })
    }
    static navigationOptions = {

        header: null,
    };
    validation = () => {
        if (this.state.username == "") {
            alert("Please Enter Username")
        }

        else if (this.state.surname == "") {
            alert("Please Enter surname")
        }
        else if (this.state.mobilenumber == "") {
            alert("Please enter mobile number")
        }
        else {
            this.setState({
                loading1:true
              })
            var instance = axios.create({
                baseURL: 'http://167.172.157.118/spazapro/public/api',
                //  headers: {'Content-Type': 'application/json'}
            })
            instance.post('/registerStep1', {
                token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
                firstname: this.state.username,
                surname: this.state.surname,
                category: this.state.user,
                business_name: this.state.Bname,
                mobile_no: this.state.mobilenumber,
            
                // street_name: this.state.streetname,
                // province_id: this.state.province,
                // location: this.state.area,
                // mobile_numbers: ‘9913590685’
            })
            .then(response => {
                console.log(response)

                this.setState({
                    loading1:false
                })
                if (response.data.result == "success") {
                    this.setState({
                        userid:response.data.data.Userid,
                    })
                  this.props.navigation.navigate('Vsignup', {
            // data=[{username:this.state.username}]
            data: [this.state.userid,this.state.username, this.state.surname, this.state.user, this.state.Bname, this.state.mobilenumber]
        });}
        else  if (response.data.result == "error"){
            alert(response.data.message)
        }
         })
             .catch(function (error) {
                 console.log(error);
             });
 
    
        }
    }

    render() {
        // let data = this.state.dataSource.map( (s, i) => {
        //     return <Picker.Item key={i} value={s} label={s} />
        // });
        const { dataSource } = this.state;
        const { userid } = this.state;

        //  console.log(dataSource)
     

        return (
            <View style={styles.container}>
                 
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: "#010101" }} onPress={() => this.props.navigation.goBack()}>
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
     
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Name</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5), color: '#545454' }}
                            onChangeText={(username) => this.setState({ username })}
                            placeholderTextColor="#545454" placeholder={"Enter name"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Surname</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5), color: '#545454' }}
                            onChangeText={(surname) => this.setState({ surname })}
                            placeholderTextColor="#545454" placeholder={"Enter surname"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Customer Category</Text>

                        {/* <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{ color: '#545454' }}> */}
                        {/* <Picker.Item label="Select an Item" color='#545454' />
                            <Picker.Item label="Bakery" value="1" color='#545454' />
                            <Picker.Item label="Individual" value="2" color='#545454' />
                            <Picker.Item label="Restaurant" value="3" color='#545454' />
                            <Picker.Item label="Salon" value="4" color='#545454' /> */}

{/* <Picker
            selectedValue={this.state.PickerValueHolder}
            style={{ color: '#545454' }}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})}  > */}
<Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{ color: '#545454' }} placeholderIconColor={"#000000"}>

  {/* {
                 dataSource.map(item =>{
                   return(
                   <Picker.Item  label={item.name} value={item.name} key={item.name}/>
                   );
                 })
               }  */}
               {
               dataSource.map(buttonInfo => (
                <Picker.Item  label={buttonInfo.name} value={buttonInfo.id} key={buttonInfo.id} color='#545454' />
               
                )
               )}
    
          </Picker>
         
       {/* {console.log(this.state.user)} */}

                        {/* </Picker> */}
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Business Name (Optional)</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5), color: '#545454' }}
                            onChangeText={(Bname) => this.setState({ Bname })}
                            placeholderTextColor="#545454" placeholder={"Enter Businessname"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Mobile Number</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5), color: '#545454' }}
                            keyboardType="numeric"
                            onChangeText={(mobilenumber) => this.setState({ mobilenumber })}
                            placeholderTextColor="#545454" placeholder={"Enter mobile number"}></TextInput>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            activeOpacity={0.8} style={styles.touch} onPress={() => this.validation(this.state.username, this.state.surname, this.state.value, this.state.Bname, this.state.mobilenumber)}>
                            <Text style={styles.text4}>Next</Text>
                            <Image
                                source={require('D:/projects/react-native/new/shopping/image/5.SignUp-1/Next-Button.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                        {this.state.loading && (
          <ActivityIndicator
            style={{ height: 10,marginTop:hp(1) }}
            color='#bf202e'
            size="small"
          />
        )}
           {this.state.loading1 && (
          <ActivityIndicator
            style={{ height: 10,marginTop:hp(1) }}
            color='#bf202e'
            size="small"
          />
        )}
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <Text style={styles.text5} onPress={() => this.props.navigation.navigate('welcome1')}>Terms {'\u0026'} Conditions</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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

    },
    line:
    {
        // marginTop:
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
        shadowOffset: { width: 5, height: 5 },
        borderRadius: 10,
        backgroundColor: 'white',

        // height: hp(72),
        // marginLeft: hp(3),
        // marginRight: hp(3),
        // marginTop: hp(5),

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
        color: "#bc2737",
        fontFamily: "Lato-Regular"
    },
    container2:
    {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",
        marginBottom: hp(1),
        marginTop: hp(1)
    },
    touch:
    {
        backgroundColor: "#c11d30",
        borderRadius: 10,
        width: wp(30),
        height: hp(6),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'


    },
    text4:
    {

        fontSize: hp(3),
        color: "white",
        marginRight: hp(1.5),

    },
    image:
    {
        height: normalize(23),
        width: normalize(23),

    },
    text5:
    {
        marginTop: hp(2.3),
        color: '#bf202e',

        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },
})
