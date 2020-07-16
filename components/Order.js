import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Picker, TouchableOpacity, BackHandler, Alert ,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';

console.disableYellowBox = true;
import SegmentedControlTab from 'react-native-segmented-control-tab';
export default class Order extends Component {
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
          let userData1 = await AsyncStorage.getItem("userData1");
          let data1 = JSON.parse(userData1);
          console.log(data);
          console.log(data1);

          if(data !== null) {
           this.props.navigation.navigate('orderList')
          } else if(data1 !== null){
            this.props.navigation.navigate('orderListA')
          }

        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 'Content-Type': 'application/json' }
        })
        instance.post('/orderDetail', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
            order_id:'5',
            useWalletBalance:'1',
            pickUpDate:'3-3-20',
            payMethod:'',
            transactionId:'123566'

        })
            // .then(function (response) {
            //     this.props.navigation.navigate('verifyuser',{
            //         data: [this.state.mobile_numbers ]

            //     })
            //     console.log(response.data);
            // })
            .then(response => {
                console.log(response.data);
                this.setState({
                    
    
                })
              
            })

            .catch(function (error) {
                console.log(error);
                alert(response.data.message)
            });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            selectedIndex: 1,
            user: '',
            date: ""
        };
    }
    updateUser = (user) => {
        this.setState({ user: user })
    }
    static navigationOptions = {

        header: null,
    };
    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });

        setTimeout(() => {
            this.setState({
                isModalVisible: !this.state.isModalVisible
            });
            // this.props.navigation.navigate('orderList')
this.getToken();
        }, 2000)
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold', color: "#010101" }}
                                // onPress={() => this.props.navigation.navigate('order1')}
                                onPress={() => this.props.navigation.goBack()}

