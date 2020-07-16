import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker, BackHandler, Alert, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
console.disableYellowBox = true;
import axios from 'axios';

export default class profile extends Component {
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
            },], {
            cancelable: false
        }
        )
        return true;
    }
    
    async getToken() {
       
        try {
          

            let userData = await AsyncStorage.getItem("userData");
            let data = JSON.parse(userData);
            this.setState({
                dataSource1: data
            })

        } catch (error) {
            console.log("Something went wrong", error);
        }

        
    }
    
   
    componentDidMount() {
        this.getToken();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        })
        instance.post('/editProfile', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
            firstname: this.state.username,
            surname: this.state.surname,
            category: this.state.user,
            business_name: this.state.Bname,
            mobile_no: this.state.mobilenumber,
            street_name: this.state.streetname,
            zone_id: '1,2,3',
            province_id: this.state.province,
            location: this.state.area,

        })

            .then(response => {
                console.log(response);
                this.setState({
                    dataSource: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
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
                    dataSource2: response.data.data,
                    loading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });




    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    constructor(props) {
        super(props);
        this.state = {
            dataSource2: [],
            dataSource1: [],
            username: "",
            surname: "",
            user: "",
            Bname: "",
            mobilenumber: "",
            dataSource: [],
            streetname: "",
            area: "",
            province: '',
        };
    }
    static navigationOptions = {

        header: null,
    };
    updateUser = (user) => {
        this.setState({ user: user })
    }
    
    render() {
        const { dataSource2 } = this.state;
        const { dataSource1 } = this.state;
        console.log("bottom")
//         console.log(dataSource1)
// alert(dataSource1)

        return (
            <View style={styles.container} key={dataSource1.id}>
           
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: "#010101" }} onPress={() => this.props.navigation.navigate('customer')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                My Profile
                               
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
                        <Image source={require('D:/projects/react-native/new/shopping/image/17.Customer/Edit.png')}
                            style={styles.image1}></Image>
                        <Text style={{
                            marginTop: hp(1), marginLeft: hp(1), fontSize: hp(2.5), color: "#b9252d",
                            fontFamily: "Lato-Regular"
                        }}>Edit Profile (1 of 2)</Text>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Name</Text>
                        <TextInput
                            onChangeText={(username) => this.setState({ username })}
                            style={{ height: hp(8), fontSize: hp(2.5) }} placeholderTextColor={'#545454'} placeholder={"name"}

                        ></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Surname</Text>
                        <TextInput
                            onChangeText={(surname) => this.setState({ surname })}
                            style={{ height: hp(8), fontSize: hp(2.5) }} placeholderTextColor={'#545454'} placeholder={"surname"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Customer Category</Text>
                        {/* <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{color:'#545454'}}>
                                    <Picker.Item label="Select Customer Category" color='#545454'/>
                                    <Picker.Item label="Individual" value="Individual" color='#545454'/>
                                    <Picker.Item label="Restaurant" value="Restaurant" color='#545454'/>
                                    <Picker.Item label="Salon" value="Salon" color='#545454'/>
                                    <Picker.Item label="Backery" value="Backery" color='#545454'/>

                                </Picker> */}
                        <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{ color: '#545454' }} placeholderIconColor={"#000000"}>

                            {
                                dataSource2.map(buttonInfo => (
                                    <Picker.Item label={buttonInfo.name} value={buttonInfo.id} key={buttonInfo.id} color='#545454' />

                                )
                                )}

                        </Picker>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Business Name (Optional)</Text>
                        <TextInput style={{ height: hp(8), fontSize: hp(2.5), color: '#545454' }}
                            onChangeText={(Bname) => this.setState({ Bname })}
                            placeholderTextColor="#545454" placeholder={"Businessname"}></TextInput>                
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Mobile Number</Text>
                        <TextInput
                         style={{ height: hp(8), fontSize: hp(2.5) }} placeholderTextColor={'#545454'} placeholder={"mobile number"}
                         keyboardType="numeric"
                         onChangeText={(mobilenumber) => this.setState({ mobilenumber })}
                         ></TextInput>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            activeOpacity={1} style={styles.touch} onPress={() => this.props.navigation.navigate('profile1')}>
                            <Text style={styles.text4}>Next</Text>
                            <Image
                                source={require('D:/projects/react-native/new/shopping/image/5.SignUp-1/Next-Button.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",

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

        height: hp(75),
        marginLeft: hp(3),
        marginRight: hp(3),
        marginTop: hp(2.5),
        borderRadius: hp(3),
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
    legend: {
        position: "absolute",
        top: -10,
        left: 13,

        backgroundColor: "#FFFFFF",
        color: "#bf202e",
        fontSize: hp(2.5)
    },
    text3:
    {
        textAlign: "center",
        //  marginBottom: hp(3),
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
        alignItems: 'center',
        marginTop: hp(1.5)



    },
    text4:
    {

        fontSize: hp(3),
        color: "white",
        marginRight: hp(1.5),
    },
    image1:
    {
        height: hp(4),
        width: wp(6),
        marginTop: hp(1)
    },
    text5:
    {
        marginTop: hp(1.5),
        color: '#bf202e',
        textAlign: 'center',
        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },
    image:
    {
        height: normalize(23),
        width: normalize(23),
    }
})
