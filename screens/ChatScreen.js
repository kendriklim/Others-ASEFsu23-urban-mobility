import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet,KeyboardAvoidingView} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Heyy, just next to the platform 3.',

        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://c8.alamy.com/comp/JAM81P/beautiful-muslim-woman-in-hijab-closing-her-eyes-vector-flat-icon-JAM81P.jpg',
        },
      },
      {        text: 'Hey where are you?',

        _id: 2,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://c8.alamy.com/comp/JAM81P/beautiful-muslim-woman-in-hijab-closing-her-eyes-vector-flat-icon-JAM81P.jpg',
        },
      },
      
    ]);
  }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages),
//     );
//   }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#f0ada4"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#f0ada4',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

//   const scrollToBottomComponent = () => {
//     return(
//       <FontAwesome name='angle-double-down' size={22} color='#f0ada4' />
//     );
//   }

  return (
   
    <GiftedChat
      messages={messages}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    /> 
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});