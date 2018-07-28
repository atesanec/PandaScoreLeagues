/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {inject, observer} from "mobx-react";

export default GamesListScreen = inject('gamesListStore')(observer(
    class GamesListScreen extends React.Component {
        static navigationOptions = {
            title: 'Games List'
        };

        componentDidMount() {
            this.props.gamesListStore.loadGameList()
        }

        render() {
            return (
                <Text>{this.props.gamesListStore.gamesList.toString()}</Text>
            );
        }
    }))