import React, {useState} from 'react';
import Styles from './Style';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { auth } from './Firebase';

export default function Home(props) {
  return (
    <View style={{backgroundColor: '#f5f5f5', height: '100%'}}>
      <View style={{backgroundColor: 'white',flexDirection:"row",justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image
            style={{width: 30, height: 30, margin: 10}}
            source={require('../src/Img/list.png')}
          />
        </TouchableOpacity>
        <Text style={{color:"black",margin:10}}>{auth.currentUser?.email}</Text>
      </View>
      <View style={Styles.containerhome}>
        <TouchableOpacity
          style={Styles.Btn}
          onPress={() => props.navigation.push('Mess')}>
          <View style={Styles.frommess}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63.5,
                  height: 63.5,
                  borderWidth: 1,
                  borderRadius: 34,
                  marginRight: 5,
                }}>
                <Image
                  style={{
                    width: 61,
                    height: 61,
                    borderRadius: 34,
                    borderWidth: 1,
                    padding: 20,
                  }}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrgOoXGy7Mvkf6WE4vh4QoM3IusGEwlRzQw&usqp=CAU',
                  }}
                />
              </View>
              <Image
                source={require('../src/Img/new-moon.png')}
                style={{width: 18, height: 18, position: 'absolute'}}
              />
              <View style={{marginLeft: '3%'}}>
                <Text style={Styles.textBtn}>Tài khoản A</Text>
                <Text style={Styles.textmesBtn}>
                  Xin chào lại là Chao đây !
                </Text>
              </View>
            </View>
            <Image
              source={require('../src/Img/menu.png')}
              style={{width: 30, height: 30, marginTop: 15}}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={Styles.Btn}
          onPress={() => props.navigation.push('Mess')}>
          <View style={Styles.frommess}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63.5,
                  height: 63.5,
                  borderWidth: 1,
                  borderRadius: 34,
                  marginRight: 5,
                }}>
                <Image
                  style={{
                    width: 61,
                    height: 61,
                    borderRadius: 34,
                    borderWidth: 1,
                    padding: 20,
                  }}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrgOoXGy7Mvkf6WE4vh4QoM3IusGEwlRzQw&usqp=CAU',
                  }}
                />
              </View>
              <Image
                source={require('../src/Img/new-moon.png')}
                style={{width: 18, height: 18, position: 'absolute'}}
              />
              <View style={{marginLeft: '3%'}}>
                <Text style={Styles.textBtn}>Tài khoản A</Text>
                <Text style={Styles.textmesBtn}>
                  Xin chào lại là Chao đây !
                </Text>
              </View>
            </View>
            <Image
              source={require('../src/Img/menu.png')}
              style={{width: 30, height: 30, marginTop: 15}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
