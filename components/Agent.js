import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,BackHandler,Alert,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
console.disableYellowBox = true;

export default class Agent extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>


                    <View style={{ width: '20%' }}>
                        <Text style={styles.text1} onPress={() => this.props.navigation.navigate('agentwelcome')}> Back </Text>
                    </View>
                    <View style={{ width: '55%' }}>
                        <Text style={styles.text}> Agent Menu</Text>
                    </View>
                    <View style={{ width: '25%' }}>
                    <Text style={styles.text1} onPress={() => this.props.navigation.navigate('settings')}>Settings </Text>

                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row', marginLeft: hp(4), marginRight: hp(4), shadowOpacity: 0.6,
                        elevation: 10,
                        shadowOffset: { width: 5, height: 5 },
                        borderRadius: 10,
                        backgroundColor: 'white',
                    }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentshopnav')}>
                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Box-1.png')}
                            style={styles.image}></Image>

                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Icon-1.png')}
                            style={styles.image1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: wp(45.5), height: hp(14), }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentshopnav')}>
                        <Text style={styles.text5}>Shop</Text>
                    </TouchableOpacity>
                </View>


                <View
                    style={{
                        marginTop: hp(0.5), flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(4), marginRight: hp(4), shadowOpacity: 0.6,
                        elevation: 10,
                        shadowOffset: { width: 5, height: 5 },
                        borderRadius: 10,
                        backgroundColor: 'white',
                    }}>

                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: wp(45.5), height: hp(14), }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentordernav')}>
                        <Text style={styles.text5}>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentordernav')}>
                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Box-2.png')}
                            style={styles.image}></Image>

                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Icon-2.png')}
                            style={styles.image1}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: hp(0.5), flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(4), marginRight: hp(4), shadowOpacity: 0.6,
                    elevation: 10,
                    shadowOffset: { width: 5, height: 5 },
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}

                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentprofilenav')}>
                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Box-3.png')}
                            style={styles.image}></Image>

                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Icon-3.png')}
                            style={styles.image1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: wp(45.5), height: hp(14), }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentprofilenav')}>
                        <Text style={styles.text5}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: hp(0.5), flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(4), marginRight: hp(4), shadowOpacity: 0.6,
                    elevation: 10,
                    shadowOffset: { width: 5, height: 5 },
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>

                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: wp(45.5), height: hp(14), }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentcustomernav')}>
                        <Text style={styles.text5}>Customers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentcustomernav')}>
                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Box-4.png')}
                            style={styles.image}></Image>

                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Icon-4.png')}
                            style={{
                                position: 'absolute',
                                width: normalize(68),
                                height: normalize(67),
                            }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: hp(0.5), flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(4), marginRight: hp(4), shadowOpacity: 0.6,
                    elevation: 10,
                    shadowOffset: { width: 5, height: 5 },
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentwalletnav')}>
                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Box-5.png')}
                            style={styles.image}></Image>

                        <Image
                            source={require('D:/projects/react-native/new/shopping/image/12.Agent/Icon-5.png')}
                            style={styles.image1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: wp(45.5), height: hp(14), }}
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('agentwalletnav')}>
                        <Text style={styles.text5}>Wallet</Text>
                    </TouchableOpacity>
                </View>





                <View>
                    <Text style={styles.text4} onPress={() => this.props.navigation.navigate('welcome1')} >Terms {'\u0026'} Conditions</Text>
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
        height: hp(10),

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e',
        textAlign: 'center'
    },
    text1: {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold",
        marginLeft: hp(2),
        color: '#010101'
    },

    image: {
        width: wp(40), height: hp(14),
        borderRadius: hp(2),

    },
    image1: {
        position: 'absolute',
        width: normalize(68),
        height: normalize(60),



    },
    text4: {
        marginTop: hp(2),
        color: '#bf202e',
        textAlign: 'center',
        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },
    container2: {
        marginLeft: hp(2),
        marginRight: hp(2),
        flexDirection: 'row',
        justifyContent: 'center',

    },
    text5: {
        fontFamily: 'Lato-Bold',
        fontSize: hp(4),
        color: '#b7232b',
    }
})
