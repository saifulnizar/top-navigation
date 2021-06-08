/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, 
  Image,
  Dimensions
} from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {
  Bell,
  Logo,
  RedBell,
  Plus,
  Active,
  Waiting,
  Failed,
  Prio,
  WaitingActive,
  Prio1,
  FailedActive,
  Logout,
} from './assets';

const { width, height} =  Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}


const Jobs = () => {
  return (
    <View>
      <Text>Jobs</Text>
    </View>
  );
}

const Events = () => {
  return (
    <View>
      <Text>Events</Text>
    </View>
  );
}

const Hrd = () => {
  return (
    <View>
      <Text>HRD</Text>
    </View>
  );
}


const App = () => {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Image source={Logo} style={styles.logo} />
            <View style={{flexDirection: 'row'}}>
              <Text>
                Hello
                <Text style={{fontWeight: 'bold'}}>
                {' '}Admin
                </Text>
              </Text>
              <TouchableOpacity
                style={{marginLeft: 20}}
                onPress={() => alert()}>
                 <Image style={styles.bell} source={Logout} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        <NavigationContainer>
          <Tab.Navigator
            // tabBar={props => <MyTabBar {...props} />}
             initialRouteName='Jobs'
             tabBarPosition='top'
              
             tabBarOptions={{
                upperCaseLabel:false,
                showIcon: true,
                // activeTintColor:'black',
                // inactiveTintColor:'#D9D8DD',
                labelStyle: { fontSize: 14,  textTransform: 'none'},
                tabStyle: {
                  paddingTop: 0,
                  paddingBottom: 20,
                  borderRadius: 20
                  // backgroundColor: 'powderblue'
                },
                 indicatorStyle: {
                  // opacity: 0
                  height: 30,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  // marginLeft: 18,
                  // width: 80
                },
                style: { 
                  backgroundColor: '#D9D8DD', 
                  marginTop: 15,
                  borderRadius: 20,
                  height: 30,
                  marginLeft: 10,
                  marginRight: 10,
                },
              }}
          >
            <Tab.Screen name="Profile" component={Profile} 
              options={{ 
                tabBarLabel: 'Profile',

              }}
            />
            <Tab.Screen name="Jobs" component={Jobs} 
              options={{ tabBarLabel: 'Jobs' }}
            />
            <Tab.Screen name="Events" component={Events} 
              options={{ tabBarLabel: 'Events' }}
            />
            <Tab.Screen name="Hrd" component={Hrd} 
              options={{ tabBarLabel: 'HRD' }}
            />
          </Tab.Navigator>
        </NavigationContainer>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 40,
    width: 40,
  },
  bell: {
    height: 20,
    width: 20,
  },
  container: {
    backgroundColor: '#efeff4',
    flex: 1,
    paddingTop: 10,
    position: 'relative',
  },
});

export default App;
