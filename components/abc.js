import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,BackHandler, TouchableOpacity, Image, ActivityIndicator,AsyncStorage} from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
// import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
//import AsyncStorage from '@react-native-community/async-storage'
import SwipeableViews from 'react-swipeable-views-native';

// import Category from 'react-native-category';


export default class Category extends React.Component {
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
  constructor() {
    super();
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      loading: true,
      selectedIndex: 0
      
    };
    
  }

  static navigationOptions = {
    header: null,
};
// _itemChoose(item) {
//   alert(item.title)
// }
  componentDidMount() {
   
    var instance = axios.create({
      baseURL: 'http://167.172.157.118/spazapro/public/api',
      headers: { 'Content-Type': 'application/json' }
    })
    instance.post('/showProductCategotyWise', {
      token: '7258v4BuCki6PsT6mqbc5O93HLDqSf306i3GFxAR',
    })
      // .then(function (response) {
      //     console.log(response.data);
      // })
      .then(response => {
        console.log(response.data);
        console.log(response.data.result)
        console.log(response.data.data[0].catName)
        console.log(response.data.data[0].product)
        console.log(response.data.data[0].image)

       

     

        this.setState({
          loading: false,
          dataSource: response.data.data,
           dataSource1: response.data.data,
        //   dataSource2: response.data.combo

        })

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // renderItem = ({item, index}) => {
  //  // console.log(this.state.selectedIndex)
  //   return (
  //          <TouchableOpacity style={{ flexDirection:"row" }} onPress ={()=> this.setState({ selectedIndex:index })}>
  //           <Text style={{color: this.state.selectedIndex == index ? 'Black' : 'White',justifyContent: "space-between",fontSize: hp(2.9)}}>{item.catName}</Text>
  //       <Image></Image>
  //         </TouchableOpacity> 
  //   )
  // }

  render()
  {
      return(
       
        <View style = {{ flex: 1 }}>
         <View style={styles.header}>
                    <Text style={styles.text1} onPress={() => this.props.navigation.navigate('welcome')}> Back </Text>
                    <Text style={styles.text}> Products</Text>
                    <Text style={styles.text1} onPress={() => this.props.navigation.navigate('search')}> Search </Text>
                </View>

        {/* <View   style = {{ flex:1, flexDirection: 'row' }}> */}
        
                <View style={{flexDirection:'row'}}>
                 
                    <View style={{ width:"85%",justifyContent:'center',}}>
                        
                       <FlatList
          horizontal={true} 
          showsHorizontalScrollIndicator={false}          
           // padding={30}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={1}
            ref={(ref) => {
              this.ListView_Ref=ref;
            }}
           // renderItem={this.renderItem
           renderItem={({ item }) => 
   // console.log(this.state.selectedIndex)
    <View>
           <TouchableOpacity style={{ flexDirection:"row" }} >
            <Text style={{color:'#b7292a',justifyContent:"center",fontSize: hp(2.9),textAlign:"center"}}>{item.catName}</Text>
       
          </TouchableOpacity> 
    
  
             <FlatList 
          horizontal={false}           
            showsHorizontalScrollIndicator={false}
             data={item.product}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  numColumns={2}
                   ref={(ref) => {
              this.ListView_Ref = ref;
            }}
                  renderItem={({item}) =>
                   <TouchableOpacity
                      // image1={item.image}
                      // name1={item.name}
                      // onPress={() => this.toggleModal(item.image, item.name)}
                      activeOpacity={0.8}
                      style={{ marginLeft: hp(2.5), marginRight: hp(2.5), marginTop: hp(1.5) }}>
                      <Image source={{uri: item.image}} style={{ height: hp(20), width: wp(37), }}></Image>
                      <Text style={{ textAlign:'center',fontSize: hp(2.5), width: wp(37), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center', marginTop: hp(1.5), marginBottom: hp(1.5) }}>{item.name}</Text>
                    </TouchableOpacity>

                  }
                >
                </FlatList>
                    </View>
                }
        
          > 
          </FlatList>   
                     
                    </View>
                    <View style={{ width: '10%', flexDirection: "row", justifyContent: 'flex-end', }}>
                        <TouchableOpacity>
                        <Image
                        onPress={() => this.ListView_Ref.scrollToOffset({ offset: 0, animated: true })} 
                        source={require('C:/Users/pc/shopping/image/10.Product-1/Left-arrow.png')} 
                        
                        style={styles.image}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image 
                        onPress={() => this.ListView_Ref.scrollToEnd({ animated: true })}
                        source={require('C:/Users/pc/shopping/image/10.Product-1/Right-arrow.png')} 
                        style={styles.image1}></Image>
</TouchableOpacity>
                    </View>
                </View>
          {/* <FlatList
          horizontal={true}           
           // padding={30}
            data={this.state.dataSource}
             ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns={1}
            ref={(ref) => {
              this.ListView_Ref = ref;
            }}
           // renderItem={this.renderItem
           renderItem={({ item }) => 
   // console.log(this.state.selectedIndex)
    <View>
           <TouchableOpacity style={{ flexDirection:"row" }} >
            <Text style={{color:'red',justifyContent: "space-between",fontSize: hp(2.9)}}>{item.catName}</Text>
       
          </TouchableOpacity> 
    
  
             <FlatList 
             data={item.product}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  numColumns={2}
                  renderItem={({ item }) =>
                   <TouchableOpacity
                      // image1={item.image}
                      // name1={item.name}
                      // onPress={() => this.toggleModal(item.image, item.name)}
                      activeOpacity={0.8}
                      style={{ justifyContent: "center", alignItems: "center", marginLeft: hp(2.5), marginRight: hp(2.5), marginTop: hp(1.5) }}>
                      <Image source={{uri: item.image}} style={{ height: hp(20), width: wp(37), }}></Image>
                      <Text style={{ fontSize: hp(2.5), width: wp(37), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center', marginTop: hp(1.5), marginBottom: hp(1.5) }}>{item.name}</Text>
                    </TouchableOpacity>

                  }
                >
                </FlatList>
                    </View>
                }
        
          > 
          </FlatList>
          <View style={{flexDirection:"row" ,marginRight:hp(1)}}>
          <TouchableOpacity onPress={() => this.ListView_Ref.scrollToOffset({ offset: 0, animated: true })} >
                <Image source={require('C:/Users/pc/shopping/image/13Shop/Left-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1 }}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.ListView_Ref.scrollToEnd({ animated: true })} >
                <Image source={require('C:/Users/pc/shopping/image/13Shop/Right-Arrow.png')} style={{ height: hp(2.5), width: wp(2.5), bottom: 1, marginLeft: hp(2) }}></Image>
              </TouchableOpacity>
          </View> */}
          </View>
       //   </View>
            
          
  )}

  }
const styles=StyleSheet.create({
    header: {
        height: hp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: hp(1),
        marginRight: hp(1),
    },
    text: {
        fontSize: hp(4),
        fontFamily: "Lato-Bold",
        color: '#bf202e'
    },
    text1: {
        fontSize: hp(2.5),
        fontFamily: "Lato-Bold",
        color:'#010101'

    },
     image: {
        marginTop:hp(2),
        width: wp(2.5),
        height: hp(2.5)
    },
    image1: {
   
        marginTop:hp(2),
        width: wp(2.5),
        height: hp(2.5),
        marginLeft: hp(2.5),


    }
    
})
            


 


  
