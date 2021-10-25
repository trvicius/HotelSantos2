import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import api from '../services/api'
import { useNavigation } from '@react-navigation/native';

const Rooms = ({updateList, ...props}) => {

  const { img,
    location,
    title,
    description,
    star,
    price,
    total,
    id } = props.data
    

  async function getReserva() {
    const response = await api.patch(`room/${id}`, []);
    console.log(response)
    if (response.status == 200) {
      
      alert(`${title} reservado com sucesso!`)
      updateList()
    }

  }


  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: img }} />
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <Text style={styles.estrelas}>Estrelas: {star}</Text>
        <Text style={styles.preco}>R$ {price}</Text>
        <TouchableOpacity style={styles.fazerReserva} onPress={() => getReserva()}>
          <Text style={styles.reservaText}>Fazer Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>)
}


const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  image: {
    width: 385,
    height: 200,
  },
  titulo: {
    fontSize: 25,
    fontWeight: '400',
    color: "#hsl(14, 97%, 57%)",
  },
  descricao: {
    fontSize: 15,
    color: 'grey'
  },
  location: {
    fontSize: 15,
    color: 'grey'
  },
  estrelas: {
    fontSize: 15
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  fazerReserva: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#hsl(14, 97%, 57%)",

  },
  reservaText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Rooms;
