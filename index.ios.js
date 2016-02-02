/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Dropdown = require('react-native-spring-dropdown');

class AllInOne extends Component {
  onChange(options) {
    console.log(options)
  }

  render() {
    return (
      <View style={styles.container}>
        <Dropdown
          data={[{key:1,value:'hello'},{key:2,value:'world'},{key:3,value:'!'}]}
          onChange={this.onChange}
          initValue="Select Me!"
          selectStyle={{width:300,backgroundColor:'#fff'}}
          optionStyle={{padding:20}}
          optionTextStyle={{color:'blue'}}
          cancelStyle={{padding:20}}
          cancelTextStyle={{color:'red'}}
          overlayStyle={{backgroundColor:'rgba(55,55,55,0.5)'}}
          cancelText="Cancel!"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AllInOne', () => AllInOne);
