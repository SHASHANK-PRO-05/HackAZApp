import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import {Searchbar, Card, Title, Paragraph, Button, Headline} from 'react-native-paper';
import key from './Config'
import {Rating, AirbnbRating} from 'react-native-ratings';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markers: []
        }
        this.fetchPlaces = this.fetchPlaces.bind(this)
    }

    fetchPlaces(latitude, longitude) {
        let urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=gym&key=${key}`
        fetch(urlFirst).then(response => {
            let temp = response.json();
            return temp;
        }).then(response => {
            let markers = [];
            const names = ['Laveena', 'Arpit', 'Rishabh', 'Shashank', 'Steve'];
            const rating = [5, 5, 4.7, 4.4, 5];
            for (let x in response['results']) {
                if (x >= 5) {
                    break
                }
                console.log(response['results'][x]);
                markers.push(<Marker coordinate={{
                    'latitude': response['results'][x]['geometry']['location']['lat'],
                    'longitude': response['results'][x]['geometry']['location']['lng']
                }}
                                     key={x} description={response['results'][x]['name']}
                                     title={response['results'][x]['name']}><Callout tooltip={true}>
                    <Card style={{width: 300}}>

                        <Title>{response['results'][x]['name']}</Title>
                        <Paragraph>Event hosted by: {names[x]} </Paragraph>
                        <Text style={{fontWeight: 'bold'}}>Event Description</Text>
                        <Text>Strength Training</Text>
                        <Rating
                            type='heart'
                            ratingCount={5}
                            imageSize={20}
                            showRating={true}
                            startingValue={5}
                        />

                    </Card>
                </Callout></Marker>)
            }
            this.setState({markers: markers})
        });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {

            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 3,
                    longitudeDelta: 0.05
                }
            });
            this.fetchPlaces(position.coords.latitude, position.coords.longitude);
        })
    }

    render() {
        if (this.state.longitude) {
            return null;
        }
        return (
            <View style={{flex: 1, padding: 20}}>
                <Searchbar placeholder="Search an Event "/>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    showsUserLocation={true}
                >{this.state.markers}</MapView>

            </View>
        );
    }
}

export default Home;