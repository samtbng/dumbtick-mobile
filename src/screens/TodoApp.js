import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';

// parent component
class TodoApp extends Component {

    constructor() {
        super();
        this.state = {
            inputName: "",
            data: [
                "Ismail",
                "Moeng"
            ]
        }
    }

    async componentDidMount() {
        try {
            const data = await this.getData();
            alert(data);
        } catch (error) {
            alert(`error ${error}`);
        }
    }

    handlePress = () => {
        const afterPush = this.state.data;
        afterPush.push(this.state.inputName);
        this.setState({
            data: afterPush,
            inputName: ''
        })
    }

    handleChange = (text) => {
        this.setState({
            inputName: text
        })
    }

    renderItem = ({ item }) => {
        return (
            <Item value={item} />
        )
    }

    getData = () => {
        return new Promise((resolve, rejected) => {
            setTimeout(() => {
                // resolve('Ismail');
                rejected('Ismail Error');
            }, 5000);
            // rejected('Ismail Error');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleChange}
                    value={this.state.inputName}
                />
                <Button
                    title="ADD"
                    onPress={this.handlePress}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

// child component 
class Item extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>This is {this.props.value}</Text>
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    item: {
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    itemText: {
        fontWeight: 'bold'
    }
})