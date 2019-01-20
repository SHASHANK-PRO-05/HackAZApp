import React, {Component} from 'react';
import {Text, Card, Title, Paragraph, Divider, TextInput, TouchableRipple} from 'react-native-paper';
import {StyleSheet, View, Image, Button} from 'react-native';
import {onSignIn} from '../../../auth'

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

class Login extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.loginRequest = this.loginRequest.bind(this)
    }

    loginRequest(navigation) {
        let body = new FormData();
        let temp = ['email', 'password'];
        for (let key in temp) {
            body.append(temp[key], this.state[temp[key]]);
        }
        fetch('https://gymapp-smile-229117.appspot.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: body
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.token) {
                onSignIn(data.token);
                navigation.navigate('signedin')
            }
        })
    }

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
                        value={this.state.email}
                        onChangeText={text => this.setState({email: text})} style={styles.textInput}
                    />

                    <TextInput
                        label='Password'
                        value={this.state.password}
                        onChangeText={text => this.setState({password: text})} style={styles.textInput}
                        secureTextEntry={true}
                    />
                    <View style={styles.textInput}>
                        <Button title={"Login"} onPress={() => {
                            this.loginRequest(this.props.navigation)

                        }}/>
                    </View>
                    <TouchableRipple
                        onPress={() => this.props.navigation.navigate('signup')}
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