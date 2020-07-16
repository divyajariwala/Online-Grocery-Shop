import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, Alert ,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class messages extends Component {
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }
  click1 = () => {
    this.setState({
      status:'Read',
      color:'#d3d3d3'
    })
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
  async getToken() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      let userData1 = await AsyncStorage.getItem("userData1");
      let data1 = JSON.parse(userData1);
      console.log(data);
      console.log(data1);

      if(data !== null) {
       this.props.navigation.navigate('customer')
      } else if(data1 !== null){
        this.props.navigation.navigate('agent')
      }

    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);


    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var that = this;
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    that.setState({
      date:
        date + ' ' + month + ' ' + year,
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      status:'Unread',
      color:'pink'
    };
  }
  static navigationOptions = {

    header: null,
  };

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>


          <View style={{ width: '15%' }}>
            <Text style={styles.text1} onPress={() => this.getToken()}> Back </Text>
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.text}>Inbox </Text>
          </View>
          <View style={{ width: '15%' }}>

          </View>
        </View>
        <View style={styles.container1}>

          <View style={styles.header1}>
            <Text style={styles.text2} >Messages</Text>
            <View style={{marginTop:hp(1.5)}}>
              <Text style={{fontFamily:'Lato-Regular',textAlign:'center'}}> {this.state.date} ({this.state.status})</Text>
            <TouchableOpacity 
            style={{marginTop:hp(1),padding:hp(1.5),borderRadius:hp(5),backgroundColor:this.state.color}}
            onPress={() => this.click1()}
            >
              <Text style={{fontFamily:'Lato-Regular'}}>
                Your Profile is now updates. Check your email.
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: hp(10),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  header1: {
    flex:1,

    justifyContent: 'flex-start',
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
    marginLeft: hp(2)
  },
  text2: {
    fontSize: hp(2.5),
    marginTop:hp(2),
    fontFamily: "Lato-Bold",
    color: '#bf202e',
  },
  container1:
  {
    shadowColor: '#ddd',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    borderRadius: 10,
    backgroundColor: 'white',

    height: hp(72),
    marginLeft: hp(3),
    marginRight: hp(3),
    marginTop: hp(1),

    // marginBottom: hp(5)
    // marginBottom: hp(5)
  },
})