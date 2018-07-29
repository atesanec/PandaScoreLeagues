/**
 * Header that contains description of the game
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from "mobx-react";

export default GameInfoHeader = inject('gameInfoStore')(observer(
class GameInfoHeader extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Here will be game info</Text>
            </View>
        );
    }
}))