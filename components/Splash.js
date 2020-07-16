import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import Video from 'react-native-video'

console.disableYellowBox = true;
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // componentWillMount() {
    //     setTimeout(() => {
    //         this.props.navigation.navigate('welcome');
    //     }, 3000)
    // }
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    render() {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
          <Video source={require('D:/projects/react-native/new/shopping/image/Sisonke.mp4')}
                     backgroundColor='transparent'
                    style={{
                    width: normalize(320), height: normalize(230),
                     backgroundColor:'transparent',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             opacity: 1}}
                             muted={true}
                            //  repeat={true}
                          
                             resizeMode="cover"
                        
                             onEnd={() => this.props.navigation.navigate('welcome')}/>
          </View>
        
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: normalize(150), height: normalize(171),
     
    },
})
