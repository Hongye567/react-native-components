import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Accordion extends Component{

    constructor(props){
        super(props);

        this.icons = {
            'up' : 'ios-arrow-up',
            'down' : 'ios-arrow-down' 
        };

        this.state = {
            title: props.title,
            expanded : false,
            animation: new Animated.Value()
        }; 
    } 

    /**
     * 折叠/展开
     */
    toggle(){

        let initialValue = this.state.expanded? this.state.maxHeight +   this.state.minHeight : this.state.minHeight, 
            finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight; 
    
        this.setState({ 
            expanded : !this.state.expanded
        }); 

        this.state.animation.setValue(initialValue); 
        Animated.spring(
            this.state.animation, 
            { 
                toValue: finalValue 
            } 
        ).start();
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    _setMaxHeight(event){ 
        this.setState({ 
            maxHeight : event.nativeEvent.layout.height
        });
    }

    componentWillMount() {
        let there = this;
    
        there.setState({
          expanded: there.props.expanded
        });
    
        if (!there.props.expanded) {
            there.state.animation.setValue(40); 
        }
    }

    render(){

        let icon = this.icons['down'];

        if(this.state.expanded){ 
            icon = this.icons['up'];
        }
    
        return ( 
            <Animated.View style={[styles.container,{...this.props.style},{height: this.state.animation}]} > 
                <TouchableHighlight
                    onLayout={this._setMinHeight.bind(this)}
                    onPress={this.toggle.bind(this)} 
                    underlayColor="#f1f1f1"> 
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.state.title}</Text> 
                        <View style={styles.button} > 
                            <Icon 
                                name={icon}
                                size={20}
                            /> 
                        </View> 
                    </View>
                </TouchableHighlight> 
                <View style={styles.body}
                    onLayout={this._setMaxHeight.bind(this)}> 
                    {this.props.children} 
                </View> 
            </Animated.View> 
        ); 
    }
}

const styles = StyleSheet.create({
    container : { 
        backgroundColor: '#fff', 
        margin:10, 
        overflow:'hidden' 
    }, 
    titleContainer : { 
        flexDirection: 'row' 
    }, 
    title : { 
        flex : 1, 
        padding : 10,
    }, 
    button : { 
        justifyContent: 'center',
        alignItems: 'center',
        width: 30
    }, 
    body : { 
        padding : 10, 
        paddingTop : 0 
    }
});

export default Accordion;