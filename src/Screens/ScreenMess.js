import React, {useState,useCallback,useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GiftedChat} from 'react-native-gifted-chat'
import Style from '../Style';
import { auth, db } from '../Firebase';
import{doc, setDoc,} from 'firebase/firestore'

export default function ScreenMess(props) {
  const [Mess, setMess] = useState([])
  const Messages = db.collection('messages')


  useEffect(() => {
    // db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //   setMess(snapshot.docs.map(doc => doc.data()))
    // })
    // const unsud = Messages.onSnapshot(napshot => {
    //   const messfiretore = napshot
    //   .docChanges()
    //   .filter(({type}) => type === 'added')
    //   .map(({doc})=>{
    //     const message = doc.data()
    //     return{...message, createdAt : message.createdAt.toDate()}
    //   })
    //   .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())
    //   setMess(messfiretore)
    // })
    setMess([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          
        },
      },
    ],)

  }, [])
  
  const Data = [
    {
      iduser: 1,
      title: 'hello xin chao' ,
    },
    {
      iduser: 2,
      title: 'Hello chao nhe',
    },
    {
        iduser: 2,
        title: 'hello xin chao' ,
      },
      {
        iduser: 1,
        title: 'Hello chao nhe',
      },
      {
        iduser: 2,
        title: 'hello xin chao' ,
      },
      {
        iduser: 1,
        title: 'Hello chao nhe',
      },
      {
          iduser: 2,
          title: 'hello xin chao' ,
        },
        {
          iduser: 1,
          title: 'Hello chao nhe',
        },
        {
            iduser: 2,
            title: 'Hello chao nhe',
          },
          {
              iduser: 2,
              title: 'hello xin chao' ,
            },
            {
              iduser: 1,
              title: 'Hello chao nhe',
            },
            {
              iduser: 2,
              title: 'hello xin chao' ,
            },
            {
              iduser: 1,
              title: 'Hello chao nhe',
            },
            {
                iduser: 2,
                title: 'hello xin chao' ,
              },
              {
                iduser: 1,
                title: 'Hello chao nhe',
              },
  ];


  const [Textmess, setTextmess] = useState('');
  const [Height, setHeight] = useState(0);

   const onSend = useCallback((Mess = []) => {
     setMess(previousmess =>  GiftedChat.append(previousmess, Mess))
     const {
       _id,createdAt,text,user
     }= Mess[0]
     db.collection('Chats').add({
      _id,createdAt,text,user
     }
     )
    console.log(Mess[0])
   },[])

  return (
    <SafeAreaView>
      <View style={Style.containerMess}>
        <View>
          <View style={Style.from_title}>
            <View style={Style.From_title}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../Img/left.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 30, marginRight: 5}}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    borderWidth: 1,
                    padding: 20,
                  }}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrgOoXGy7Mvkf6WE4vh4QoM3IusGEwlRzQw&usqp=CAU',
                  }}
                />
              </TouchableOpacity>

              <View>
                <Text style={Style.NameAccount}>Tài khoản A</Text>

                <View style={Style.From_title}>
                  <Image
                    style={{width: 10, height: 10, margin: 5}}
                    source={require('../Img/new-moon.png')}
                  />
                  <Text Style={Style.ActiveAccount}>đang trực tuyến</Text>
                </View>
              </View>
            </View>

            <View style={[Style.From_title, {margin: 10}]}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginEnd: 15}}
                  source={require('../Img/phone.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginEnd: 10}}
                  source={require('../Img/video-call.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{backgroundColor:"white",marginTop:15,height:'90%'}}>
          <GiftedChat
        messages={Mess}
        showUserAvatar = {true}
        showAvatarForEveryMessage = {false}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          
        }}
      />
          
          </View>
          {/* <GiftChat></GiftChat> */}
        </View>

        {/* <View style={Style.from_mess}>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, margin: 5}}
              source={require('../Img/add-button.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, margin: 5}}
              source={require('../Img/image-gallery.png')}
            />
          </TouchableOpacity>

          <TextInput
            multiline={true}
            onChangeText={text => {
              setTextmess(text);
            }}
            onContentSizeChange={even => {
              setHeight(even.nativeEvent.contentSize.height);
            }}
            style={[Style.Inputmess, {height: Math.max(30, Height)}]}
            value={Textmess}
          />
          <TouchableOpacity onPress={() => send()}>
            <Image
              style={{width: 30, height: 30, margin: 5}}
              source={require('../Img/send-message.png')}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
