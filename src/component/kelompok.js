import React from 'react';
import {View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

const Kelompok = () => {

	const deviceWidth = useWindowDimensions().width;
  	const deviceHeight = useWindowDimensions().height;
    
    const coba = (deviceWidth - 48 ) / 2;

    const widthJatuhTempo = (deviceWidth - 64 ) / 3;


  return (
    <View style={styles.container} >
      <ScrollView style={{ flex: 1, marginHorizontal: 16, marginVertical: 16 }} >
      	
      	<View style={{
      		marginTop: 51,
      	}} >
      		<View style={{
	      		flexDirection: 'row',
	      		marginTop: 16,
	      		justifyContent: 'space-between'  
      		}} >
	      	<View  style={{
	      		backgroundColor: '#FF6961',
	      		height: 80,
	      		width: coba,
	      		borderRadius: 12,
	      		paddingHorizontal: 16,
	      		paddingVertical: 16,
	      	}} >
	      		<Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white'  }} >Proposal</Text>
	      	</View>
	      	<View  style={{
	      		// backgroundColor: '#00DAFC',
            backgroundColor: '#FFD426',
	      		height: 80,
	      		width: coba,
	      		borderRadius: 12,
	      		paddingHorizontal: 16,
	      		paddingVertical: 16,
	      	}} >
	      	<Text style={{ fontWeight: 'bold', fontSize: 14, color: '#1C1C1E'  }} >Pendanaan</Text>
	      	</View>
      	</View>

      	<View style={{
      		flexDirection: 'row',
      		marginTop: 16,
      		justifyContent: 'space-between'  
      	}} >
	      	<View  style={{
	      		backgroundColor: '#30DB5B',
	      		height: 80,
	      		width: coba,
	      		borderRadius: 12,
	      		paddingHorizontal: 16,
	      		paddingVertical: 16,
	      	}} >
	      	<Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white'  }} >Verifikasi</Text>
	      	</View>
	      	<View  style={{
	      		backgroundColor: '#409CFF',
	      		height: 80,
	      		width: coba,
	      		borderRadius: 12,
	      		paddingHorizontal: 16,
	      		paddingVertical: 16,
	      	}} >
	      	<Text style={{ fontWeight: 'bold', fontSize: 14, color: '#F2F2F7'  }} >Waiting</Text>
	      	</View>
	    </View>
      	</View>


      	<View style={{
      		marginTop: 51,
      	}} >
      		<View style={{
      			flexDirection: 'row', 
      		}} >

      			<View
      				style={{
      					height: 92,
      					width: widthJatuhTempo,
      					backgroundColor: '#FF6961',
      					borderRadius: 12,
      					marginRight: 16,
      					alignItems: 'center' 
      				}}
      			>
      				<Text style={{ fontWeight: 'bold', marginTop: 60, fontSize: 14, color: '#F2F2F7'  }}>Tagihan</Text>
      			</View>

      			<View
      				style={{
      					height: 92,
      					width: widthJatuhTempo,
      					backgroundColor: '#FF6961',
      					borderRadius: 12,
      					marginRight: 16,
      					alignItems: 'center'
      				}}
      			>
      				<Text style={{ fontWeight: 'bold', marginTop: 60, fontSize: 14, color: '#F2F2F7'  }}>Menunggak</Text>

      			</View>

      			<View
      				style={{
      					height: 92,
      					width: widthJatuhTempo,
      					backgroundColor: '#FF6961',
      					borderRadius: 12,
      					alignItems: 'center'
      				}}
      			>
      				<Text style={{ fontWeight: 'bold', marginTop: 60, fontSize: 14, color: '#F2F2F7'  }}>Reminder</Text>

      			</View>

      		</View>
      	</View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		// backgroundColor: '#EFEFF4',
    backgroundColor: '#F2F2F7',
		flex: 1,
	}
});

export default Kelompok;