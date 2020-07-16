import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, BackHandler, Alert,AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
import SwipeRender from "react-native-swipe-render";
import normalize from 'react-native-normalize';
// import axios from 'axios';

const data1 = [

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

export default class order1 extends Component {
    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('NewScreen');
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
           this.props.navigation.navigate('orderdetails')
          } else if(data1 !== null){
            this.props.navigation.navigate('selectcustomer')
          }
        } catch (error) {
          console.log("Something went wrong", error);
        }
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
    renderItem = ({ item, index }) => {


        return (
            <View style={styles.item}>

                <Image source={require('D:/projects/react-native/new/shopping/image/images.jpeg')}
                    style={{ height: hp(12), width: wp(15), marginLeft: hp(5), marginBottom: hp(3), marginTop: hp(3) }}></Image>

                <Text style={{ marginLeft: hp(1), fontSize: hp(3), fontFamily: "Lato-Regular" }}>x2</Text>

                <Text style={{ marginLeft: hp(9), fontSize: hp(3), fontFamily: "Lato-Regular" }}>{item.key}</Text>
                <Text style={{ marginLeft: hp(12), fontSize: hp(3), fontFamily: "Lato-Regular" }}>{item.key1}</Text>
            </View>
        );
    };




    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>


                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={styles.text} onPress={() => this.props.navigation.navigate('orders')}> Back </Text>
                    </View>
                </View>


                <View style={styles.header1}>
                    <Text style={styles.text1}>Quotations</Text>
                    <Text style={styles.text1}># Sellers</Text>

                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '5%', marginTop: hp(3) }}>
                        <TouchableOpacity
                            onPress={() => this.ListView_Ref.scrollTo({ offset: 0, animated: true })}
                        >
                            <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Left-Arrow.png')}
                                style={styles.image5}

                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%' }}>
                        <SwipeRender
                            data={[
                                { key: 'Seller A ', key1: 'Best Price' },
                                { key: 'Seller B' },
                                { key: 'Seller C' },
                                { key: 'Seller D' },

                            ]}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.header11}>
                                            <Text style={styles.text4}>{item.key}</Text>
                                            <Text style={styles.text5}>{item.key1}</Text>



                                        </View>

                                        <View style={styles.header2}>
                                            <View style={{ width: "40%" }}>

                                            </View>
                                            <View style={{ width: "60%", flexDirection: "row", justifyContent: "space-around" }}>
                                                <Text style={styles.text2}>Unit price</Text>
                                                <Text style={styles.text3}>Total price</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={data1}
                                            style={styles.container}
                                            renderItem={this.renderItem}
                                            showsVerticalScrollIndicator={false}
                                        />

                                        <View style={styles.header5}>
                                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>Total Price</Text>
                                            </View>
                                            <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                                            </View>

                                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>


                                                <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>R250</Text>
                                            </View>
                                        </View>



                                    </View>
                                );
                            }}
                            ref={(ref) => {
                                this.ListView_Ref = ref;
                            }}
                            index={0}
                            loop={false}
                            loadMinimal={true}
                            loadMinimalSize={2}
                            horizontal={true}

                            enableAndroidViewPager={false}

                        />
                    </View>
                    <View style={{ width: '5%', marginTop: hp(3) }}>
                        <TouchableOpacity
                            onPress={() => this.ListView_Ref.scrollTo({ animated: true })}
                        >
                            <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Right-Arrow.png')}
                                style={styles.image6}
                            ></Image>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.header4}>
                    <TouchableOpacity activeOpacity={1}
                        // onPress={() => this.props.navigation.navigate('orderdetails')}
                        onPress={()=>this.getToken()}
                        style={{ borderRadius: hp(1), backgroundColor: "#BE202F", height: hp(5), width: wp(28), bottom: hp(1) }}>
                        <Text
                            style={{ color: "#FEFEFD", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Select</Text>
                    </TouchableOpacity>

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
        // marginRight: hp(2),
    },
    text: {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold",

    },
    header1: {

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginLeft: hp(6),
        marginRight: hp(6),


    },
    header11: {
        height: hp(4),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2),
        //marginLeft: hp(2),
        // marginRight: hp(2),

    },
    header2: {
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: hp(1)
        //marginLeft: hp(22),
        // marginRight: hp(3),


    },
    text1: {
        fontSize: hp(3),
        fontFamily: 'Lato-Bold',
        color: '#bf202e'
    },
    text2: {
        fontSize: hp(2.5),
        fontFamily: 'Lato-Bold',
        color: '#bf202e'
    },
    text3:
    {
        fontSize: hp(2.5),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        marginRight: hp(2)
    },
    header4: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp(2)
    },
    item: {

        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        marginTop: hp(-4)


    },
    text4: {
        fontSize: hp(3),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        textAlign: 'center'
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
        fontSize: hp(2.5),
        fontFamily: 'Lato-Bold',
        color: '#bf202e',
        textAlign: 'center'
    },
    image5: {
        height: normalize(22),
        width: normalize(15),
        marginLeft: hp(1),

    },
    image6: {
        height: normalize(22),
        width: normalize(15),
        marginRight: hp(1),

    },

});