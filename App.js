/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import {Provider as PaperProvider, Text} from 'react-native-paper';
// import Signup from './app/Components/Home'
import {isSignedIn, onSignOut} from "./auth";
import {createRootNavigator} from "./router";

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            signedIn: false,
            checkedSignedIn: false
        }
    }

    componentDidMount() {
        isSignedIn()
            .then((res) => {
                if (res) {
                    this.setState({
                        signedIn: true,
                        checkedSignedIn: true,
                        key: res
                    })
                } else {
                    this.setState({
                        signedIn: false,
                        checkedSignedIn: true,
                        key: res
                    })
                }
            }).catch(err => alert("An error occurred"));

    }

    render() {
        onSignOut();
        const {checkedSignedIn, signedIn} = this.state;
        if (!checkedSignedIn) {
            return null;
        }
        const Layout = createRootNavigator(signedIn);
        return (
            <PaperProvider>
                <Layout/>
            </PaperProvider>
        );
    }
}
