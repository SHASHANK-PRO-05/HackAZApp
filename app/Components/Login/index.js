import React, {Component} from 'react';
import {Text, Card, Title, Paragraph, Divider, TextInput, TouchableRipple} from 'react-native-paper';
import {StyleSheet, View, Image, Button} from 'react-native';

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
    signup: {
        marginTop: 20
    }
});

class Login extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.headerImage}>
                    <Image source={require('../../assets/images/logo.png')} resizeMode="contain"
                           style={styles.headerImage}/>
                </View>
                <View style={styles.loginScreen}>
                    <TextInput
                        label='Email'
                        onChangeText={text => this.setState({text})} style={styles.textInput}
                    />

                    <TextInput
                        label='Password'
                        onChangeText={text => this.setState({text})} style={styles.textInput}
                        secureTextEntry={true}
                    />
                    <View style={styles.textInput}>
                        <Button title={"Login"}/>
                    </View>
                    <TouchableRipple
                        onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)"
                        style={styles.signup}
                    >
                        <Text style={{textAlign: 'center'}}>Don't have an account? Sign Up</Text>
                    </TouchableRipple>
                </View>

            </View>

        );
    }
}


export default Login;