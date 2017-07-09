import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, Text,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Toast } from 'antd-mobile';

const { width, height } = Dimensions.get('window');
class SwiperDemo extends Component {

	static navigationOptions = {
		title: '轮播'
	};

	constructor(props) {
		super(props);
		this.state = {
			dataSource: ["","",""]
		};
	}

	componentDidMount() {
		fetch("https://api.douban.com/v2/movie/top250?start=0&count=3")
			.then((response) => response.json())
			.then((responseJSON) => {
				this.setState({
					dataSource: responseJSON.subjects
				});
			})
			.catch((error) => console.error(error))
	}

	_renderItem(item, index) {
		const colors = ['#88EFDD', '#F193DB', '#ECEF88', '#4CF691'];
		return (
			<TouchableOpacity style={[styles.itemContainer,{backgroundColor: colors[index%3]}]}
				key={index}
				onPress={() => Toast.info(item.title, 1, null, false)}
				activeOpacity={0.8}
			>
				<Image 
					style={{width:width, height:width * 1/2}}
					source={{uri: (item.images && item.images.large) ? item.images.large : 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg'}} 
					resizeMode='cover'
				/>
				<Text style={styles.itemTitle}>{item.title}</Text>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View>
				<Swiper
					loop={true}
					height={width * 1/2}
					activeDotColor="white"
					autoplay
					paginationStyle={{justifyContent: 'flex-end', right:10, bottom: 10}}
					onMomentumScrollEnd={(e, state, context) => Toast.info(JSON.stringify(context.state))}>
					{
						this.state.dataSource.map((item, index) => this._renderItem(item,index))
					}
				</Swiper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemTitle: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,.5)',
		color: 'white',
		padding: 10
	}
});

export default SwiperDemo;