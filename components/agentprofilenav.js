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
import Wallet from './agentwallet';
import Orders from './orders';
import Orders1 from './order1';
import Orders2 from './order2';
import OrderDetails from './Order'
// import OrderList from './OrderList'

import Profile from './agentprofile';
import Customer from './agentcustomer'
import Agentcustomer1 from './agentcustomer1'
import Signup from './SignUp'
import Signup2 from './SignUp2'
import Profiledetails from './ProfileDetails'
import Profiledetails1 from './ProfileDetails1'
import Messages from './messages'
import Selectcustomer from './selectcustomer'
import OrderListA from './OrderListA'
import CustomerP from './CustomerP'
import CustomerP1 from './CustomerP1'

// export default class agentprofilenav extends Component {
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

const profileTab = createStackNavigator(
  {
   agentprofile:Profile,
   profiledetails:Profiledetails,
   profiledetails1:Profiledetails1,
   messages:Messages
   
  },
  {
    initialRouteName: 'agentprofile'
     
    },
);
const customerTab = createStackNavigator(
  {
    agentcustomer: Customer ,
    agentcustomer1:Agentcustomer1,
    signup:Signup,
    signup2:Signup2,
    customerP:CustomerP,
    customerP1:CustomerP1
   
  },
  {
    initialRouteName: 'agentcustomer'
     
    },
  
);
const HomeTab = createStackNavigator(
  {
    shop1: Shop1 ,
    search1: Search1 ,
    orders: Orders ,
    order1: Orders1 ,
    orderdetails:OrderDetails,
    selectcustomer:Selectcustomer

  },
  {
    initialRouteName: 'shop1'
     
    },
  
);
const orderTab = createStackNavigator(
  {

    order2:Orders2,
    orderListA:OrderListA
   
  },
  {
    initialRouteName: 'orderListA'
     
    },
  
);

const styles = StyleSheet.create({
  PNGImageStyle: {
    height:28,width:30,bottom:1, 
}
})

const TabNavigator = createBottomTabNavigator(
  {


    agentshop: {
      screen: HomeTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
        
     
      focused ?
         <Image 
      source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-1.png')} 
      style={[styles.PNGImageStyle, {tintColor:'red'}]}
      />
      :
      <Image 
      source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-1.png')} 
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
            inactiveColor:'white'
       
          },
          tabStyle: {
            width: 65,
                 borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
     
            
          },
          style: {
            backgroundColor: '#bf202e',
            borderTopRightRadius:10,
            borderTopLeftRadius: 10,
     
            
     
       
          },

        }

      }
  
    },
    agentwallet: {

      screen: Wallet,

      navigationOptions: {
        barStyle: { backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "black" },
        tabBarIcon: ({ tintColor, focused }) => (
          focused ?
          <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-2.png')} 
       style={[styles.PNGImageStyle, {tintColor:'red'}]}
       />
       :
       <Image 
       source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-2.png')} 
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
         
          },
          tabStyle: {
            width: 65,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          style: {
            backgroundColor: '#bf202e',
            borderTopLeftRadius: 10,
            borderTopRightRadius:15
          },

        }

      }
    },
    agentcustomer: {

        screen: customerTab,
  
        navigationOptions: {
          tabBarLabel: 'Customers',
          barStyle: { backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "black" },
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-3.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-3.png')} 
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
              borderTopLeftRadius: 10,
              borderTopRightRadius:15
            },
  
          }
  
        }
      },
      agentorders: {

        screen: orderTab,
  
        navigationOptions: {
          tabBarLabel: 'Orders',
     
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-4.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-4.png')} 
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
              borderTopLeftRadius: 10,
              borderTopRightRadius:15
            },
  
          }
  
        }
      },
      agentprofile: {

        screen: profileTab,
  
        navigationOptions: {
          tabBarLabel: 'Profile',
          barStyle: { backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "black" },
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
            <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-5.png')} 
         style={[styles.PNGImageStyle, {tintColor:'red'}]}
         />
         :
         <Image 
         source={require('D:/projects/react-native/new/shopping/image/Bottom-Bar-1/Menu-Icon-5.png')} 
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
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            style: {
              backgroundColor: '#bf202e',
              borderTopLeftRadius: 10,
             borderTopRightRadius:15
            },
  
          }
  
        }
     
      }
  },
  {  
    initialRouteName: "agentprofile",  

    shifting: false,
    animationEnabled: false,
    swipeEnabled: false,

   
  },  
);


const AppContainer = createAppContainer(TabNavigator)
export default AppContainer;