import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,BackHandler,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import axios from 'axios';

console.disableYellowBox = true;
export default class settings extends Component {
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
            loading:false,
        };
    }
    static navigationOptions = {

        header: null,
    };
    // logout = () => {
    //     this.setState({
    //         loading: true,

    //     })
    //     var instance = axios.create({
    //         baseURL: 'http://167.172.157.118/spazapro/public/api',
    //         headers: { 'Content-Type': 'application/json','Accept':'application/json' }
    //     })
    //     instance.post('/logout', {
    //     })
       
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({
    //                 loading: false,
    
    //             })
    //            this.props.navigation.navigate('welcome')
    //         })

    //         .catch(function (error) {
    //             console.log(error);
    //             alert(response.data.message)
    //         });

    //    } 

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: '#010101' }} onPress={() => this.props.navigation.goBack()}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%" }} >
                            <Text style={styles.text}>
                                Settings
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>
                <View style={styles.line}>
                </View>

                <View style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('D:/projects/react-native/new/shopping/image/1.Splash/Logo.png')} style={{ height: normalize(115), width: normalize(100), marginTop: hp(5) }}></Image>

                    </View>
                    <TouchableOpacity
                            style={{}}
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('howitworks')}>
                    <View
                        style={{
                            flexDirection: 'row', marginLeft: hp(5), marginRight: hp(5), shadowColor: '#ddd',
                            shadowRadius: 10,
                            shadowOpacity: 0.6,
                            elevation: 10,
                            shadowOffset: { width: 5, height: 5 },
                            borderRadius: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center', alignItems: 'center',
                            marginTop: hp(4),
                            height: hp(11),
                        }}>
                       
                            <Text style={styles.text5}>How it Works</Text>
                       
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={{}}
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('contactus')}>
                    <View
                        style={{
                            flexDirection: 'row', marginLeft: hp(5), marginRight: hp(5), shadowColor: '#ddd',
                            shadowRadius: 10,
                            shadowOpacity: 0.6,
                            elevation: 10,
                            shadowOffset: { width: 5, height: 5 },
                            borderRadius: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center', alignItems: 'center',
                            height: hp(11),
                            marginTop: hp(2)
                        }}>
                      
                            <Text style={styles.text5}>Contact Sinsoke</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={{}}
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('welcome1')}  >
                    <View
                        style={{
                            flexDirection: 'row', marginLeft: hp(5), marginRight: hp(5), shadowColor: '#ddd',
                            shadowRadius: 10,
                            shadowOpacity: 0.6,
                            elevation: 10,
                            shadowOffset: { width: 5, height: 5 },
                            borderRadius: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center', alignItems: 'center',
                            height: hp(11),
                            marginTop: hp(2)
                        }}>
                      
                            <Text style={styles.text5}>Terms {'\u0026'} Conditions</Text>
                      
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={{}}
                            activeOpacity={0.8}
                            // onPress={()=>this.logout()}
                            // onPress={() => this.props.navigation.navigate('welcome')} 
        
        onPress={()=> this.props.navigation.navigate('welcome')}
                            >
                    <View
                        style={{
                            flexDirection: 'row', marginLeft: hp(5), marginRight: hp(5), shadowColor: '#ddd',
                            shadowRadius: 10,
                            shadowOpacity: 0.6,
                            elevation: 10,
                            shadowOffset: { width: 5, height: 5 },
                            borderRadius: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center', alignItems: 'center',
                            height: hp(11),
                            marginTop: hp(2)
                        }}>
                      
                            <Text style={styles.text5}>Logout</Text>
                      
                    </View>
                    </TouchableOpacity>
                    {this.state.loading && (
          <ActivityIndicator
            style={{ height: 80 }}
            color='#bf202e'
            size="small"
          />
        )}
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

    line: {

        backgroundColor: '#b2b2b2',
        padding: hp(0.1),
        marginLeft: hp(5),
        marginRight: hp(5)
    },


    text5:
    {

        fontSize: hp(3.5),
        color: "#bf202e",
        fontFamily: "Lato-Regular",
        textAlign: "center"

    },

})
