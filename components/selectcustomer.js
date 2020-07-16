import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView ,FlatList,BackHandler,Alert} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const data = [

    {key: 'Customer1'},
    {key: 'Customer2'},
    {key: 'Customer3'},
    {key: 'Customer4'},
    {key: 'Customer5'},
    {key: 'Customer6'},
    {key: 'Customer7'},
    {key: 'Customer8'},
    {key: 'Customer9'},
    {key: 'Customer10'},
    {key: 'Customer11'},
    {key: 'Customer12'},
    {key: 'Customer13'},





]
export default class selectcustomer extends Component {
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
    renderItem = ({ item, index }) => {


        return (
            <View style={styles.item}>
    <Text style={styles.text4} onPress={() => this.props.navigation.navigate('orderdetails')}>{item.key}</Text>
            </View>
        );
    };


    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>

                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "15%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold' }}
                                onPress={() => this.props.navigation.navigate('welcome')}
                            >
                                Back
                </Text>
                        </View>
                        <View style={{ width: "70%" }} >
                            <Text style={styles.text}>
                                Select Customer
            </Text>
                        </View>
                        <View style={{ width: "15%" }}>

                        </View>
                    </View>
                </View>
                <View style={styles.header1}>
                    <Text style={styles.text1}>Seller</Text>
                    <View >
                        <Text style={styles.text1}>Order total</Text>
                        <Text style={styles.text1}>R###</Text>
                    </View>
                </View>
                <View style={styles.header2}>
                    <Text style={styles.text2}>Customers</Text>
              
                </View>
                <ScrollView>
                    <FlatList
                        data={data}
                        style={styles.container}
                        renderItem={this.renderItem}

                    />


                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#ffffff'
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
    text1: {
        color: '#bf202e',
        fontSize: hp(3),
        fontFamily: "Lato-Regular",
        textAlign:'center'
    },
    text2: {
        color: '#bf202e',
        fontSize: hp(3.2),
        fontFamily: "Lato-Regular",
        textAlign:'center'
    },
    header1: {
        height: hp(10),
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:hp(7),
        marginLeft:hp(7)
    },
    header2: {
        height: hp(6),
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:hp(7),
        marginLeft:hp(7)
    },
    container: {
        flex: 1
    },
    text4: {
  
        fontSize: hp(3.2),
        fontFamily: "Lato-Regular",
     
    },
    item: {

     
        flex: 1,
        height: hp(8),
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:hp(7),
        marginLeft:hp(7)

    },
})