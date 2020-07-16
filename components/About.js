import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { normalize } from 'react-native-elements';
console.disableYellowBox = true;
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {

        header: null,
    };
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
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: '#010101' }} onPress={() => this.props.navigation.navigate('welcome')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%" }} >
                            <Text style={styles.text}>
                                About Us
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.text2}>
                            Learn more about Sisonke
                    </Text>
                    </View>
                </View>
                <View style={styles.line}>
                </View>
            
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginLeft:hp(5),marginRight:hp(5)}}>
                    <View style={styles.container2}>
                        <Text style={styles.text4}>How it Works</Text>
                        <Text style={styles.text6}>Learn our Story.</Text>
                        <Text style={styles.text5}>Lorem lpsum is simply dummy text of the printing and typesetting industry the printing.</Text>
                        <Text style={styles.text7} onPress={() => this.props.navigation.navigate('settings')}>More...</Text>
                    </View>
                    {/* <View style={styles.container4}>
                        <Text style={styles.text4}>How to Order</Text>
                        <Text style={styles.text5}>Order in 3 Simple Steps</Text>

                        <View style={styles.container6}>
                            <Image source={require('/Users/imac/Documents/Client/shopping/image/Untitled-1.png')}
                                style={{ height: normalize(55), width: normalize(55) }}></Image>
                            <Image source={require('/Users/imac/Documents/Client/shopping/image/Untitled-2.png')}
                                style={{ height: normalize(55), width: normalize(55) }}></Image>
                            <Image source={require('/Users/imac/Documents/Client/shopping/image/Untitled-3.png')}
                                style={{ height: normalize(55), width: normalize(55) }}></Image>
                        </View>
                        <View style={styles.container6}>

                            <View>

                                <Text style={styles.text11}>Find an Agent</Text>
                            </View>
                            <View>

                                <Text style={styles.text11}>Place Order</Text>
                            </View>
                            <View >

                                <Text style={styles.text11}>Receive Your {'\n'}Groceries</Text>
                            </View>
                        </View>

                        <Text style={styles.text7}>More...</Text>
                    </View> */}
                    <View style={styles.container5}>
                        <Text style={styles.text4}>Contact Us</Text>
                        <Text style={styles.text5}>Lorem lpsum is simply dummy text of the printing and typesetting industry. the printing.</Text>
                        <Text style={styles.text7} onPress={() => this.props.navigation.navigate('settings')}>More...</Text>
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
        backgroundColor:'white'
    },
    header: {
        height: hp(10),

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e',
        textAlign: 'center'
    },
    text2:
    {
        color: '#8d8d8d',
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
    },
    line: {

        backgroundColor: '#b2b2b2',
        padding: hp(0.1),
        marginLeft: hp(5),
        marginRight: hp(5)
    },

    text3:
    {
        fontFamily: "Lato-Bold",
        marginBottom: hp(1.5),
        fontSize: hp(2.5),
        textAlign: "center",
        marginTop: hp(1.5)

    },
    container2:
    {
        height: hp(35),
     
        backgroundColor: "#bd1f2e",
        borderRadius: hp(2),
        padding: hp(1.8),
        justifyContent:'center'

    },
    container3:
    {

        marginLeft: hp(5),
        marginRight: hp(5),
       justifyContent:'center',
       alignItems:'center'

    },
    text4:
    {
        marginLeft: hp(2),
        marginRight: hp(2),
        fontSize: hp(3.5),
        color: "white",
        fontFamily: "Lato-Bold"

    },
    text5:
    {
        marginLeft: hp(2),
        marginRight: hp(3),
        paddingTop: hp(1),
        fontSize: hp(2.5),
        color: "#fcf7f6",
        fontFamily: "Lato-Regular",
        textAlign: 'justify'
    },
    text6:
    {
        marginLeft: hp(2),
        marginRight: hp(2),
        paddingTop: hp(1),
        fontSize: hp(2.7),
        color: "#fcf7f6",
        fontFamily: "Lato-Regular"


    },
    text7:
    {
        fontSize: hp(2.7),
        color: "#fcf7f6",
        marginLeft: hp(2),
        marginRight: hp(3),
        textDecorationLine: "underline",
        textAlign: "right",
       
        fontFamily: "Lato-Regular",
        marginTop: hp(3)
    },
    container4:
    {
        height: hp(30),

        backgroundColor: "#bd1f2e",
        borderRadius: hp(2),
        padding: hp(1.8),
        marginTop: hp(2)

    },
    container5:
    {
        height: hp(35),
        justifyContent:'center',
        backgroundColor: "#bd1f2e",
        borderRadius: hp(2),
        padding: hp(1.8),
        marginTop: hp(5)
    },

    container6:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp(1),
        marginLeft: hp(2),
        marginRight: hp(3),

    },
    text11:
    {
        marginTop: 2,
        color: "white",
        textAlign: 'center',
        fontSize: hp(1.5),

        fontFamily: "Lato-Regular",

    }
})
