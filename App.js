
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
  AppIcon,
  Logout,
} from './assets';

import Kelompok from './src/component/kelompok';

const { width, height} =  Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();



const Jobs = () => {
  return (
    <View>
      <Text>Job</Text>
    </View>
  );
}



const App = () => {
  return (
    <>
      <View style={styles.container}>
       <StatusBar barStyle='dark-content' backgroundColor='#F2F2F7' />
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity>
            <Image source={AppIcon} style={styles.logo} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              {/*<Text>
                Hello
                <Text style={{fontWeight: 'bold'}}>
                {' '}Admin
                </Text>
              </Text>*/}
              <TouchableOpacity
                // style={{marginLeft: 20}}
                onPress={() => alert()}>
                 <Image style={{...styles.logo, borderRadius: 30}} source={require('./assets/images/boy.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        <View style={{ marginHorizontal: 16, marginTop: 24 }} >
          <Text>
            <Text style={{ fontSize: 18 }} >Hello,</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold'}} >
            {' '}Barnabas !
            </Text>
          </Text>
        </View>

        <Kelompok />

        {/*<NavigationContainer>
          <Tab.Navigator
             initialRouteName='Profil'
             tabBarPosition='top'
              
             tabBarOptions={{
                upperCaseLabel:false,
                showIcon: true,
                activeTintColor:'white',
                inactiveTintColor:'black',
                labelStyle: { fontSize: 14,  textTransform: 'none', fontWeight: '700'},
                tabStyle: {
                  paddingTop: 0,
                  paddingBottom: 90,
                  borderRadius: 12,
                },
                 indicatorStyle: {
                  height: 30,
                  backgroundColor: '#FF2C14',
                  borderRadius: 12,
                },
                style: {  
                  backgroundColor: '#EEEEEE', 
                  marginTop: 20,
                  borderRadius: 12,
                  height: 30,
                  marginLeft: 80,
                  marginRight: 80,
                },
              }}
          >
            <Tab.Screen name="Profile" component={Kelompok} 
              options={{ 
                tabBarLabel: 'Profile',

              }}
            />
            <Tab.Screen name="Jobs" component={Jobs} 
              options={{ tabBarLabel: 'Jobs' }}
            />
          </Tab.Navigator>
        </NavigationContainer>*/}

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  logo: {
    height: 30,
    width: 30,
  },
  bell: {
    height: 20,
    width: 20,
  },
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
});

export default App;
