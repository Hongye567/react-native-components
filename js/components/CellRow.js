import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//单行右边有箭头item组件
class CellRow extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,  //标题
        titleColor: PropTypes.string,        //标题颜色
        arrowColor: PropTypes.string,        //箭头颜色
        onPress: PropTypes.func,             //点击回调
        text: PropTypes.string,              //右侧文字
        segmentColor: PropTypes.string,       //整行颜色
    };

    render() {
        const {title, onPress, titleColor, arrowColor, text, segmentColor, style} = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                underlayColor="rgba(0,0,0,.3)"
                style={style}>
                <View style={[styles.rowContainer,{backgroundColor:segmentColor}]}>
                    <Text style={{color: titleColor}}>{title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginRight: 15}}>{text}</Text>
                        <Icon name="ios-arrow-forward" color={arrowColor} size={20}/>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        padding: 10,
        backgroundColor: '#e9e9e9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default CellRow;