>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                Order Details
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>


                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View>
                            <Text style={styles.text1}>Name</Text>
                        </View>


                        <View style={styles.container4}>
                            <View style={{ width: hp('30%') }}>
                                <Text style={styles.text1}>Order total</Text>
                            </View>
                            <View style={{ width: hp('15%') }}>
                                <Text style={styles.text1}>R###</Text>
                            </View>
                        </View>



                        <View style={styles.container6}>

                            <Text style={styles.text1}>Use wallet balance</Text>
                            <View style={{ justifyContent: "center", marginLeft: hp(2), marginRight: hp(2), marginTop: hp(0.5) }}>
                                <SegmentedControlTab
                                    values={['N', 'Y']}
                                    borderRadius={100}
                                    selectedIndex={this.state.selectedIndex}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    onTabPress={this.handleIndexChange}
                                />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={{ width: hp('30%') }}>
                                <Text style={styles.text1}>Amount to pay</Text>
                            </View>
                            <View style={{ width: hp('15%') }}>
                                <Text style={styles.text1}>R##</Text>
                            </View>

                        </View>
                        <View style={styles.container4}>
                            <View style={{ width: hp('30%') }}>
                                <Text style={styles.text1}>Wallet balance</Text>
                            </View>
                            <View style={{ width: hp('15%') }}>
                                <Text style={styles.text1}>R##</Text>
                            </View>
                        </View>



                        <View style={styles.container3}>
                            <Text style={styles.text1}>Pickup date</Text>
                            <View style={styles.container7}>
                                {/* <Text style={styles.text3}>Date S</Text> */}
                                <DatePicker
                                    clearIcon={null}
                                    style={{ width: 200 }}
                                    date={this.state.date}
                                    mode="date"
                                    showIcon="false"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    // minDate="2016-05-01"
                                    // maxDate="2016-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{

                                        dateIcon:
                                        {
                                            height: 0,
                                            width: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36,
                                            borderWidth: 0
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>

                        <View style={styles.container3}>
                            <Text style={styles.text1}>Pay method</Text>
                            <View style={styles.container7}>
                                {/* <Text style={styles.text3}>Select Method</Text> */}
                                <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                                    <Picker.Item label="Select Payment method" />
                                    <Picker.Item label="COD" value="COD" />
                                    <Picker.Item label="NET-BANKING" value="NET-BANKING" />
                                    <Picker.Item label="PAYTM" value="PAYTM" />
                                </Picker>
                            </View>
                        </View>




                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={styles.container5} activeOpacity={1} onPress={this.toggleModal} >
                                <Text style={styles.text2}>Place Order</Text>
                            </TouchableOpacity>

                        </View>

                        <Modal isVisible={this.state.isModalVisible} onRequestClose={() => { this.visibleModal(false); }} >
                            <View style={styles.model} >

                                <Image
                                    source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Succesfully.png')} style={styles.image3}></Image>
                                <Text style={styles.text7} >Order Successful</Text>
                                <Text style={styles.text8} >The Order has been Placed</Text>



                                {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}

                            </View>
                        </Modal>
                    </View>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white'
    },

    header:
    {
        height: hp(10),

        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bb1f28',
        textAlign: 'center',

    },
    container1:
    {
        flex: 1,
        // borderWidth: hp(0.3),
        //borderRadius: 5,
        // borderColor: '#ddd',
        //borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 1,
        // shadowRadius: 1,

        //height: "90%",
        marginLeft: hp(5),
        marginRight: hp(5),

        // borderRadius: hp(3),
        marginBottom: hp(3),
        shadowColor: '#ddd',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        borderRadius: 10,
        backgroundColor: 'white',

    },
    container2:
    {
        marginLeft: hp(2),
        marginRight: hp(2),
        marginTop: hp(2.5),
    },
    text1:
    {
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
        // justifyContent: "space-around",
        textAlign: "left"
    },
    container3:
    {
        marginTop: hp(3),

    },
    container4:
    {
        marginTop: hp(3),
        marginRight: hp(4),
        flexDirection: "row",

    },
    container5:
    {
        marginTop: hp(3),
        justifyContent: "center",
        // alignContent: "center",
        alignItems: 'center',
        borderRadius: hp(3),

        backgroundColor: "#be202f",
        height: hp(6.5),
        width: wp(40)
    },
    container6:
    {
        marginTop: hp(3),
        //flexDirection:"row",
        justifyContent: "space-between"
    },
    container7:
    {
        borderRadius: hp(3),
        borderColor: "#ddd",
        borderWidth: hp(0.3),
        height: hp(6.5),
        marginTop: hp(1),
        justifyContent: "center"

    },
    text2:
    {
        color: "#fcfaf9",
        fontFamily: "Lato-Regular",
        fontSize: hp(2.5)

    },
    text3:
    {
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
        marginLeft: hp(2)

    },
    text4:
    {

        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",


    },
    button: {
        width: wp(30),
        height: hp(6),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: hp(3),
        borderTopLeftRadius: hp(3)

    },
    button1: {
        width: wp(30),
        height: hp(6),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: hp(3),
        borderTopRightRadius: hp(3)
    },
    model:
    {

        height: hp(35),
        width: wp(90),
        //height:370,
        // flex: 1,
        //margin:10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: hp(5),
        //marginRight:hp(10),

    },
    text7:
    {
        fontSize: hp(3.5),
        fontFamily: "Lato-Regular",
        marginTop: hp(4),
        color: '#030303',
        marginBottom: hp(1)

    },
    text8:
    {
        fontSize: hp(2.5),
        //fontFamily:"Lato-Black",
        color: "#010101"
    },
    image3:
    {
        height: normalize(70),
        width: normalize(70),


    },
    tabStyle: {
        borderColor: 'transparent',
        height: hp(6)


    },
    activeTabStyle: {
        backgroundColor: '#be202f',
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: hp(2.5)
    },
    tabTextStyle: {
        color: 'black',
        fontFamily: 'Lato-Bold',
        fontSize: hp(2.5)
    }
})

