import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import EventLookup from '../EventLookup/'



const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'eventLookup', title: 'Gym Workouts', icon: 'event-available'},
            {key: 'createEvent', title: 'Host Workout', icon: 'event-seat'}
        ],
    };

    _handleIndexChange = index => this.setState({index});

    _renderScene = BottomNavigation.SceneMap({
        'eventLookup': EventLookup,
        'createEvent': EventLookup
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}