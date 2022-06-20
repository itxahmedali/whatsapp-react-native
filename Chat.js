import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
// const io = require("socket.io-client");
import io from "socket.io-client";

export default function ChatScreen() {
  // const socketRef = useRef();
  useEffect(() => {
    return()=>{
     const socket = io.connect("http://10.0.2.23000");
      // socketRef.current.disconnect();
      socket.on('connect', () => {
        console.log('connected')
     });
     
    }
  }, [])
  
  return (
    <View style={style.container}>
      <View style={style.MessageBox}>
        <Text style={style.recieveMessage}>Hello i'm messsage</Text>
        <Text style={style.sendMessage}>Hello i'm messsage</Text>
      </View>
      <TextInput style={style.textInput}></TextInput>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  MessageBox:{

  },
  recieveMessage:{
    color:"#fff",
    padding:10
  },
  sendMessage:{
    color:"#fff",
    marginLeft:"auto",
    padding:10
  },
  textInput:{
    backgroundColor:'#fff',
    position:'absolute',
    bottom:0,
    width:'100%',
    color:'#000'
  }
});