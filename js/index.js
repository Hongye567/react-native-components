import React from 'react';
import { 
	View, 
	StyleSheet, 
	ScrollView, 
	Text,
	InteractionManager 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from './components/Accordion';
import CellRow from './components/CellRow';
import JPushModule from 'jpush-react-native';

import AntActionSheet from './container/AntActionSheet/';
import RNActionSheet from './container/rnactionsheet/';
import AntModal from './container/AntActionSheet/AntModal';
import SwiperDemo from './container/carousel/Swiper';
import AntCarousel from './container/carousel/AntCarousel';
import LocaleProviderDemo from './container/internationa/LocaleProviderDemo';
import AntTabBar from './container/navigation/AntTabBar';
import StacksInTabs from './container/navigation/StacksInTabs';
import AntToast from './container/toast/AntToast';
import CheckBoxDemo from './container/checkbox/CheckBoxDemo'; 
import JPush from './container/push/JPush';
import MultiCropDemo from './container/image_picker/MutiCropDemo';

class MainPage extends React.Component {

	static navigationOptions = {
		title: '组件'
	};

	_nextPage(index) {
		const { navigate } = this.props.navigation;
		switch(index) {
			case 0:
				navigate('AntActionSheet');
				break;
			case 1:
				navigate('RNActionSheet');
				break;
			case 2:
				navigate('AntModal');
				break;
			case 3:
				navigate('Swiper');
				break;
			case 4:
				navigate('AntCarousel');
				break;
			case 5:
				navigate('LocaleProvider');
				break;
			case 6:
				navigate('AntTabBar');
				break;
			case 7:
				navigate('StacksInTabs');
				break;
			case 8:
				navigate('AntToast');
				break;
			case 9:
				navigate('CheckBoxDemo');
				break;
			case 10:
				navigate('JPush');
				break;
			case 11:
				navigate('MultiCropDemo');
				break;
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Accordion title="操作反馈 Feedback"
				        expanded={true}> 
				        <CellRow title="AntActionSheet (动作面板)" segmentColor="#fff" onPress={this._nextPage.bind(this,0)}/>
						<CellRow title="RNActionSheet (动作面板)" segmentColor="#fff" onPress={this._nextPage.bind(this,1)}/>
			        </Accordion>
			        <Accordion title="Data Entry">
			        	<CellRow title="ImagePicker (图片选择)" segmentColor="white" onPress={this._nextPage.bind(this,11)}/>
			        </Accordion>
			        <Accordion title="数据展示 Data Display">
			        	<CellRow title="Swiper (轮播)" segmentColor="white" onPress={this._nextPage.bind(this,3)}/>
						<CellRow title="AntCarousel (走马灯)" segmentColor="white" onPress={this._nextPage.bind(this,4)}/>
						<CellRow title="CheckBox (复选框)" segmentColor="white" onPress={this._nextPage.bind(this,9)}/>
			        </Accordion>
			        <Accordion title="操作反馈 Feedback">
			        	<CellRow title="AntModal (对话框)" segmentColor="white" onPress={this._nextPage.bind(this,2)}/>
			        	<CellRow title="Toast (轻提示)" segmentColor="white" onPress={this._nextPage.bind(this,8)}/>
			        </Accordion>
			        <Accordion title="导航 Navigation">
			        	<CellRow title="AntTabBar (导航栏)" segmentColor="white" onPress={this._nextPage.bind(this,6)}/>
			        	<CellRow title="StacksInTabs " segmentColor="white" onPress={this._nextPage.bind(this,7)}/>
			        </Accordion>
			        <Accordion title="其他 Others">
			        	<CellRow title="国际化组件 (仅Ant Design)" segmentColor="white" onPress={this._nextPage.bind(this,5)}/>
			        </Accordion>
			        <Accordion title="推送 push">
			        	<CellRow title="极光推送 (JPush)" segmentColor="white" onPress={this._nextPage.bind(this,10)}/>
			        </Accordion>
				</ScrollView>
			</View>
		);
	}

	componentDidMount() {
		console.log("主页-->componentDidMount");
		JPushModule.notifyJSDidLoad();
		JPushModule.addReceiveOpenNotificationListener((map) => {
      		console.log("主业点击通知：" + JSON.stringify(map));
      		this._nextPage(10);
    	});
	}
	componentWillMount() {
		console.log("主页-->componentWillMount");
	}
	componentWillUnmount() {
		console.log("主页-->conponentWillUnmount");
		JPushModule.removeReceiveCustomMsgListener();

    	JPushModule.removeReceiveNotificationListener();

    	//JPushModule.removeOpenNotificationListener();

    	JPushModule.clearAllNotifications();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f7f7f7'
	}
});

const MyApp = StackNavigator({
	MainPage: { screen: MainPage },
	AntActionSheet: { screen: AntActionSheet },
	RNActionSheet: { screen: RNActionSheet },
	AntModal: { screen: AntModal },
	Swiper: { screen: SwiperDemo },
	AntCarousel: { screen: AntCarousel },
	LocaleProvider: { screen: LocaleProviderDemo },
	AntTabBar: { screen: AntTabBar },
	StacksInTabs: { screen: StacksInTabs },
	AntToast: { screen: AntToast },
	CheckBoxDemo: { screen: CheckBoxDemo },
	JPush: { screen: JPush },
	MultiCropDemo: { screen: MultiCropDemo }
});

export default MyApp;
