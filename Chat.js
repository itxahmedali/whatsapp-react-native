import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import io from 'socket.io-client';
export default function ChatScreen() {
  const [socket, setSocket] = useState(io('http://192.168.100.20:3000'));
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    socket.on('message', (message)=>{
      setMessageList(oldValue => [...oldValue, JSON.parse(message)]);
    })
  }, []);

  function sendMessage() {
    socket.emit('message', {message:message, recieverId: 1, sennderId: 2})
  }
  const [message, setMessage] = useState();
  return (
    <View style={style.container}>
      <View style={style.MessageBox}>
      <FlatList
        data={messageList}
        renderItem={({item})=>(
          <Text style={style.recieveMessage}>{item.message}</Text>
        )}
      />
      </View>
      <View style={style.messageInput}>
        <TextInput
          autoCorrect={false}
          style={style.textInput}
          onChangeText={(e)=>{setMessage(e)}}
         ></TextInput>
        <TouchableOpacity style={style.sendButton} onPress={()=>sendMessage()}>
          <Text style={style.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  sendButtonText:{
    color:"#fff"
  },
  sendButton:{
    backgroundColor:"#000",
    padding:15,
    position:"absolute",
    bottom:0,
    right:0,
  },
  messageInput:{
    width:"100%",
    position:"absolute",
    bottom:0
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  MessageBox: {},
  recieveMessage: {
    color: '#fff',
    padding: 10,
  },
  sendMessage: {
    color: '#fff',
    marginLeft: 'auto',
    padding: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: '#000',
  },
});
