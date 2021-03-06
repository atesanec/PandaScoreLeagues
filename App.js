/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from  'react-navigation';
import {Provider, Observer} from 'mobx-react'
import GamesListScreen from './Screens/GamesListScreen/GamesListScreen';
import GameDetailsScreen from './Screens/GameDetailsScreen/GameDetailsScreen';
import allStores from './Stores/StoreMap'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render()
    {
        return(
            <Provider {...allStores}>
                <RootNavigationStack />
            </Provider>
        );
    }
}

const RootNavigationStack = createStackNavigator(
    {
        GamesListScreen: GamesListScreen,
        GameDetailsScreen: GameDetailsScreen,
    },
    {
        initialRouteName: 'GamesListScreen',
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
