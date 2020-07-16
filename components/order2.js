import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,ScrollView,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";

import axios from 'axios';

const data = [

    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },
    { key: 'R25', key1: 'R50' },

]

export default class order2 extends Component {
    
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
        instance.post('/selectQuotation', {
            token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
            order_id:'139',
            seller_id:'82'
        })

            .then(response => {
                console.log(response.data);
              
              
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

        };
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
        this.setState({
            isModalVisible1: !this.state.isModalVisible1
        });

        setTimeout(() => {
            this.setState({
                isModalVisible1: !this.state.isModalVisible1
            });
            this.props.navigation.navigate('orderList')
        }, 2000)
    };
    renderItem = ({ item, index }) => {


        return (
            <View style={styles.item}>
                <View style={{ width: "50%", flexDirection: 'row', alignItems: 'center' }}>

                    <Image source={require('D:/projects/react-native/new/shopping/image/images.jpeg')}
                        style={{ height: hp(12), width: wp(15), marginLeft: hp(5), marginBottom: hp(3), marginTop: hp(3) }}></Image>

                    <Text style={{ marginLeft: hp(1), fontSize: hp(2.5), fontFamily: "Lato-Bold" }}>x2</Text>
                </View>
                <View style={{ width: "25%" }}>

                    <Text style={{ fontSize: hp(2.5), fontFamily: "Lato-Bold", alignItems: 'center' }}>{item.key}</Text>
                </View>
                <View style={{ width: "25%" }}>

                    <Text style={{ fontSize: hp(2.5), fontFamily: "Lato-Bold", alignItems: 'center' }}>{item.key1}</Text>
                </View>

            </View>
        );
    };

    render() {
        const number = this.props.navigation.getParam('number1', '0');
        return (
            <View style={styles.container}>
                <View style={styles.header}>


                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={styles.text} onPress={() => this.props.navigation.goBack()}> Back </Text>
                    </View>
                </View>


                <View style={styles.header1}>
        <Text style={styles.text1}>Order {number}</Text>


                </View>

                <View style={styles.header2}>
                    <View style={{ width: '45%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.text5}>Seller A</Text>

                    </View>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text5}>Unit price</Text>

                    </View>
                    <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text5}>Total price</Text>

                    </View>
                </View>
                <ScrollView>
                    <FlatList
                        data={data}
                        style={styles.container}
                        renderItem={this.renderItem}

                    />


                </ScrollView>

                <View style={styles.header5}>
                    <View style={{ width: '45%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>Total Price</Text>
                    </View>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>


                        <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>R250</Text>
                    </View>
                </View>
                <View style={styles.header4}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.toggleModal}
                        style={{ borderRadius: hp(1), backgroundColor: "#BE202F", height: hp(5), width: wp(28), bottom: hp(1) }}>
                        <Text
                            style={{ color: "#FEFEFD", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Cancel</Text>
                    </TouchableOpacity>


                    <Modal isVisible={this.state.isModalVisible} onRequestClose={() => { this.visibleModal(false); }} >
                        <View style={styles.model1} >

                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: hp(3.5), fontFamily: 'Lato-Bold' }}>are you sure you want </Text>
                                <Text style={{ fontSize: hp(3.5), fontFamily: 'Lato-Bold' }} >to delete the order? </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: hp(5), }}>
                                <TouchableOpacity onPress={this.toggleModal1}
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
                    <Modal isVisible1={this.state.isModalVisible1} onRequestClose={() => { this.visibleModal1(false); }} >
                        <View style={styles.model2} >

                            <Image source={require('D:/projects/react-native/new/shopping/image/5.SignUp-2/Succesfully.png')} style={styles.image4}></Image>
                            <Text style={styles.text7} >Delete Successful</Text>
                            <Text style={styles.text11} >order was successfully</Text>
                            <Text style={styles.text11} >deleted</Text>


                            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}

                        </View>
                    </Modal>



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
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: hp(1),
    },
    text: {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold",

    },
    header1: {
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // marginLeft: hp(2),
        // marginRight: hp(2),


    },

    header2: {
        height: hp(6),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(3),
        marginRight: hp(5),
        marginLeft: hp(5),


    },
    text1: {
        fontSize: hp(4),
        fontFamily: 'Lato-Bold',
        color: '#bf202e'
    },
    // text2: {
    //     fontSize: hp(3),
    //     fontFamily: 'Lato-Regular',
    //     color: '#bf202e'
    // },
    header4: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp(2)
    },
    item: {

        flexDirection: 'row',

        alignItems: 'center',




    },
    text4: {
        fontSize: hp(2.5),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        textAlign: 'center'
    },
    text3: {
        fontSize: hp(2.8),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        // marginLeft:hp(1)
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
    text7:
    {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",

        color: '#030303',


    },
    text9:
    {
        fontSize: hp(4.5),
        fontFamily: "Lato-Bold",
        color: '#030303',
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
        fontSize: hp(4.5),
        fontFamily: "Lato-Bold",
        marginTop: hp(4),
        color: '#030303',
        marginBottom: hp(1)

    },
    text11:
    {
        fontSize: hp(3),
        fontFamily: "Lato-Black",
        color: "#010101"
    },
    text2: {
        fontSize: hp(3),
        fontFamily: 'Lato-Bold',
        color: '#bf202e'
    },
    header5: {
        flexDirection: 'row',
        marginTop: hp(2),
        marginBottom: hp(2),
        marginRight: hp(5),
        marginLeft: hp(5),
        justifyContent: 'space-around',

    },
    text5: {
        fontSize: hp(2.6),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        textAlign: 'center'
        // marginLeft:hp(1)
    },
});