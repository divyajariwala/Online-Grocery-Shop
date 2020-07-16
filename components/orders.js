import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,ScrollView,Alert,BackHandler,AsyncStorage} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';


const data = [

  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
  { key: 'R25', key1: 'R50' },
]

export default class orders extends Component {
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
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
  incrementFunc = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  decrementFunc = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    if (this.state.count <= 1) {
      this.setState({
        count: 1
      })
    }
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
      count: 1,
    };
  }
  static navigationOptions = {

    header: null,
  };
  renderItem = ({ item, index }) => {


    return (
      <View style={styles.item}>

<View style={{ width: "50%" ,    flexDirection: 'row',alignItems:'center'}}>

          <TouchableOpacity onPress={this.incrementFunc}>
            <Image source={require('D:/projects/react-native/new/shopping/image/14.Order/Plus.png')}
             
             style={{ height: normalize(20), width: normalize(20), }}></Image>
          </TouchableOpacity>

          <Image
            source={require('D:/projects/react-native/new/shopping/image/images.jpeg')}
            style={{ height: hp(13), width: wp(16), marginBottom: hp(3), }}></Image>

          <Text style={{ marginLeft: hp(1), fontFamily: 'Lato-Regular', fontSize: hp(2.5) }}>x{this.state.count}</Text>
          <TouchableOpacity onPress={this.decrementFunc}>
            <Image source={require('D:/projects/react-native/new/shopping/image/14.Order/Menus.png')}
              style={{height: normalize(20), width: normalize(20), marginLeft: hp(1) }}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ width: "25%" }}>
          <Text style={{  fontFamily: 'Lato-Regular', fontSize: hp(2.5) }}>{item.key}</Text>
        </View>
        <View style={{ width: "25%",    flexDirection: 'row', }} >
          <Text style={{  fontFamily: 'Lato-Regular', fontSize: hp(2.5) }}>{item.key1}</Text>
          <Image
            source={require('D:/projects/react-native/new/shopping/image/14.Order/Delete.png')}
            style={{ height: 22, width: 20, marginLeft: hp(3) }}></Image>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>


          <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={styles.text} onPress={() => this.getToken()}> Back </Text>
          </View>
        </View>


        <View style={styles.header1}>
          <Text style={styles.text1}>Shopping Cart</Text>
          <Text style={styles.text1}># Products</Text>

        </View>


        <View style={styles.header2}>
          <View style={{ width: "45%" }}>

          </View>
          <View style={{ width: "25%" }}>
            <Text style={styles.text2}>Unit price</Text>

          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.text3}>Total price</Text>

          </View>
        </View>

        <ScrollView>
          <FlatList
            data={data}
            style={styles.container}
            renderItem={this.renderItem}

          />


        </ScrollView>

        <View style={styles.header5}>
          <View style={{ width: '45%', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>Total Price</Text>
          </View>
          <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
          </View>

          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>


            <Text style={{ fontFamily: 'Lato-Bold', color: '#bf202e', fontSize: hp(2.5) }}>R250</Text>
          </View>
        </View>
        <View style={styles.header4}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('')}

            style={{ borderRadius: hp(1), backgroundColor: "#BE202F", height: hp(5), width: wp(28), bottom: hp(1) }}>
            <Text style={{ color: "#FEFEFD", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('order1')}
            style={{ borderRadius: hp(1), backgroundColor: "#BE202F", height: hp(5), width: wp(28), bottom: hp(1) }}>
            <Text style={{ color: "#FEFEFD", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Quote</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,backgroundColor:'white'
  },
  header: {
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: hp(1),
    // marginRight: hp(2),
  },
  text: {
    fontSize: hp(2.5),
    fontFamily: "Lato-Bold",

  },
  header1: {
    height: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: hp(5),
    marginRight: hp(5),

  },
  header2: {
    height: hp(6),
    flexDirection: 'row',

    alignItems: 'center',
    //marginLeft: hp(24),
    marginRight: hp(3),
    marginTop: hp(2),

  },
  text1: {
    fontSize: hp(3),
    fontFamily: 'Lato-Regular',
    color: '#bf202e'
  },
  text2: {
    fontSize: hp(2.5),
    fontFamily: 'Lato-Regular',
    color: '#bf202e',

  },
  text3:
  {
    fontSize: hp(2.5),
    fontFamily: 'Lato-Regular',
    color: '#bf202e',

  },
  header4: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(2)
  },
  header5: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(2),
    marginRight: hp(5),
    marginLeft: hp(5),
    justifyContent: 'space-around',

  },
  item: {

    flexDirection: 'row',

    alignItems: 'center',
    marginLeft: hp(5),
    marginRight: hp(5),
    marginTop: hp(2),




  },
});