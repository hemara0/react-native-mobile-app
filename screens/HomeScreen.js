import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';
import Ionic from "react-native-vector-icons/Ionicons";

const IconSize = 24;

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
	return (
		<Surface style={[styles.header, { backgroundColor: 'white' }]}>
	
			<TitleView />
      <RightView />
		</Surface>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	header: {
		height: 150,
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
	}
})