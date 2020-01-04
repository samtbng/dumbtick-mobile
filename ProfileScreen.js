import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


class ProfileScreen extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Button title="BUTTON KONTOY"/>
            </View>
        );
    }
}

export default ProfileScreen