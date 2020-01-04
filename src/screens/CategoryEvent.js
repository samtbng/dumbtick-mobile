import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import {
    Container,
    Left,
    Body,
    Right,
    Button,
    Text,
    Title,
    Content,
    Icon,
} from 'native-base';
import axios from 'axios';

import CardMap from './components/CardMap';

class CategoryEvent extends Component {
    constructor() {
        super();
        this.state = {
            events:[],
            name:'',
        }
    }

    componentDidMount(){
        const { navigation } = this.props
        const id = JSON.stringify(navigation.getParam('id','default value'))

        axios.get(`https://dumbtick-restapi.herokuapp.com/api/v1/category/${id}/events`)
        .then(res =>{
            this.setState({
                name:res.data.name,
                events:res.data.events
            })
        })
        .catch(err=>{ console.log(err) })
    }

    renderEvents = ({ item }) => {
        return (
            <CardMap id={item.id} title={item.title} image={item.img} date={item.startTime} price={item.price} />
        )
    }

    render() {
        const {events, name } = this.state
        return (
            <Container>
                <Content style={styles.body}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <ScrollView>
                        <FlatList
                            data={events}
                            renderItem={this.renderEvents}
                            horizontal
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#F4E1E1",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FF5555",
        marginTop: 20,
        marginBottom: 10
    },
})

export default CategoryEvent