import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native'
import {
  Container,
  Button,
  Text,
  Content,
} from 'native-base';
import axios from 'axios';
import CardMap from './components/CardMap'
import moment from 'moment'

class HomeScreen extends Component {
constructor(){
  super();
  this.state = {
    category:[],
    todayEvent:[],
    tomorrowEvent:[]
  }
}
  componentDidMount() {

    const date = moment(new Date()).format("YYYY-MM-DD")
    var tomorrow = new Date()
    tomorrow.setDate(moment(tomorrow.getDate() + 1))


    axios.get('https://dumbtick-restapi.herokuapp.com/api/v1/categories')
    .then(res => {
      this.setState({category:res.data})
    }).catch(err=> {
      console.log(err)
    })

    axios.get(`https://dumbtick-restapi.herokuapp.com/api/v1/events/${date}`)
    .then(res => {
      this.setState({today:res.data})
    }).catch(err=> {
      console.log(err)
    })

    axios.get(`https://dumbtick-restapi.herokuapp.com/api/v1/events/${tomorrow}`)
    .then(res => {
      this.setState({tomorrow:res.data})
    }).catch(err=> {
      console.log(err)
    })
  }

  renderCategory = ({ item }) => {
    return (
      <Button onPress={this.handlePress(item.id)} style={styles.categoryButton}>
          <Text>{item.name}</Text>
      </Button>
    )
  }

  
  handleDetail = (value) => () => {
    this.props.navigation.navigate('DetailEvent',{ id: value })
  }


  renderEvents = ({ item }) => {
    return (
      <CardMap id={item.id} title={item.title} image={item.img} cardPress={this.handleDetail(item.id)} date={item.startTime} price={item.price} />
    )
  }


  handlePress = (value) => () => {
    this.props.navigation.navigate('CategoryEvent', { id: value });
  }

  render() {
    return (
      <Container>
        <Content style={styles.body}>
          <Text style={styles.title}>
            Category
            </Text>
          <ScrollView>
            <FlatList
              data={this.state.category}
              renderItem={this.renderCategory}
              horizontal
            />
          </ScrollView>
          <Text style={styles.title}>
            Today
            </Text>
          <FlatList
            data={this.state.today}
            renderItem={this.renderEvents}
            horizontal
          />
          <Text style={styles.title}>
            Coming Event
            </Text>
          <ScrollView>
            <FlatList
              data={this.state.tomorrow}
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
  categoryButton: {
    fontSize: 10,
    height:50,
    width:100,
    flex:1,
    display:'flex',
    justifyContent:'center',
    marginRight: 8,
    marginLeft: 8,
  },
})

export default HomeScreen