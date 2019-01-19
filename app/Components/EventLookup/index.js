import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {Searchbar} from 'react-native-paper';

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
    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                <Searchbar placeholder="Search an Event "/>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                />

            </View>
        );
    }
}

export default Home;