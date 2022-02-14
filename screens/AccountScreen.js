import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title, useTheme } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';
import Ionic from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";

const IconSize = 24;
const Action = ({icon, title, screen}) => {
  const {colors} = useTheme();
  return(
    <View style = {styles.action} row aCenter space ={'between'}>
    <View row aCenter>
      <View style = {styles.iconContainer} center color = {colors.primaryLight}>
        <Icon name ={icon} size = {22} color = {colors.primaryLight}></Icon>
      </View>
      <Text style = {styles.actionTitle} title3>
        {title}
      </Text>
    </View>
    </View>
  )
}
const AppHeader = () => {
  const RightView = () => (
			<View style={[styles.view, styles.rightView]}>
				{<TouchableOpacity style={styles.rowView}>
					<Ionic name='cart' size={IconSize} color={Colors.black} />
					{<Badge style={{ position: 'absolute', top: -5, right: -10 }}></Badge>}
				</TouchableOpacity>}
				{<TouchableOpacity>
					<Ionic name='filter' size={IconSize} color = {Colors.black} />
				</TouchableOpacity>}
			</View>
  )
	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={{ color: 'black' }}>RentaBook</Title>
		</View>
	)
  const Profile = () => (
    <ScrollView
    showsVerticalScrollIndicator = {false}
    contentContainerStyle = {{paddingButton: 29}}>
      <View style = {styles.profileInfos} row aCenter>
        <View style = {styles.image}/>
        <View style = {styles.nameSection}>
          <Text username >Hema </Text>
          <Text body>hemarao0919@gmail.com</Text>
        </View>
      </View>
      <View style = {styles.actions}>
        <Action title = {'Edit profile'} icon = {'edit'}/>
        <Action title = {'My Orders'} Ionic = {'history'}/>
        <Action title = {'Address'} Ionic = {'location-sharp'}/>
      </View>

    </ScrollView>
  )
	return (
    <SafeAreaView style = {styles.container}>
      <Surface style={[styles.header, { backgroundColor: 'white' }]}>
    <TitleView />
    <RightView />
  </Surface>
      <Profile />
    </SafeAreaView>
		
  )
  
}

export default AppHeader

const styles = StyleSheet.create({
	header: {
		height: 100,
		elevation: 8,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.white,
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleView: {
		flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 30,
    fontSize: 40
	},
	rightView: {
    flex: 1,
		justifyContent: 'flex-end',
    justifyContent: 'space-evenly'
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},
  container: { 
    flex: 1,
    backgroundColor: 'white'
  },
  profileInfos:{
    marginTop:16,
    paddingHorizontal:29
  },
  image:{
    width: 120,
    height:
    120,
    borderRadius: 60,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#dcdcdc',
  },
  nameSection:{
  marginLeft: 40,
  },
  action:{
    marginTop:29,
    paddingHorizontal:29

  },
  iconContainer:{
    width: 40,
    height: 40,
    borderRadius:6
  },
  actionTitle:{
    marginLeft:19,

  }
})