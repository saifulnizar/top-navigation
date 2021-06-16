import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Kelompok = () => {
  return (
    <View style={styles.container} >
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#EFEFF4',
		flex: 1,
	}
});

export default Kelompok;