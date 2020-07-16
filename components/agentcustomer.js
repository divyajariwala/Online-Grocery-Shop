import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';

export default class agentcustomer extends Component {
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
  render() {
    return (
      <View style={styles.container}>

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
                Customers
                    </Text>
            </View>
            <View style={{ width: "15%" }}>

            </View>
          </View>
        </View>


        {/* <View style={styles.container1}>
                    <Text style={styles.text2}>What Would You Like to Do Today</Text>
                </View> */}
        <View style={{ flex: 1, }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('signup')}>

            <View
              style={{ marginTop: hp(2), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center', }}>

              <Image source={require('D:/projects/react-native/new/shopping/image/21.Customer/Box-1.png')} style={styles.image}></Image>
              <Image source={require('D:/projects/react-native/new/shopping/image/21.Customer/Icon-1.png')}
                style={styles.image1}></Image>

              <Text style={styles.text5}>Add New Customers</Text>
              <View style={{ position: 'absolute' }}>
                <Text style={styles.text6}>continue</Text>
                <Image
                  source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Button.png')}
                  style={styles.image2}></Image>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('agentcustomer1')}>

            <View style={{ marginTop: hp(5), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center' }}>

              <Image source={require('D:/projects/react-native/new/shopping/image/21.Customer/Box-2.png')} style={styles.image}></Image>
              <Image source={require('D:/projects/react-native/new/shopping/image/21.Customer/Icon-2.png')}
                style={styles.image1}></Image>
              <Text style={styles.text5}>Manage Customers</Text>
              <Text style={styles.text7}>Edit and remove customers</Text>
              <View style={{ position: 'absolute' }}>
                <Text style={styles.text8}>continue</Text>
                <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Button.png')} style={styles.image3}></Image>
              </View>
            </View>
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
    height: hp(10),

    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: hp(4),
    fontFamily: "Lato-Bold",
    color: '#bf202e',
    textAlign: 'center'
  },
  text1: {
    color: '#8d8d8d',
    fontSize: hp(2.5),
    fontFamily: "Lato-Regular",
  },
  image: {
    width: normalize(300), height: normalize(240),
    borderRadius: hp(2),
  },
  text5: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: hp(3),
    marginTop: hp(20)


  },
  text6: {

    // position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-regular',
    fontSize: hp(2.5),
    marginTop: hp(27)


  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
    marginBottom: hp(1)
  },
  text2: {
    fontFamily: "Lato-Regular",

    fontSize: hp(2.5),

  },
  image1: {
    position: 'absolute',
    width: normalize(100),
    height: normalize(100),

    top: hp(2)


  },
  image2: {
    height: normalize(15), width: normalize(15), position: 'absolute',
    left: wp(19),
    marginTop: hp(28)

  },
  text7: {

    position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-regular',
    fontSize: hp(2.5),
    marginTop: hp(25)


  },
  text8: {

    // position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-regular',
    fontSize: hp(2.5),
    marginTop: hp(28)


  },
  image3: {
    height: normalize(15), width: normalize(15), position: 'absolute',
    left: wp(19),
    marginTop: hp(29)

  },
})