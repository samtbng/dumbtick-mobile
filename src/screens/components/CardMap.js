import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import {
    Body,
    Text,
    Content,
    Card,
    CardItem,
    Button
} from 'native-base';
import moment from 'moment';

class CardMap extends Component {

    render() {
        const { title, image, price, cardPress } = this.props
        const infodate = new Date(this.props.date)
        const date = moment(infodate).utc(false).format("DD MMMM")
        return (
                <Card style={styles.card}>
                    <CardItem cardBody>
                        <Image source={{uri: image}} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem >
                        <Body>
                            <Text style={styles.titleCard} onPress={cardPress}>
                                {title.length>13 ? 
                                    title.substring(0,13)+'...'
                                        :
                                    title
                                }
                            </Text>
                            <Text style={styles.dateCard}>
                                {date}
                            </Text>
                            <Content>
                                <Text style={styles.priceCard}>
                                    {price}
                                </Text>
                            </Content>
                        </Body>
                    </CardItem>
                </Card>
        )
    }
}


const styles = StyleSheet.create({
    titleCard: {
        fontSize: 15,
        marginBottom: 0,
        color:"#FF5555"
    },
    dateCard: {
        fontSize: 13,
    },
    cardImage: {
        height: 100,
        width:null,
        flex: 1
    },
    priceCard: {
        fontSize: 12,
    },
    card: {
        width: 150,
        flex: 0,
        margin:10
    }
})


export default CardMap