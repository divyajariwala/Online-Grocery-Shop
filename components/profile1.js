import React, { Component } from 'react';

import {StyleSheet, Text, View,Button,Image} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import {Icon} from 'react-native-elements';  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search1 from './search1'
 import Shop1 from './shop1';
import Wallet from './wallet';
import Orders from './orders';
import Orders1 from './order1';
import Orders2 from './order2';
import Profile from './profile';
import Profile1 from './MyProfile1';
import Messages from './messages'
import OrderDetails from './Order'
import OrderList from './OrderList'

// export default class profile1 extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   static navigationOptions = {

//     header: null,
// };
//   render() {
//     return (
//         <AppContainer/>
     
//     );
//   }
// }




const HomeTab = createStackNavigator(
  {
    shop1: Shop1 ,
    search1: Search1 ,
    orders: Orders ,
    order1: Orders1 ,
    orderdetails:OrderDetails,
  },
  {
    initialRouteName: 'shop1'
     
    },
  
);

const Order = createStackNavigator(
  {
 
    order2:Orders2,

    orderList:OrderList
   
  },
  {
    initialRouteName: 'orderList'
     
    },
  
);
const ProfileTab = createStackNavigator(
  {
    profile:Profile,
    profile1:Profile1,
   
  },
  {
    initialRouteName: 'profile'
     
    },
  
);

const styles = StyleSheet.create({
  PNGImageStyle: {
    height:25,width:30,bottom:1, 
}
})
const TabNavigator = createBottomTabNavigator(
  
  {


    shop1: {
      screen: HomeTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          focused ?
          <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-1.png')} 
       style={[styles.PNGImageStyle, {tintColor:'red'}]}
       />
       :
       <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-1.png')} 
       style={[styles.PNGImageStyle, {tintColor:'white'}]}
       />
        ),
        tabBarLabel: 'Shop',
        tabBarOptions: {
          activeBackgroundColor:'white',
          inactiveBackgroundColor:'#bf202e',
          activeTintColor: '#bf202e',
          inactiveTintColor:'white',
          
          showIcon: true,
        
          labelStyle: {
            fontSize: 12,
            activeTintColor: '#bf202e',
            inactiveColor:'white',
            fontFamily: 'Lato-Regular',
       
          },
          tabStyle: {
            width: 65,
                 borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
     
            
          },
          style: {
            backgroundColor: '#bf202e',
         
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
         
            
     
       
          },

        }

      }
  
    },
    wallet: {

      screen: Wallet,

      navigationOptions: {

        tabBarIcon: ({ tintColor, focused }) => (
          focused ?
          <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-2.png')} 
       style={[styles.PNGImageStyle, {tintColor:'red'}]}
       />
       :
       <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-2.png')} 
       style={[styles.PNGImageStyle, {tintColor:'white'}]}
       />
        ),
        tabBarLabel: 'Wallet',
        tabBarOptions: {
          activeBackgroundColor:'white',
          inactiveBackgroundColor:'#bf202e',
          activeTintColor: '#bf202e',
          inactiveTintColor:'white',
          showIcon: true,
 
          labelStyle: {
            fontSize: 12,
            fontFamily: 'Lato-Regular',
         
          },
          tabStyle: {
            width: 65,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          style: {
            backgroundColor: '#bf202e',
            borderTopRightRadius:10,
            borderTopLeftRadius:10
          },

        }

      }
    },
    ordernav: {

        screen: Order,
  
        navigationOptions: {
          tabBarLabel: 'Orders',
          barStyle: { backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "black" },
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-3.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-3.png')} 
         style={[styles.PNGImageStyle, {tintColor:'white'}]}
         />
          ),
          tabBarOptions: {
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'#bf202e',
            activeTintColor: '#bf202e',
            inactiveTintColor:'white',
            showIcon: true,
            showLabel: true,
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
              width: 65,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            style: {
              backgroundColor: '#bf202e',
              borderTopRightRadius:10,
              borderTopLeftRadius:10
            
            },
  
          }
  
        }
      },
      profilenav: {

        screen: ProfileTab,
  
        navigationOptions: {
          tabBarLabel: 'Profile',
     
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-4.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-4.png')} 
         style={[styles.PNGImageStyle, {tintColor:'white'}]}
         />
          ),

          tabBarOptions: {
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'#bf202e',
            activeTintColor: '#bf202e',
            inactiveTintColor:'white',
            showIcon: true,
            showLabel: true,
            labelStyle: {
              fontSize: 12,
              fontFamily: 'Lato-Regular',
            },
            tabStyle: {
              width: 65,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            style: {
          
  
              backgroundColor: '#bf202e',
              borderTopRightRadius:10,
              borderTopLeftRadius:10
       
      
            },
  
          }
  
        }
      },
      messages: {

        screen: Messages,
  
        navigationOptions: {
          tabBarLabel: 'Messages',
          barStyle: { backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "black" },
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-5.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-2/Menu-Icon-5.png')} 
         style={[styles.PNGImageStyle, {tintColor:'white'}]}
         />
          ),
          tabBarOptions: {
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'#bf202e',
            activeTintColor: '#bf202e',
            inactiveTintColor:'white',
       
            showIcon: true,
            showLabel: true,
            labelStyle: {
              fontSize: 12,
              fontFamily: 'Lato-Regular',
            },
            tabStyle: {
              width: 65,
    
              borderBottomLeftRadius: 10,
              borderTopRightRadius: 10,
            },
            style: {
              backgroundColor: '#bf202e',
              borderTopRightRadius:10,
              borderTopLeftRadius:10
            },
  
          }
  
        }
     
      }
  },
  {  
    initialRouteName: "profilenav",  

    shifting: false,
    animationEnabled: false,
    swipeEnabled: false,
    
   
   
  },  
);
const AppContainer = createAppContainer(TabNavigator)


export default AppContainer



