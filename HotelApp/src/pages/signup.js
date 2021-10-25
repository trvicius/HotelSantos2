import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { useNavigation, StackActions } from '@react-navigation/native';
import api from '../services/api'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";


export default function Signup( {route} ){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const image = { uri: "https://vejasp.abril.com.br/wp-content/uploads/2016/11/19078_orla-noturna-tadeu-nascimento.jpeg" };
  const navigation = useNavigation();
  
  useEffect(() => navigation.setOptions({
    title: `Tela de Cadastro`
  }),[])


  async function handleSubmit() {
    let payload = {email, password}

    var response = await api.post("users", payload);

    console.log(response);
    
    
    setUsers(response.data)
    navigation.navigate('Login')
}

  return (
    <View style={styles.container}>
    <ImageBackground source={image} 
    resizeMode="cover" 
    style={styles.image} 
    blurRadius={5}
    >    
     {/* <Image style={styles.image} source={require("./assets/icon.png")} />  */}
      <Text style={styles.header}>Registro</Text>
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
 
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Criar conta</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Cancelar</Text>
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