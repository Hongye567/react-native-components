import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ActionSheet, Button, Toast, Icon } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class AntActionSheet extends React.Component {

	constructor() {
		super();
	    this.state = {
		    clicked: 'none',
		    clicked1: 'none',
		    clicked2: 'none'
	    };
  	}

  	static navigationOptions = {
	    title: '动作面板',
	};

  	showActionSheet = () => {

    	const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    	ActionSheet.showActionSheetWithOptions({
      		options: BUTTONS,
      		cancelButtonIndex: BUTTONS.length - 1,
      		destructiveButtonIndex: BUTTONS.length - 2,
      		title: '标题',
      		message: '我是描述我是描述',
      		maskClosable: true,
      		'data-seed': 'logId',
      		wrapProps,
    	},
	    (buttonIndex) => {
	      	this.setState({ clicked: BUTTONS[buttonIndex] });
	    });
  	}

  	render() {
	    return (
	    	<View style={styles.actionSheetContainer}>
			    <View style={{ marginTop:3,marginBottom:3 }}>
			        <Button onClick={this.showActionSheet}>默认状态</Button>
			        <Text>{this.state.clicked}</Text>
			    </View>
	    	</View>
	    );
	}
}

const styles = StyleSheet.create({
	actionSheetContainer: {
		marginLeft: 6,
		marginRight: 6
	}
});


export default AntActionSheet;