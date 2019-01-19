/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import {Provider as PaperProvider, Text} from 'react-native-paper';
import Signup from './app/Components/Home'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <PaperProvider>
                <Signup/>
            </PaperProvider>
        );
    }
}
