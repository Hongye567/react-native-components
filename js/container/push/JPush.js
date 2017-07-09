import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


class JPush extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: "极光推送"
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			customMsg: {},
			notification: {}
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.pushContainer}>
					<Text style={styles.subTitle}>通知：</Text>
					<View style={styles.content}>
						<Text style={styles.item}>推送内容：{this.state.notification.alertContent || ''}</Text>
						<Text style={styles.item}>附加内容：{this.state.notification.extras || ''}</Text>
					</View>
				</View>
				<View style={styles.pushContainer}>
					<Text style={styles.subTitle}>自定义消息：</Text>
					<View style={styles.content}>
						<Text style={styles.item}>推送内容：{this.state.customMsg.message || ''}</Text>
						<Text style={styles.item}>附加内容：{this.state.customMsg.extras || ''}</Text>
					</View>
				</View>
				<Button
					title="跳转"
					onPress={ () => {
						this.props.navigation.navigate('Second')
					}} />
			</View>
		);
	}

	componentDidMount() {
		console.log("此页-->componentDidMount");
	}

	componentWillUnmount() {
		console.log("此页-->componentWillUnmount");
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	pushContainer: {
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		margin: 20
	},
	content: {
		padding: 20,
		paddingTop: 10,
		borderColor: '#ccc',
		borderTopWidth: 1
	},
	subTitle: {
		padding: 10
	},
	item: {
		lineHeight: 30
	}
});


export default JPush;