/**
 * Details about selected video game
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from "mobx-react";

export default GameDetailsScreen = inject('leaguesListStore')(observer(
    class GameDetailsScreen extends React.Component {
        static navigationOptions = {
            title: 'Game Info',
        };

        render() {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Game Info</Text>
                </View>
            );
        }
    }))