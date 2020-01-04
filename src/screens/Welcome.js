import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Welcome extends Component {

  handlePress = (event) => {
      const nameCategory = event.target.name
    this.props.navigation.navigate('HomeScreen',{name:{nameCategory}});
  }

  render() {  
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})