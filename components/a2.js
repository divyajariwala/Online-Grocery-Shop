import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { createAppContainer} from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

class a1 extends Component {
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
      <View>
        <Text> a1 </Text>
      </View>
    );
  }
}
class a2 extends Component {
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
      <View>
        <Text> a2 </Text>

      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  
    {
  
  
      a1: {
        screen: a1,
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
      a2: {
  
        screen: a2,
  
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

    },
    {  
      initialRouteName: "a2",  
  
      shifting: false,
      animationEnabled: false,
      swipeEnabled: false,
      
     
     
    },  
  );
  const AppContainer = createAppContainer(TabNavigator)
  
  export default AppContainer;
  
  
  