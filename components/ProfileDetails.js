import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity ,BackHandler,Alert} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

console.disableYellowBox = true;
export default class ProfileDetails extends Component {
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
        };
    }
    static navigationOptions = {

        header: null,
    };


    render() {
       
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ width: "15%", justifyContent: "center" }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(1), fontFamily: 'Lato-Bold', color: "#010101" }} onPress={() => this.props.navigation.navigate('agentprofile')}>
                                Back
                        </Text>
                        </View>
                        <View style={{ width: "70%", }} >
                            <Text style={styles.text}>
                                 Profile Details
                    </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>

                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.container1}>
                    <View style={{ flexDirection: "row", margin: hp(1), left: hp(1),alignItems:"center" }}>
                        <Image source={require('D:/projects/react-native/new/shopping/image/20.ProfileDetail/Account.png')}
                         style={styles.image1}></Image>
                        <Text style={{ marginTop: hp(1), marginLeft: hp(1), fontSize: hp(2.5), color: "#b9252d",
                         fontFamily: "Lato-Regular" }}>Edit Profile (1 of 2)</Text>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Name</Text>
                        <TextInput style={{ height: hp(8) ,fontSize:hp(2.5) }} placeholder={"Enter name"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Surname</Text>
                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }} placeholder={"Enter surname"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Mobile Number</Text>
                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }} placeholder={"Enter Mobile Number"}></TextInput>

                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Gender</Text>
                        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Other', value: 'Other' },
            ]}
        />
      
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Id/passport Number</Text>
                        <TextInput style={{ height: hp(8),fontSize:hp(2.5) }} placeholder={"Enter Id/Passport number"}></TextInput>
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity   
                     activeOpacity={1} style={styles.touch} onPress={() => this.props.navigation.navigate('profiledetails1')}>
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
container:{
flex:1, backgroundColor:'white'
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
        //flex: 1,
        borderWidth: hp(0.3),
        //borderRadius: 5,
        borderColor: '#ddd',
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,

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
        fontSize:hp(2.5)
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
        alignItems:'center'
        


    },
    text4:
    {
   
        fontSize: hp(3),
        color: "white",
        marginRight: hp(1.5),
    },
    image1:
    {
        height: hp(3.6),
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
