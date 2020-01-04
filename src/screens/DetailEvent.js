import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Title,
    Right,
    Button,
} from 'native-base';
import axios from 'axios';
import moment from 'moment';


class DetailEvent extends Component {
    constructor(){
        super();
        this.state = {
            event:[],
            categoryName:''
        }
    }

    componentDidMount(){
        const { navigation } = this.props
        const id = JSON.stringify(navigation.getParam('id','default value'))
        axios.get(`https://dumbtick-restapi.herokuapp.com/api/v1/event/${id}`)
        .then(res =>{
            this.setState({
                event:res.data,
                categoryName:res.data.category.name
            })
        })
        .catch(err=>{console.log(err)})
    }
    render(){
        const {title, price, img, description, startTime, endTime} = this.state.event
        const date = moment(startTime).utc(false).format("DD MMMM YYYY")
        const timeStart = moment(startTime).utc(false).format("HH:mm")
        const timeEnd = moment(endTime).utc(false).format("HH:mm")
        return(
        <Content style={styles.root}>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: img}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={styles.cardbody}>
              
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </CardItem>
                <CardItem  style={styles.cardbody}>
                <Body>
                    <Text>
                        Date: {date}
                    </Text>
                    <Text>
                        Time: {timeStart} - {timeEnd}
                    </Text>
                    <Text>
                        Event Type: {this.state.categoryName}
                    </Text>
                    <Text>
                        Price: Rp.{price}
                    </Text>
              </Body>
              <Right>
                    <Button style={styles.button}>
                        <Text>Buy Ticket</Text>
                    </Button>
              </Right>
            </CardItem>
          </Card>
          <Body style={styles.bodyDescription}>
                <Title style={styles.titleDescription}>
                    Event Description :
                </Title>
                <Text style={styles.description}>
                    {description}
                </Text>
          </Body>
        </Content>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        display:'flex',
        backgroundColor:'#F4E1E1'
    },
    title:{
        fontSize:25,
        fontWeight:'bold'
    },
    cardbody:{
        backgroundColor:'rgba(0,0,0,0.15)'
    },
    titleDescription:{
        fontSize:25,
        fontWeight:'bold',
        color:"rgba(0,0,0,0.54)"
    },
    description:{
        fontSize:16,
        color:"rgba(0,0,0,0.54)",
        textAlign:'justify'
    },
    bodyDescription:{
        paddingTop:10,
        paddingRight:20,
        paddingLeft:20,
    },
    button:{
        backgroundColor:"#FF5555",
    }
})

export default DetailEvent