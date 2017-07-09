import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { ActionSheetCustom } from 'react-native-actionsheet';

class RNActionSheet extends React.Component {

    static navigationOptions = {
        title: '动作面板'
    };

  constructor(props) {
      super(props)
      this.state = {
          selected: ''
      }
      this.handlePress = this.handlePress.bind(this)
      this.showActionSheet = this.showActionSheet.bind(this)
      this.showActionSheetCustom = this.showActionSheetCustom.bind(this)
  }

  showActionSheet() {
      this.ActionSheet.show()
  }
  showActionSheetCustom() {
      this.ActionSheetCustom.show()
  }

  handlePress(i) {
      this.setState({
          selected: i
      })
  }

  render() {
      const CANCEL_INDEX = 0;
      const DESTRUCTIVE_INDEX = 4;
      const options = [ 'Cancel', 'Apple', 'Banana', 'Watermelon', 'Durian' ];
      const title = 'Which one do you like?';

      const cOptions = [ 
          'Cancel', 
          'Apple', 
          <Text style={{color: 'yellow'}}>Banana</Text>,
          'Watermelon', 
          <Text style={{color: 'red'}}>Durian</Text>
      ];
      const cTitle = <Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>;

      return (
          <View style={styles.wrapper}>
              <Text style={{marginBottom: 20}} >you choosed {options[this.state.selected]}</Text>
              <Text style={styles.button} onPress={this.showActionSheet}>Basic( 基本 )</Text>
              <Text style={styles.button} onPress={this.showActionSheetCustom}>Custom( 自定义 )</Text>
              <ActionSheet
                  ref={o => this.ActionSheet = o}
                  title={title}
                  options={options}
                  cancelButtonIndex={CANCEL_INDEX}
                  destructiveButtonIndex={DESTRUCTIVE_INDEX}
                  onPress={this.handlePress}
              />
              <ActionSheetCustom
                  ref={c => this.ActionSheetCustom = c}
                  title={cTitle}
                  tintColor="#3f3f3f"
                  options={cOptions}
                  cancelButtonIndex={CANCEL_INDEX}
                  destructiveButtonIndex={DESTRUCTIVE_INDEX}
                  onPress={this.handlePress}
              />
          </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    button: {
        backgroundColor: '#1996CF',
        borderRadius: 4,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        color: '#fff'
    }
});

export default RNActionSheet;