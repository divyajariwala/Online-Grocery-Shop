import React, { Component } from 'react';

import Splash from './components/Splash'
import Welcome from './components/welcome'
import Welcome1 from './components/welcome1'
import Product from './components/product'
import About from './components/About'
import Contactus from './components/ContactUs'
import Signup from './components/SignUp'
import Signup2 from './components/SignUp2'
import Customer from './components/customer'
import Search from './components/search'

import Shop from './components/shop'
import shop1 from './components/shop1'
import Wallet from './components/wallet1'
import Profile from './components/profile1'
import Ordernav from './components/ordernav'

import Login from './components/login'
import Verifyuser from './components/verifyuser'
import howitworks from './components/howitworks'
import Agent from './components/Agent'
import Agentcustomernav from './components/agentcustomernav'
import Agentprofilenav from './components/agentprofilenav'
import Agentwalletnav from './components/agentwalletnav'
import Agentshopnav from './components/agentshop'
import Agentordernav from './components/agentorder'
import Termsofservice from './components/termsofservice'
import Privacypolicy from './components/privacypolicy'
import Refundpolicy from './components/refundpolicy'
import Settings from './components/settings'
import vsignup from './components/verifysignupuser'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import a from './components/a'
import a1 from './components/a1'
import a2 from './components/a2'
import shop123 from './components/shop123'
import profile123 from './components/profile123'
import message123 from './components/message123'
import wallet123 from './components/wallet123'
import order123 from './components/order123'
import customer123 from './components/customer123'

import Messages from './components/messages1'
import Profile1 from './components/MyProfile1'

const RootStack = createStackNavigator(
  {

agentcustomernav:Agentcustomernav,
agentprofilenav:Agentprofilenav,
agentshopnav:Agentshopnav,
agentordernav:Agentordernav,
agentwalletnav:Agentwalletnav,

    splash: Splash,
    welcome:Welcome,
    product:Product,
    about:About,
    welcome1:Welcome1,
    contactus:Contactus,
    search:Search,
    signup:Signup,
    signup2:Signup2,

    customer:Customer,
    shop1:Shop,
    shop:Shop,
    login:Login,
    verifyuser:Verifyuser,
    wallet:Wallet,
  ordernav:Ordernav,
    messages:Messages,
    profilenav:Profile,
    howitworks:howitworks,
    termsofservice:Termsofservice,
    privacypolicy:Privacypolicy,
    refundpolicy:Refundpolicy,
    agent:Agent,
    settings:Settings,
    Vsignup:vsignup,


customer123:customer123,
profile123:profile123,
wallet123:wallet123,
message123:message123,
order123:order123,
shop123:shop123,
a:a,
a1:a1,
a2:a2,

  },
  {
    initialRouteName: 'splash'
  },

)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    )
  }
}