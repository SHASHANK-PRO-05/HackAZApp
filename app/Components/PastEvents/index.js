import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Headline} from 'react-native-paper'

class PastEvents extends Component {
    state = {
        visible: true,
    };

    render() {
        return (
            <View style={{padding: 20, flexDirection: 'column'}}>
                <Headline> Past Workouts </Headline>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('../../assets/images/temp.jpg')}
                           resizeMode="contain" style={{flex: 3, height: 200}}/>
                    <View style={{flex: 4, fontWeight: 'bold'}}>
                        <Text style={{marginTop: 35, marginLeft: 10}}>Name: Rishabh</Text>
                        <Text style={{marginLeft: 10}}>Rating Given: 4/5</Text>
                        <Text style={{marginLeft: 10}}>Description: Strength Training</Text>
                        <Text style={{marginLeft: 10}}>Date: 01/18/2019</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 150}}>
                    <Image source={require('../../assets/images/temp1.jpeg')}
                           resizeMode="contain" style={{flex: 3, height: 200}}/>
                    <View style={{flex: 4, fontWeight: 'bold'}}>
                        <Text style={{marginTop: 35, marginLeft: 10}}>Name: Shashank</Text>
                        <Text style={{marginLeft: 10}}>Rating Given: 5/5</Text>
                        <Text style={{marginLeft: 10}}>Description: Gymnastics</Text>
                        <Text style={{marginLeft: 10}}>Date: 01/20/2019</Text>
                    </View>
                </View>
            </View>

        );
    }
}

export default PastEvents;