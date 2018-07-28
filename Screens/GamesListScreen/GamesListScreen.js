/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class  GamesListScreen extends React.Component {
    static navigationOptions = {
        title: 'Games List',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Games List</Text>
                <Button title={'navigate'} onPress={() => {this.props.navigation.push('GameDetailsScreen')}}/>
            </View>
        );
    }
}