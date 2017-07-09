import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const prompt = Modal.prompt;
const alert = Modal.alert;
const operation = Modal.operation;

const showAlert = () => {
	const alertInstance = alert('删除', '确定删除么???', [
	    { text: 'Cancel', onPress: () => Toast.info('cancel',1), style: 'default' },
	    { text: 'OK', onPress: () => Toast.info('ok',1), style: { fontWeight: 'bold' } },
	]);
};

class AntModal extends React.Component {

	static navigationOptions = {
	    title: 'Modal 对话框'
	};

	constructor(props) {
		super(props);
		this.state = {
		    modal1: false
	    };
	}

	showModal = key => (e) => {
    	// 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
    	// 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
    	e.preventDefault(); // 修复 Android 上点击穿透
    	this.setState({
      		[key]: true,
    	});
  	};

  	onClose = key => () => {
	    this.setState({
	      	[key]: false,
	    });
	}

	render(){
		return (
			<View>
				<ScrollView>
		  			<WingBlank size="lg">
		    			<WhiteSpace size="lg" />
		    			<Text>基本</Text>
		    			<WhiteSpace />
				        <WingBlank>
				          	<Button onClick={this.showModal('modal1')}>Modal 对话框</Button>
				        </WingBlank>
				        <WhiteSpace />
				        <Modal
					        title="这是 title"
					        transparent
					        closable
					        animationType='slide-up'
					        maskClosable={false}
					        visible={this.state.modal1}
					        onClose={this.onClose('modal1')}
					        footer={[{ text: '确定', onPress: () => { Toast.info('ok',1); this.onClose('modal1')(); } }]}
				        >
				        	<View style={{alignItems:'center',justifyContent:'center'}}>
				        		<Text>这是内容...</Text>
					        	<Text>这是内容...</Text>
				        	</View>
				        </Modal>

				        <WhiteSpace size="lg" />
		    			<Text>警告弹框</Text>
		    			<WhiteSpace size="lg" />
						<Button onClick={showAlert}> 自定义按钮 </Button>

						<WhiteSpace size="lg" />
					    <Button onClick={() => alert('多个按钮情况', "这里有好多个按钮, 你试试", [
						    { text: '按钮一', onPress: () => console.log('第0个按钮被点击了') },
						    { text: '按钮二', onPress: () => console.log('第1个按钮被点击了') },
						    { text: '按钮三', onPress: () => console.log('第2个按钮被点击了') },
					    ])}
					    >弹出多个按钮 </Button>

					    <WhiteSpace size="lg" />
					    <Button onClick={() => alert('删除', '确定删除么???', [
					      	{ text: '取消', onPress: () => console.log('cancel') },
					      	{
					        	text: '确定',
					        	onPress: () => new Promise((resolve) => {
					          		Toast.info('onPress Promise', 1);
					          		setTimeout(resolve, 1000);
					        	}),
					        	style: { fontWeight: 'bold' },
					      	},
					    ])}
					    >按钮 Promise</Button>

					    <WhiteSpace size="lg" />
		    			<Text>输入弹框</Text>
			    		<WhiteSpace size="lg" />
			    			<Button onClick={() => prompt(
			    				'默认值', 
			    				'默认值 defaultValue 类型', 
			    				[
			      					{ text: '取消' },
			      					{ text: '提交', onPress: value => Toast.info(`输入的内容:${value}`) },
			    				], 
			    				'plain-text',
			    				'100'
			    			)}
			    			>输入框默认值 </Button>

					    <WhiteSpace size="lg" />
					    <Button onClick={() => prompt(
					      	'输入密码',
					      	'这是密码message,可以不要',
					      	password => Toast.info(`password: ${password}`),
					      	'secure-text',
					    )}
					    >输入框密码形式 </Button>

					    <WhiteSpace size="lg" />
					    <Button onClick={() => prompt(
					      	'输入密码',
					      	'这是密码message,可以不要',
					      	[
					        	{ text: '取消' },
					        	{ text: '提交', onPress: password => console.log(`密码为:${password}`) },
					      	],
					      	'secure-text',
					    )}
					    >自定义按钮形式 </Button>

					    <WhiteSpace size="lg" />
					    <Button onClick={() => prompt(
					      	'登录',
					      	'输入用户名和密码',
					      	(login, password) => console.log(`login: ${login}, password: ${password}`),
					      	'login-password',
					    )}
					    >输入框登录形式 </Button>

					    <WhiteSpace size="lg" />
					    <Text>操作弹框</Text>
		    			<WhiteSpace size="lg" />
					    <Button onClick={() => operation([
					      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
					      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
					    ])}
					    >操作按钮</Button>
					    <WhiteSpace size="lg" />
					</WingBlank>
				</ScrollView>
			</View>
		);
	}
}

export default AntModal;