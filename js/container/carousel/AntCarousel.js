import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Image, 
	Text, 
	Dimensions,
	TouchableOpacity
} from 'react-native';
import { Carousel } from 'antd-mobile';

class AntCarousel extends Component {

	static navigationOptions = {
		title: 'Carousel 走马灯'
	};

	constructor(props) {
		super(props);
		this.state = {
			data: ['', '', ''],
    		initialHeight: 200
		};
	}
	
  	componentDidMount() {
    	// simulate img loading
	    setTimeout(() => {
	      	this.setState({
	        	data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      	});
	    }, 100);
  	}

  	render() {
    	const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    
    	return (
      		<View style={styles.container}>
        		<Text style={styles.subTitle}>normal</Text>
		        <Carousel
			        style={styles.myCarousel}
			        autoplay
			        infinite
			        selectedIndex={1}
			        autoplayInterval={3000}
			        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
			        afterChange={index => console.log('slide to', index)} >
          			{
          				this.state.data.map(ii => (
          					<TouchableOpacity
          						onPress={() => alert(ii)}
          						key={ii}
          						activeOpacity={0.8}>
          						<Image style={styles.image} 
	              					source={{uri: `https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}}
	              				/>
          					</TouchableOpacity>
          				))
          			}
        		</Carousel>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	subTitle: {
		padding: 10
	},
	myCarousel: {
		backgroundColor: '#fff'
	},
	image: {
		width: Dimensions.get('window').width,
		height: 180
	},
	item: {
		marginLeft: 20
	}
});

export default AntCarousel;