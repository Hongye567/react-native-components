import React, {Component} from 'react';
import {
	AppRegistry,
	View,
	Image,
	StyleSheet,
	Button
} from 'react-native';
import {TabNavigator} from 'react-navigation';

class HomeScreen extends Component {
	static navigationOptions = {
		tabBarLabel: '首页',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('./icon_me.png')}
				style={[styles.icon, {tintColor: tintColor}]} />
		),
	}

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="Go to notifications" />
		);
	}
}

class NotificationsScreen extends Component {
	static navigationOptions = {
		tabBarLabel: '消息',
		tabBarIcon: ({tintColor}) => (
			<Image 
				source={require('./icon_me.png')}
				style={[styles.icon, {tintColor: tintColor}]} />	
		),
	}

	render() {
		return (
			<Button 
				onPress={() => this.props.navigation.goBack()}
				title="Go back home" />
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
});

const MyApp = TabNavigator({
	Home: {
		screen: HomeScreen,
	},
	Notifications: {
		screen: NotificationsScreen,
	},
}, {
	swipeEnabled: false,
	lazy: true,
	tabBarOptions: {
		activeTintColor: '#e91e63',
		showIcon: true,
		indicatorStyle: {
			height:0,
		},
		style: {
			backgroundColor: '#656B68',
			height: 40,
		},
	},
	tabBarPosition: 'bottom',
});

// AppRegistry.registerComponent('AntDemo', () => MyApp);