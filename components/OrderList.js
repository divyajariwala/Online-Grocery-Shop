import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
import Modal from "react-native-modal";
import axios from 'axios';

const data = [
    { Amount: "", Date: "", Status: "" },
    { Amount: "", Date: "", Status: "" },
    { Amount: "", Date: "", Status: "" },
    { Amount: "", Date: "", Status: "" },
    { Amount: "", Date: "", Status: "" },
    { Amount: "", Date: "", Status: "" }
]

export default class OrderList extends Component {
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
        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 'Accept': 'application/json' }
        })
        instance.post('/showAllOrders', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
        })
 
            .then(response => {
               console.log(response);
               this.setState({
                // dataSource: response.data.data,
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
            ordernum:1
        };
        this.index=1
    }
    static navigationOptions = {

        header: null,
    };
    toggleModal = () => {

        this.setState({
            isModalVisible: !this.state.isModalVisible
        });


    };
    toggleModal1 = () => {
        var instance = axios.create({
            baseURL: 'http://167.172.157.118/spazapro/public/api',
            headers: { 
               
                'Accept': 'application/json' }
        })
        instance.post('/cancelOrder', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
            order_id :'122'
        })

            .then(response => {
                console.log(response.data);
              
                this.setState({
                    isModalVisible: !this.state.isModalVisible
                });
            })

            .catch(function (error) {
                console.log(error);
                alert(response.data.message)
            });

 


    };

    renderItem = ({ item, index}) => {
        return (
            <View style={styles.container1}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <View style={{ width: "15%", }}>


                    </View>
                    <View style={{ width: "70%", }} >
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('order2',{'number1':index+1 })}>
                            <Text style={styles.text1}>
                                Order {index+1}
            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: "15%" }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={this.toggleModal}
                        >
                            <Image
                                source={require('D:/projects/react-native/new/shopping/image/14.Order/Delete.png')}
                                style={styles.image1}></Image>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.container2} >
                    <Text style={styles.text2} >Amount</Text>
                    <Text style={styles.text3}>Date</Text>
                    <Text style={styles.text3}>Status</Text>
                </View>
                <View style={styles.line}>

                </View>

            </View>

        );
    };


    render() {
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold', color: "#060606" }}
                                onPress={() => this.props.navigation.navigate('customer')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                Orders
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}> */}
                    <FlatList data={data}

                        renderItem={
                            this.renderItem
                        }
                    >

                    </FlatList>

                    {/* </View> */}
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible} onRequestClose={() => { this.visibleModal(false); }} >
                    <View style={styles.model1} >

                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: hp(3.5), fontFamily: 'Lato-Bold' }}>are you sure you want </Text>
                            <Text style={{ fontSize: hp(3.5), fontFamily: 'Lato-Bold' }} >to delete the order? </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: hp(5), }}>
                            <TouchableOpacity
                                onPress={this.toggleModal1}
                                style={{ backgroundColor: "red", height: hp(7), width: wp(32), borderRadius: hp(1) }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: hp(3.5), marginTop: hp(1) }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity

                                style={{ backgroundColor: "grey", height: hp(7), width: wp(32), borderRadius: hp(1), marginLeft: hp(3), }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: hp(3.5), marginTop: hp(1) }}
                                    onPress={this.toggleModal}
                                >No</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </Modal>
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
        color: '#bb1f28',
        textAlign: 'center',

    },
    container1:
    {
        height: hp(20),
        marginBottom: hp(5),
        marginTop: hp(1),
    },
    image1:
    {
        height: hp(4),
        width: wp(6)
    },
    text1:
    {
        fontSize: hp(3.5),
        // fontFamily: "Lato-Bold",
        color: '#bb1f28',
        textAlign: 'center',
        fontFamily: "Lato-Regular"
    },
    container2:
    {
        marginLeft: hp(5)
    },
    text2:
    {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold"
    },
    text3:
    {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold",
        marginTop: hp(1.5)
    },
    line:
    {
        backgroundColor: '#B2B2B2',
        padding: hp(0.1),
        marginLeft: hp(5),
        marginRight: hp(5),
        marginTop: hp(3)
    },
    model1:
    {
        height: hp(35),
        width: wp(90),
        //height:370,
        // flex: 1,
        //margin:10,
        // flexDirection: 'column',
        justifyContent: 'center',

        backgroundColor: "white",
        borderRadius: hp(5),
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

})
