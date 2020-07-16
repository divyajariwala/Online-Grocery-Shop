import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator,AsyncStorage} from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
import { StackActions } from 'react-navigation';

const popAction = StackActions.pop();
export default class shop1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      loading: true,
      image1: "",
      name1: "",
      count: 1,
      fetchingStatus: false,
      setOnLoad: false,
      cart:0,
      page:""
    };
    // this.page = 1
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    this.apiCall();

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
  apiCall = () => {
  
    var instance = axios.create({
      baseURL: 'http://167.172.157.118/spazapro/public/api',

    })
    instance.post('/shop', {
      token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
      pageno: this.state.page
    })

      .then(response => {
        console.log(response.data);
        console.log(response.data.result)
        console.log(response.data.data[0].catName)
        // console.log(response.data.data[0].product[0].name)
        // console.log(response.data.data[0].product[0].image)

        // console.log(response.data.data[0].Promotions.name[0])
        // console.log(response.data.data[8].Promotions.data[0].promoName)
         this.page = this.page+1;
        this.setState({
          loading: false,
          setOnLoad: true,
          dataSource: response.data.data,
          dataSource1: response.data.promotion,
          dataSource2: response.data.combo,
        })

      })
      .catch(function (error) {
        console.log(error);
        that.setState({ setOnLoad: false, fetching_Status: false });
      });

  }
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
      isModalVisible: !this.state.isModalVisible,
      count: 1

    });



  };
  toggleModal1 = () => {
    setTimeout(() => {
      this.setState({
          isModalVisible: !this.state.isModalVisible

      });
      this.setState(prevState => ({ cart: prevState.cart + 1 }));
      if (this.state.count <= 0) {
        this.setState({
          count: 0
        })
        
      }
  }, 2000)
  
    // this.props.navigation.navigate('orders')

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


  BottomView = () => {
    return (

      <View>
        {
          (this.state.fetchingStatus)
            ?
            <ActivityIndicator size="large" color="#F44336" style={{ marginLeft: 6 }} />
            :
            null
        }

      </View>


    )
  }
  renderItem1 = ({ item, index }) => {
    return (
      <View style={{ justifyContent: "space-around", alignItems: "center" }}>
        {/* <Image source={{ uri: item.imageuri }} style={{ height: hp(20), width: wp(37), marginLeft: hp(2) }}></Image> */}
        <Text style={{ fontSize: hp(2.9), fontFamily: "Lato-Bold", marginTop: hp(-1), color: "#111111" }} >{item.catName}</Text>

      </View>

    );
  };
  render() {
    console.log(this.state.dataSource1)

    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text1}    onPress={()=>this.getToken()}> Back </Text>
          <Text style={styles.text}> Shop</Text>
          <Text style={styles.text1} onPress={() => this.props.navigation.navigate('search1')}> Search </Text>
        </View>
        <ScrollView>
          <View style={styles.header1}>

            <Text style={styles.text3}>Promotions</Text>

            <View style={{ flexDirection: "row", }}>
              <TouchableOpacity onPress={() => this.ListView_Ref.scrollToOffset({ offset: 0, animated: true })} >
                <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Left-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1 }}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.ListView_Ref.scrollToEnd({ animated: true })} >
                <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Right-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1, marginLeft: hp(2) }}></Image>
              </TouchableOpacity>
            </View>
          </View>


          {/* <ActivityIndicator
            animating={this.state.loading}
            color='#bf202e'
            size="large"
            style={styles.activityIndicator}
            hidesWhenStopped={true}
            /> */}
          {this.state.loading && (
            <ActivityIndicator
              style={{ height: 80 }}
              color='#bf202e'
              size="large"
            />
          )}
          <FlatList
            // padding={30}
            data={this.state.dataSource1}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={1}
            ref={(ref) => {
              this.ListView_Ref = ref;
            }}
            renderItem={({ item }) =>

              <View style={{ justifyContent: "space-around", alignItems: "center", marginLeft: hp(2.5), marginRight: hp(2.5), marginTop: hp(1) }} >
                <Image source={{ uri: item.Image }} style={{ height: normalize(200), width: '100%', marginLeft: hp(2.5), marginRight: hp(2.5),marginBottom:hp(1)}}></Image>

              </View>


            }
          >

          </FlatList>
          <View style={styles.line}>
          </View>
          <View style={styles.header1}>

            <Text style={styles.text3}>Combos</Text>

            <View style={{ flexDirection: "row", marginTop: hp(2.5) }}>
              <TouchableOpacity onPress={() => this.ListView_Ref2.scrollToOffset({ offset: 0, animated: true })} >
                <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Left-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1 }}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.ListView_Ref2.scrollToEnd({ animated: true })} >
                <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Right-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1, marginLeft: hp(2) }}></Image>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.loading && (
            <ActivityIndicator
              style={{ height: 80 }}
              color='#bf202e'
              size="large"
            />
          )}
          <FlatList
            // padding={30}
            data={this.state.dataSource2}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={2}
            ref={(ref) => {
              this.ListView_Ref2 = ref;
            }}
            renderItem={({ item }) =>
              <View style={{ height: hp(25) }}>
                <TouchableOpacity
                  image1={item.image}
                  name1={item.name}
                  onPress={() => this.toggleModal(item.Image, item.comboName)}
                  activeOpacity={0.8} style={{ justifyContent: "space-around", alignItems: "center", marginLeft: hp(2.5), marginRight: hp(2.5), marginTop: hp(1.5) }}>
                  <Image source={{ uri: item.Image }} style={{ height: "90%", width: "90%", marginLeft: hp(2) }}></Image>
                  <Text style={{ fontSize: hp(2.5), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center', marginTop: hp(1.5), marginBottom: hp(1.5) }} >{item.comboName}</Text>
                </TouchableOpacity>

              </View>

            }
          >
          </FlatList>
          <View style={styles.line}>
          </View>

          {this.state.loading && (
            <ActivityIndicator
              style={{ height: 80 }}
              color='#bf202e'
              size="large"
            />
          )}
          <FlatList
            // padding={30}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ItemSeparator}

            initialNumToRender={4}
            maxToRenderPerBatch={1}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {

              this.apiCall();

            }}
            // ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={1}
            ref={(ref) => {
              this.ListView_Ref3 = ref;
            }}
            renderItem={({ item }) => <View >

              <View style={styles.header1}>

                <Text style={styles.text3}>{item.catName}</Text>

                <View style={{ flexDirection: "row", marginTop: hp(2) }}>
                  <TouchableOpacity onPress={() => this.ListView_Ref3.scrollToOffset({ offset: 0, animated: true })} >
                    <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Left-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1 }}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.ListView_Ref3.scrollToEnd({ animated: true })} >
                    <Image source={require('D:/projects/react-native/new/shopping/image/13.Shop/Right-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1, marginLeft: hp(2) }}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                 Style={styles.contentContainer}>

                <FlatList data={item.product}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  
                  horizontal={true}
                  renderItem={({ item }) =>

                    <TouchableOpacity
                      image1={item.image}
                      name1={item.name}
                      onPress={() => this.toggleModal(item.image, item.name)}
                      activeOpacity={0.8}
                      style={{ justifyContent: "center", alignItems: "center", marginLeft: hp(2.5), marginRight: hp(2.5), marginTop: hp(1.5) }}>
                      <Image source={{ uri: item.image }} style={{ height: hp(20), width: wp(37), }}></Image>
                      <Text style={{ fontSize: hp(2.5), width: wp(37), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center', marginTop: hp(1.5), marginBottom: hp(1.5) }}>{item.name}</Text>
                    </TouchableOpacity>

                  }
                  ListFooterComponent={this.BottomView()}
                >

                </FlatList>
              </ScrollView>
              <View style={styles.line}>
              </View>
            </View>
            }
          >
          </FlatList>
          <Modal isVisible={this.state.isModalVisible} image1={this.state.image1} name1={this.state.name1} >
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
                      style={styles.image5}></Image>
                  </View>
                  <View style={{ width: "50%" }}>
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



              <TouchableOpacity style={styles.container2} activeOpacity={0.8} >
                <Text style={styles.text6} onPress={this.toggleModal1}>Confirm</Text>

              </TouchableOpacity>


            </View>
          </Modal>

        </ScrollView>

        <View style={{ height: hp(6), flexDirection: "row", justifyContent: "space-evenly", marginTop: hp(2) }}>
          <TouchableOpacity activeOpacity={1}
            onPress={() => this.props.navigation.navigate('')}
            style={{ borderRadius: hp(1), backgroundColor: "#be202f", height: hp(5), width: wp(28) }}>
            <Text style={{ color: "#fefefd", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            onPress={() => this.props.navigation.navigate('orders')}
            style={{ borderRadius: hp(1), backgroundColor: "#be202f", height: hp(5), width: wp(28) }}>
            <Text style={{ color: "#fefefd", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Cart ({this.state.cart})</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            onPress={() => this.props.navigation.navigate('order1')}
            style={{ borderRadius: hp(1), backgroundColor: "#be202f", height: hp(5), width: wp(28) }}>
            <Text style={{ color: "#fefefd", fontSize: hp(2.5), textAlign: "center", marginTop: hp(0.8) }}>Quote</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  header1: {
    flex: 1,
    // width: "50%",
    //height: hp(),
    flexDirection: 'row',

    //alignItems: 'center',
    marginLeft: hp(2.5),
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: hp(2.5),
  },
  text3:
  {
    fontSize: hp(2.8),
    color: '#C51E25',
    fontFamily: 'Lato-Regular'

  },
  container:
  {
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
  text1: {
    fontSize: hp(2.5),
    fontFamily: "Lato-Bold",

  },
  text: {
    fontSize: hp(3.5),
    fontFamily: "Lato-Bold",
    color: '#C51E25'
  },
  line:
  {
    // marginTop: hp(1.5),
    borderColor: '#b2b2b2',
    //padding: hp(0.1),
    marginLeft: hp(2.5),
    marginRight: hp(2.5),
    flexDirection: "row",
    borderWidth: hp(0.1)
    // marginBottom: hp(2)
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
    fontSize: hp(4),
    fontFamily: "Lato-Bold",
    marginTop: hp(3),
    color: '#bd2534',
    textAlign: "center"


  },
  image3:
  {
    height: normalize(30),
    width: normalize(30),
    marginTop: hp(1),
    // marginRight: hp(3)

  },
  image5:
  {
    height: normalize(100),
    width: normalize(100),
    justifyContent: "center"
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
  image3:
  {
    height: normalize(30),
    width: normalize(30),
    marginTop: hp(1),
    // marginRight: hp(3)

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