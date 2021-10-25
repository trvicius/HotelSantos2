import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
import api from '../services/api'
import Rooms from './rooms';

const Listing = (props) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  async function getRooms() {
    const response = await api.get('rooms?reservado=true');
    setRooms(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getRooms()
  }, [])

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    )
  } else {
    return (
      <View style={styles.container} >
        <FlatList
          data={rooms}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Rooms data={item} updateList={() => getRooms()} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Listing;
