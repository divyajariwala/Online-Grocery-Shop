import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, BackHandler, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import normalize from 'react-native-normalize'
import SearchInput from 'react-native-search-filter';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
export default class search extends Component {
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
                        dataSource: response.data.data
                        
                    },
                    function() {
                        this.arrayholder = response.data.data;
                      } )
                
                    

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
        };
        this.arrayholder=[];
    }
    static navigationOptions = {

        header: null,
    };
    searchproduct=(search)=>
    {
      const newData = this.arrayholder.filter(function(item) {
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
                        <Text style={styles.text1} onPress={() => this.props.navigation.navigate('product')}> Back </Text>
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
                            <View style={{margin: hp(2),}}>
                                <Image source={{ uri: item.image }} style={{ height: normalize(150), width: normalize(150), marginLeft: hp(2) }}></Image>
                                <Text style={{ fontSize: hp(2), fontFamily: "Lato-Bold", color: "#111111", textAlign: 'center' }} >{item.name}</Text>
                            </View>
                        }
                    >

                    </FlatList>
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
    }
})