import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count: 0
  }

  _incrementCount = () => {
    this.setState({ count: this.state.count++ })
  }

  _decreaseCount = () => {
    if(this.setState.count > 0){
      this.setState({ count: this.state.count-- })
    }
  }

  // componentDidMount() {
  //   setInterval(this._incrementCount, 1000);
  // }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={ styles.greetingBox }>
          <Text>+</Text>
        </VrButton>
        <VrButton onClick={this._decreaseCount} style={ styles.greetingBox }>
          <Text>-</Text>
        </VrButton>
        <Text style={styles.greeting}>
          { `Count: ${ this.state.count }` }
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(0, 0, 255, 5.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  greeting: {
    fontSize: 48,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
