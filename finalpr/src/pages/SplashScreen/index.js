/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Image source={{uri: 'https://drive.google.com/uc?export=view&id=1p2iss57glarBWqtdfepo4L4rXvuTz3p9'}}
      style = {{width : 50, height:50}}/>
      <Text style={style.name}> INVENTORA </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {backgroundColor: '#C6D0E7',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
name: {fontSize:24, fontWeight: 'bold', color:'#D158A8', marginTop:10},
});

export default SplashScreen;
