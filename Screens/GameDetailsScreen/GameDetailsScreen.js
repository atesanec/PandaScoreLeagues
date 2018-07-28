/**
 * Details about selected video game
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class GameDetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Video Game',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Game Info</Text>
            </View>
        );
    }
}