import React, {Component} from 'react';
import {Text, TextInput, Chip, Headline} from 'react-native-paper'
import {TouchableOpacity, View, Button} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

// import DateTime from './DateTime.js'

class EventSignup extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            description: '',
            expertise: '',
            datetime: 'Pick the date time'
        };
        this._handleDatePicked = this._handleDatePicked.bind(this)
    }

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
        this.setState({
            datetime: date.toString()
        })
    };

    render() {
        return (

            <View style={{padding: 20, flex: 1}}>
                <Headline>Host a workout</Headline>
                <TextInput
                    label='Location'
                    value={this.state.location}
                    onChangeText={location => this.setState({location})}
                    style={{
                        marginTop: 20
                    }}
                />
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    label='Description'
                    value={this.state.description}
                    onChangeText={description => this.setState({description})}
                    style={{
                        marginTop: 20
                    }}
                />
                <View style={{marginTop: 20, backgroundColor: 'lightgrey'}}>
                    <Button onPress={this._showDateTimePicker}
                            title={this.state.datetime} style={{color: 'lightgrey'}}>
                    </Button>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode={'datetime'}
                    />
                </View>
                <TextInput
                    multiline={false}
                    numberOfLines={1}
                    label='Expertise'
                    value={this.state.expertise}
                    onChangeText={expertise => this.setState({expertise})}
                    style={{
                        marginTop: 20
                    }}
                />
                <View style={{marginTop: 20}}>
                    <Button title={"Post it"} onPress={() => {
                        console.log()
                    }}>
                    </Button>

                </View>
            </View>
        );
    }
}

export default EventSignup;