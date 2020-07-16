
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, BackHandler, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import normalize from 'react-native-normalize'
import Modal from "react-native-modal";

import SearchInput from 'react-native-search-filter';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
export default class search1 extends Component {
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

    var instance = axios.create({
      baseURL: 'http://167.172.157.118/spazapro/public/api',
      headers: { 'Content-Type': 'application/json' }
    })
    instance.post('/searchProductByName', {
      name: this.state.search,
      token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
    })
      // .then(function (response) {
      //     console.log(response.data);
      // })
      .then(response => {
        console.log(response.data);
        console.log(response.data.data[0].name)


        this.setState({
          loading: false,
          dataSource: response.data.data,
          ismodalVisible: false,

        },
          function () {
            this.arrayholder = response.data.data;
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
      search: "",
      dataSource: [],
      loading: true,
      image1: "",
      name1: "",
      count: 1,

    };
    this.arrayholder = [];
  }
  static navigationOptions = {

    header: null,
  };
  toggleModal = (image1, name1) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      image1: image1,
      name1: name1
    });


  };
  toggleModal2 = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      isModalVisible: !this.state.isModalVisible

    });



  };
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
  toggleModal1 = () => {

    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
    this.props.navigation.navigate('orders')

  }
  searchproduct = (search) => {
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: search,
    });
  }
  render() {

    return (
      <View style={styles.container}>


        <View style={styles.header}>


          <View style={{ width: '15%' }}>
            <Text style={styles.text1} onPress={() => this.props.navigation.navigate('shop1')}> Back </Text>
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.text}> Search</Text>
          </View>
          <View style={{ width: '15%' }}>

          </View>
        </View>
        <View style={styles.header1}>
          <TouchableOpacity
            activeOpacity={1} style={{ marginLeft: hp(2), }}
          >
            <Icon name='search' type='material' color={'grey'} size={hp(5)}
              onPress={() => this.props.navigation.navigate('dashboard')}
            />
          </TouchableOpacity>
          <SearchInput

            style={styles.searchInput}
            onChangeText={(search) => this.searchproduct(search)}
            placeholder="Type Something"
          />
        </View>
        <View style={styles.body}>
          {/* <Text style={styles.text3} >No Result Found</Text>
                    <Text style={styles.text4}>No Result Found for Item "Type Something" {'\n'} Please try again with different search Item.</Text>
                */}
          {/* <ActivityIndicator
            animating={this.state.loading}
            color='#bf202e'
            size="large"
            style={styles.activityIndicator} /> */}
                  {this.state.loading && (
          <ActivityIndicator
            style={{ height: 10,marginTop:hp(1) }}
            color='#bf202e'
            size="small"
          />
        )}
          <FlatList data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <TouchableOpacity
                image1={item.image}
                name1={item.name}
                onPress={() => this.toggleModal(item.image, item.name)}
                activeOpacity={0.8} style={{ margin: hp(2), }}>
                <View >
                  <Image source={{ uri: item.image }} style={{ height: normalize(150), width: normalize(150), marginLeft: hp(2) }}></Image>
                  <Text style={{ fontSize: hp(2), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center' }} >{item.name}</Text>
                </View>
              </TouchableOpacity>
            }
          >

          </FlatList>

          <Modal isVisible={this.state.isModalVisible} image1={this.state.image1} name1={this.state.name1}>
            <View style={styles.model3} >
              <View style={{ height: "85%" }}>
                {/* <Image source={require('/Users/imac/Documents/Client/shopping/image/verficationFail.png')} style={styles.image4}></Image> */}
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: "87%", }}>
                    <Text style={styles.text7} >Add Item To Order</Text>
                  </View>
                  <View style={{ width: "13%" }}>
                    <TouchableOpacity onPress={this.toggleModal2} activeOpacity={0.8}>
                      <Image source={require('D:/projects/react-native/new/shopping/image/close(1).png')}
                        style={styles.image3}></Image>

                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: hp(1) }}>
                  <View style={{ width: "50%", justifyContent: "center", alignContent: "center", alignItems: 'center' }}>
                    <Image source={{ uri: this.state.image1 }}
                      // source={require('/Users/imac/Documents/Client/shopping/image/41619-7-groceries-free-download-image-thumb.png')}
                      style={styles.image5} />

                  </View>
                  <View style={{ width: "50%" }}>
                    {/* <Text style={styles.text10}>2KG Tastic Rice</Text> */}
                    <Text style={styles.text10}>{this.state.name1}</Text>

                    {/* <Text style={styles.text10}>R25.00 each</Text> */}
                    <Text style={styles.text11}>QTY</Text>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: hp(3) }}>
                      <TouchableOpacity activeOpacity={0.8} onPress={this.incrementFunc}>
                        <Image source={require('D:/projects/react-native/new/shopping/image/Plus(red).png')}
                          style={styles.image3}></Image>
                      </TouchableOpacity>
                      <Text style={styles.text14}>{this.state.count}</Text>
                      <TouchableOpacity activeOpacity={0.8} onPress={this.decrementFunc}>

                        <Image source={require('D:/projects/react-native/new/shopping/image/menus(red).png')}
                          style={styles.image4}></Image>
                      </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.text12}>Cost:{"\n"}R75.00</Text> */}

                  </View>

                </View>
              </View>


              <View style={styles.container2}>
                <TouchableOpacity >
                  <Text style={styles.text6} onPress={this.toggleModal1}>Confirm</Text>

                </TouchableOpacity>
              </View>

            </View>
          </Modal>
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
    marginLeft: hp(2),
    marginRight: hp(2),
  },
  header1: {
    height: hp(8),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: hp(4),
    marginRight: hp(4),
    backgroundColor: '#e4e4e4',
    // backgroundColor:'grey',
    borderRadius: hp(2)
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

  },
  searchInput: {
    padding: hp(1),
    paddingLeft: hp(2),
    borderColor: 'lightgrey',
    borderWidth: 0,

    borderRadius: hp(2),
    width: wp(80),
    marginLeft: hp(1),

    marginBottom: hp(1),
    fontSize: hp(3),
    fontFamily: 'Lato-Bold'
  },
  body: {
    alignItems:'center'
  },
  text3: {
    color: '#8d8d8d',
    fontSize: hp(3.5),
    fontFamily: 'Lato-Regular'

  },
  text4: {
    color: '#8d8d8d',
    fontSize: hp(2.5),
    fontFamily: 'Lato-Regular',
    marginTop: hp(1.5)

  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // position:'absolute'
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  model3:
  {
    height: hp(38),
    width: wp(90),


    backgroundColor: "white",
    borderRadius: hp(5),
    alignItems: 'center',

  },
  text7:
  {
    fontSize: hp(4.5),
    fontFamily: "Lato-Bold",
    marginTop: hp(3),
    color: '#bd2534',
    textAlign: "center"


  },
  text10:
  {
    fontSize: hp(3),
    fontFamily: "Lato-Bold"
  },
  text11:
  {
    marginTop: hp(1.3),
    fontSize: hp(2.5),
    fontFamily: "Lato-Black"
  },
  text12:
  {
    fontSize: hp(3),
    marginTop: hp(1.3),
    fontFamily: "Lato-Black"
  },
  text13:
  {
    fontSize: hp(3),
  },
  text14:
  {
    textAlign: "center",
    fontSize: hp(3),
    color: "#aa303b",
    justifyContent: "center",
    marginTop: hp(1.2),
    fontFamily: "Lato-Bold",
    marginLeft: hp(1.8),

  },
  image4:
  {
    height: normalize(30),
    width: normalize(30),
    marginTop: hp(1),
    marginLeft: hp(1.8)
    // marginRight: hp(3)
  },
  image5:
  {
    height: normalize(100),
    width: normalize(100),
    justifyContent: "center"
  },
  image3:
  {
    height: normalize(30),
    width: normalize(30),
    marginTop: hp(1),
    // marginRight: hp(3)

  },
  text6:
  {
    fontSize: hp(3),
    color: "#faf6f2",
    fontFamily: "Lato-Bold",
    // marginTop:hp(1)

  },
  container2:
  {
    flexDirection: "row",
    backgroundColor: "#c22130",
    height: "15%",
    width: "100%",
    borderBottomLeftRadius: hp(5),
    borderBottomRightRadius: hp(5),
    justifyContent: "center",
    alignItems: "center"
  },

})