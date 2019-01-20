import React, {Component} from 'react';
import {Text, Card, Title, Paragraph, Divider, TextInput, TouchableRipple} from 'react-native-paper';
import {StyleSheet, ScrollView, View, Image, Button} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerImageContainer: {
        flex: 1
    },
    headerImage: {
        flex: 1, height: undefined, width: undefined,
    },
    loginScreen: {
        flex: 2,
        padding: 10
    },
    textInput: {
        marginTop: 20
    },
    signin: {
        marginTop: 20
    }
});

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            selectedItems: []
        }
        this.items = [{
            id: '92iijs7yta',
            name: 'Ondo',
        }, {
            id: 'a0s0a8ssbsd',
            name: 'Ogun',
        }, {
            id: '16hbajsabsd',
            name: 'Calabar',
        }, {
            id: 'nahs75a5sg',
            name: 'Lagos',
        }, {
            id: '667atsas',
            name: 'Maiduguri',
        }, {
            id: 'hsyasajs',
            name: 'Anambra',
        }, {
            id: 'djsjudksjd',
            name: 'Benue',
        }, {
            id: 'sdhyaysdj',
            name: 'Kaduna',
        }, {
            id: 'suudydjsjd',
            name: 'Abuja',
        }];
        this.onSelectedItemsChange = this.onSelectedItemsChange.bind(this)
    }

    onSelectedItemsChange(selectedItems) {
        this.setState({selectedItems});
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.headerImage}>

                    <Image source={require('../../assets/images/logo.png')} resizeMode="contain"
                           style={styles.headerImage}/>
                </View>
                <View style={{flex: 2, marginTop: 10}}>
                    <ScrollView>
                        <View style={styles.loginScreen}>
                            <TextInput
                                label='Email'
                                onChangeText={text => this.setState({text})} style={styles.textInput}
                            />

                            <TextInput
                                label='Name'
                                onChangeText={text => this.setState({text})} style={styles.textInput}
                            />

                            <TextInput
                                label='Phone'
                                onChangeText={text => this.setState({text})} style={styles.textInput}
                            />

                            <TextInput
                                label='Password'
                                onChangeText={text => this.setState({text})} style={styles.textInput}
                                secureTextEntry={true}
                            />

                            <TextInput
                                label='Re-Type Password'
                                onChangeText={text => this.setState({text})} style={styles.textInput}
                                secureTextEntry={true}
                            />



                            <View style={styles.textInput}>
                                <Button title={"Signup"}/>
                            </View>

                            <TouchableRipple
                                onPress={() => this.props.navigation.navigate('signin')}
                                rippleColor="rgba(0, 0, 0, .32)"
                                style={styles.signin}>
                                <Text style={{textAlign: 'center'}}>Already have an account? Sign In</Text>
                            </TouchableRipple>
                        </View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}


export default Signup;