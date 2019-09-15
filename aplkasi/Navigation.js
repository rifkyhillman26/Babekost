import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { Image } from 'react-native'
import Profile from './Profile'
import Home from './Home'
import Wishlist from './Wishlis/Wishlist'


const menu = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Wishlist: {
        screen: Wishlist,
    },
    Profile: {
        screen: Profile,
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: 'yellow',
        style: {
            backgroundColor: '#424242'
        }
    },
    
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Home') {
            return (
              <Image
                source={ require('../image/house.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Wishlist') {
            return (
              <Image
                source={ require('../image/folder.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Profile') {
            return (
              <Image
                source={ require('../image/user.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else {
            return (
              <Image
              source={ require('../image/house.png') }
                style={{ width: 20, height: 20 }} />
            );
          }
        },
      }),
})


export default createAppContainer(menu)