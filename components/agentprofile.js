import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';

export default class agentprofile extends Component {
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
            <View style={{ width: "15%", justifyContent: 'center' }}>
              <Text style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold' }}
                onPress={() => this.props.navigation.navigate('agent')}
              >
                Back
                        </Text>
            </View>
            <View style={{ width: "70%" }} >
              <Text style={styles.text}>
               Agent Profile
                    </Text>
            </View>
            <View style={{ width: "15%" }}>

            </View>
          </View>
        </View>

{/* 
        <View style={styles.container1}>
                    <Text style={styles.text2}>What Would You Like to Do Today</Text>
                </View> */}
        <View style={{ flex: 1, }}>
        <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate('messages')}>
          <View 
          style={{ marginTop: hp(2), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center',}}>

            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Box-1.png')} style={styles.image}></Image>
            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Icon-1.png')} 
            style={styles.image1}></Image>

            <Text  style={styles.text5}>Messages</Text>
    <View style={{position:'absolute'}}>
            <Text style={styles.text6}>continue</Text>
            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Button.png')}
            style={styles.image2}></Image>
            </View>

          </View>
          </TouchableOpacity>
          <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate('profiledetails')}>
          <View style={{ marginTop: hp(5), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center' }}>

            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Box-2.png')} style={styles.image}></Image>
            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Icon-2.png')} 
            style={styles.image1}></Image>
            <Text  style={styles.text5}>View Profile</Text>
            <View style={{position:'absolute'}}>
            <Text style={styles.text6}>continue</Text>
            <Image source={require('D:/projects/react-native/new/shopping/image/25.AgentProfile/Button.png')} 
            style={styles.image2}></Image>
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
    marginTop:hp(22)


},
text6: {

    // position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-regular',
    fontSize: hp(2.5),
    marginTop:hp(26),
    marginRight:hp(1)
  

},
container1: {
  justifyContent:'center',
  alignItems:'center',
  marginTop: hp(1),
  marginBottom: hp(1)
},
text2: {
    fontFamily: "Lato-Regular",
  
    fontSize: hp(2.5),

},
image1: {
    position: 'absolute',
    width: normalize(110),
    height: normalize(105),

    top: hp(3)


},
image2: {
    height: normalize(20), width: normalize(20), position: 'absolute',
    left: wp(20),
    marginTop:hp(26.8)
    
},
})