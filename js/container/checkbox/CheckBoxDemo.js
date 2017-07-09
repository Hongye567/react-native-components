import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Checkbox as AntCheckBox } from 'antd-mobile';
import RNCheckBox from 'react-native-check-box';


const CheckBoxItem = AntCheckBox.CheckBoxItem;
const AgreeItem = AntCheckBox.AgreeItem;

class CheckBoxDemo extends Component {

	static navigationOptions = {
		title: 'CheckBox 复选框'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<RNCheckBox
					style={styles.checkbox}
					isChecked={true}
					rightText="复选框"
					onClick={ () => {} }
					rightTextStyle={styles.label} />
				<CheckBoxItem
					key="checkbox"
					onChange={() => {}}>
					Ant Design
				</CheckBoxItem>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	checkbox: {
		padding: 10
	},
	label: {
		color: '#3f3f3f',
		fontSize: 16
	}
});


export default CheckBoxDemo;