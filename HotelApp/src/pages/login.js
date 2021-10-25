import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import api from '../services/api'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  AsyncStorage ,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useEffect } from "react/cjs/react.development";
 
export default function Login({route}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const image = { uri: "https://vejasp.abril.com.br/wp-content/uploads/2016/11/19078_orla-noturna-tadeu-nascimento.jpeg" };



  useEffect(() => navigation.setOptions({
    title: `Tela de login`
  }),[])
 
  function redirect (){
    navigation.navigate('Listing')
  }

  async function signIn() {
    let payload = { email, password }

    try {
       var response = await api.post("auth", payload);
       const user = response.data
       console.log(user)
       

       AsyncStorage.setItem("hs:token", response.data.token)
       //setAuth(response.status)
       redirect()
       
    } catch (err) {
       alert("Usuário ou senha inválidos")
       AsyncStorage.removeItem("hs:token")
       console.log(err)
    }
 }


  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={5}
        resizeMode='cover'>
     {/* <Image style={styles.image} source={require("./assets/icon.png")} />  */}
      <Text style={styles.header}>Login</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          autoCapitalize = 'none'
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <TouchableOpacity style={styles.loginBtn} onPress={ () => navigation.navigate('Signup')}>
        <Text style={styles.loginText}>Criar uma conta</Text>
      </TouchableOpacity>  */}

      <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
 
       
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474646",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    borderRadius: 30,
    width: "100%",
    height: "100%",
    
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"

  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
 
  forgot_button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#hsl(14, 97%, 57%)",
  },
 
  loginBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#hsl(14, 97%, 57%)",
   
  },
});