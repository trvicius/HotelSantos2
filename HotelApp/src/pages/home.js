import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

  export default function Home({route}) {
    const navigation = useNavigation();
    
    useEffect(() => navigation.setOptions({
      title: `Home`
    }),[])


    return (
      <ImageBackground
        source={require('./background.png')}
        style={styles.background}
        blurRadius={5}
        resizeMode='cover'
      >
        <View>
           <Image
            source={require('./logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.text}>Travel with people. Make new friends.</Text>
          <TouchableOpacity 
            onPress={ () => navigation.navigate('Signup')}
          >
            <Text style={styles.signup} >Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => navigation.navigate('Login')}
          >
            <Text style={styles.login}>Entre aqui</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
    },
    text: {
      color: 'white',

      marginLeft: '20%'
    },
    signup: {
      backgroundColor: 'white',
      color: '#hsl(14, 97%, 57%)',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    },
    login: {
      backgroundColor: '#hsl(14, 97%, 57%)',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});