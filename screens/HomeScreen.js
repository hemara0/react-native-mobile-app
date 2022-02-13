import {StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Surface,Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionic from "react-native-vector-icons/Ionicons";
import Colors from '../constants/Colors';
const IconSize = 30;
const HomeScreen = () => {
  return (
        <Surface style = {styles.header}>
            <View style = {styles.view}>
              <Title>Rentabook </Title>
            </View>
            <View style = {styles.view, styles.rightView}>
              { <TouchableOpacity>
                <Ionic name = 'filter' size = {IconSize} color = {Colors.black}/>
                </TouchableOpacity>}
                </View>
                <View style = {styles.view, styles.rightView}>
            { <TouchableOpacity>
                <Ionic name = 'cart' size = {IconSize} color = {Colors.black}/>
                </TouchableOpacity>}
            </View>
        </Surface>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  header:{
    height: 100,
    elevation: 4,  
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,

  },
  view:{
    
    backgroundColor: 'white',
    margin: 30,
    alignItems: 'center',
    flexWrap: "wrap"
  },
  rightview:{
  justifyContent: 'space-evenly',
  flex: 1,
  }
}
)