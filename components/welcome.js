import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,BackHandler,Alert,TouchableOpacity,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
console.disableYellowBox = true;
export default class welcome extends Component {
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

      async getToken() {
        try {
          let userData = await AsyncStorage.getItem("userData");
          let data = JSON.parse(userData);
    
          console.log(data);
        

          if(data !== null) {
           this.props.navigation.navigate('customer')
          }

        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    static navigationOptions = {

        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            date: '',
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

        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        var that = this;
        var date = new Date().getDate();
        var month = monthNames[new Date().getMonth()];
        var year = new Date().getFullYear();
        that.setState({
            date:
                date + ' ' + month + ' ' + year,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}> Welcome </Text>
                    <Text style={styles.text1}>{this.state.date}</Text>


                </View>

                <View style={styles.line} />

           
                    <View style={styles.container2}>
                        <View >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate('product')}>
                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Box-1.png')} style={styles.image}></Image>

                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Icon-1.png')} style={styles.image1}></Image>
                                <Text style={styles.text5}>Browse{'\n'}Shop</Text>
                                <Text style={styles.text6}>View Products</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute' }}>
                                    <Text style={styles.text7}>Click For More</Text>
                                    <Image 
                                    source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Button-Icon.png')} 
                                    style={styles.image2}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate('about')}>
                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Box-2.png')} style={styles.image}></Image>
                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Icon-2.png')} style={styles.image1}></Image>
                                <Text style={styles.text5}>About{'\n'}Sisonke</Text>
                                <Text style={styles.text6}>Learn out Story</Text>

                                <View style={{ flexDirection: 'row', position: 'absolute' }}>
                                    <Text style={styles.text7}>Click For More</Text>
                                    <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Button-Icon.png')} style={styles.image2}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate('signup')}>

                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Box-3.png')} style={styles.image}></Image>
                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Icon-3.png')} style={styles.image1}></Image>
                                <Text style={styles.text5}>Customer{'\n'}Sign Up</Text>
                                <Text style={styles.text6}>We'll Respond Shortly</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute' }}>
                                    <Text style={styles.text7}>Click For More</Text>
                                    <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Button-Icon.png')} style={styles.image2}></Image>
                                </View>

                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                // onPress={() => this.props.navigation.navigate('login')}
                                onPress={()=>this.getToken()}
                                >

                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Box-4.png')} style={styles.image}></Image>
                                <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Icon-4.png')} style={styles.image1}></Image>
                                <Text style={styles.text5}>Login to{'\n'}Sisonke</Text>

                                <View style={{ flexDirection: 'row', position: 'absolute',alignItems:'center', }}>
                                    <Text style={styles.text7}>Click For More</Text>
                                    <Image source={require('D:/projects/react-native/new/shopping/image/2.Welcome-1/Button-Icon.png')} style={styles.image2}></Image>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
           
                <View style={{alignItems:'center'}}>
                    <Text style={styles.text4} onPress={() => this.props.navigation.navigate('welcome1')}>Terms {'\u0026'} Conditions</Text>
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

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e'
    },
    text1: {
        color: '#8d8d8d',
        fontSize: hp(2.5),
        fontFamily: "Lato-Regular",
    },
    line: {

        backgroundColor: '#b2b2b2',
        padding: hp(0.1),
        marginLeft: hp(3),
        marginRight: hp(3),
    },
    text2: {
        fontFamily: "Lato-Bold",
        textAlign: 'center',
        fontSize: hp(2.5),

    },
    container1: {
        marginTop: hp(1),
        marginBottom: hp(2)
    },
    container2: { 
         marginTop: hp(4),
        marginLeft: hp(3),
        marginRight: hp(3),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    container3: {
        marginTop: hp(3),
        marginLeft: hp(3),
        marginRight: hp(3),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    image: {
        width: wp(40), height: hp(35),
        borderRadius: hp(3)
    },
    text4: {
        marginTop: hp(2.5),
        color: '#bf202e',
        textAlign: 'center',
        fontSize: hp(2.4),
        fontFamily: 'Lato-Regular'
    },
    image1: {
        position: 'absolute',
        width: wp(17),
        height: hp(10),
        left: wp(12),
        right: wp(12),
        top: hp(2)


    },
    image2: {
        height: normalize(19), width: normalize(20),
marginLeft:hp(1),
marginRight:hp(3),



        top: hp(28.5),
    },
    text5: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: hp(3),
        left: wp(5),
        right: wp(5),
        top: hp(16),
        textAlign: 'center'
    },
    text6: {

        position: 'absolute',
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: hp(1.9),
        left: wp(2),
        right: wp(2),
        top: hp(23.5),
        textAlign: 'center'

    },
    text7: {


        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: hp(1.9),


        top: hp(28.5),
        marginLeft:hp(4),



    }

})
