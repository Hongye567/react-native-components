import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TabBar } from 'antd-mobile';
import Icon from 'react-native-vector-icons/Ionicons';

/* eslint global-require: 0 */

class AntTabBar extends Component {

	static navigationOptions = {
		title: '导航栏'
	};

  	constructor(props) {
    	super(props);
    	this.state = {
      		selectedTab: 'redTab',
      		hidden: false,
    	};
  	}

  	renderContent(pageText) {
    	return (
      		<View style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
        		<Text style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</Text>
        		<TextInput placeholder='请输入' />
  			</View>
    	);
  	}

  	componentWillMount() {
  		Icon.getImageSource('ios-home-outline', 100, '#949494').then((source) => this.setState({homeNormal: source}));
        Icon.getImageSource('ios-home-outline', 100, '#33A3F4').then((source) => this.setState({homeSelected: source}));
        Icon.getImageSource('ios-compass-outline', 100, '#949494').then((source) => this.setState({compassNormal: source}));
        Icon.getImageSource('ios-compass-outline', 100, '#33A3F4').then((source) => this.setState({compassSelected: source}));
        Icon.getImageSource('ios-list-box-outline', 100, '#949494').then((source) => this.setState({moreNormal: source}));
        Icon.getImageSource('ios-list-box-outline', 100, '#33A3F4').then((source) => this.setState({moreSelected: source}));
        Icon.getImageSource('ios-cube-outline', 100, '#949494').then((source) => this.setState({collectionNormal: source}));
        Icon.getImageSource('ios-cube-outline', 100, '#33A3F4').then((source) => this.setState({collectionSelected: source}));
  	}

  	render() {
    	return (
      		<TabBar
        		unselectedTintColor="#949494"
        		tintColor="#33A3F4"
        		barTintColor="white"
      		>
      			<TabBar.Item
          			icon={{uri: 'http://img2.3lian.com/2014/f2/27/d/91.jpg'}}
          			selectedIcon={{ uri: 'http://img2.3lian.com/2014/f2/27/d/91.jpg' }}
          			title="我的"
          			key="我的"
          			selected={this.state.selectedTab === 'yellowTab'}
          			onPress={() => {
            			this.setState({
              				selectedTab: 'yellowTab',
            			});
          			}}
        		>
          			{this.renderContent('我的')}
        		</TabBar.Item>
        		<TabBar.Item
	          		title="生活"
	          		key="生活"
	          		icon={this.state.homeNormal}
	          		selectedIcon={this.state.homeSelected}
	          		selected={this.state.selectedTab === 'blueTab'}
	          		badge={1}
	          		onPress={() => {
		            	this.setState({
		              		selectedTab: 'blueTab',
		            	});
	          		}}
	          		data-seed="logId"
        		>
          			{this.renderContent('生活')}
        		</TabBar.Item>
        		<TabBar.Item
          			icon={this.state.compassNormal}
          			selectedIcon={this.state.compassSelected}
          			title="口碑"
          			key="口碑"
          			badge={'new'}
          			selected={this.state.selectedTab === 'redTab'}
          			onPress={() => {
            			this.setState({
              				selectedTab: 'redTab',
            			});
          			}}
          			data-seed="logId1"
        		>
          			{this.renderContent('口碑')}
        		</TabBar.Item>
        		<TabBar.Item
          			icon={this.state.moreNormal}
			        selectedIcon={this.state.moreSelected}
          			title="朋友"
          			key="朋友"
          			selected={this.state.selectedTab === 'greenTab'}
          			onPress={() => {
            			this.setState({
              				selectedTab: 'greenTab',
            			});
          			}}
        		>
          			{this.renderContent('朋友')}
        		</TabBar.Item>
      		</TabBar>
    	);
  	}
}


export default AntTabBar;