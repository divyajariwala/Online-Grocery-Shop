import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,BackHandler,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
import axios from 'axios';

export default class wallet extends Component {
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
      headers: { 'Content-Type': 'application/json' ,'Accept':'application/json'}
  })
  instance.post('/loadWallet', {
      token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
      buyer_id:'129',
      rewards:'20'
  })
      // .then(function (response) {
      //     console.log(response.data);
      // })
      .then(response => {
          console.log(response.data);
          // console.log(response.data.data[0].name)
        
          
              this.setState({
                  loading: false,
                  dataSource: response.data.data
                  
              })
          
             

      })
      .catch(function (error) {
          console.log(error);
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


  render() {
    return (
 
        
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: "15%", justifyContent: 'center' }}>
              <Text style={{ fontSize: hp(2.5), marginLeft: hp(2), fontFamily: 'Lato-Bold' }}
                onPress={() => this.props.navigation.navigate('customer')}
              >
                Back
                        </Text>
            </View>
            <View style={{ width: "70%" }} >
              <Text style={styles.text}>
                Wallet
                    </Text>
            </View>
            <View style={{ width: "15%" }}>

            </View>
          </View>
        </View>



        <View style={{ flex: 1, }}>

          <View 
          style={{ marginTop: hp(2), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center',}}>

            <Image source={require('D:/projects/react-native/new/shopping/image/7.Wallet-1/Box-1.png')} style={styles.image}></Image>
            <Text style={styles.text6}>Current Balance</Text>
            <Text  style={styles.text5}>R ###</Text>
          </View>
          <View style={{ marginTop: hp(3), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center' }}>

            <Image source={require('D:/projects/react-native/new/shopping/image/7.Wallet-1/Box-2.png')} style={styles.image}></Image>
            <Text style={styles.text6}>Rewards (month to date)</Text>
            <Text  style={styles.text5}>R ###</Text>
          </View>
          <View style={{ marginTop: hp(3), marginLeft: hp(2), marginRight: hp(2), alignItems: 'center' }}>

            <Image source={require('D:/projects/react-native/new/shopping/image/7.Wallet-1/Box-3.png')} style={styles.image}></Image>
            <Text style={styles.text6}>Total Rewards Received</Text>
            <Text  style={styles.text5}>R###</Text>
          </View>
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
    width: wp(80), height: hp(20),
    borderRadius: hp(2),
  },
  text5: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: hp(6),
    marginTop:hp(10)


},
text6: {

    position: 'absolute',
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: hp(3.5),
    marginTop:hp(4),
  

},
})