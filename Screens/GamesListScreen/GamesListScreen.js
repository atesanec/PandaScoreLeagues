/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {inject, observer} from "mobx-react";
import GameListItem from "./GameListItem";

export default GamesListScreen = inject('gamesListStore')(observer(
    class GamesListScreen extends React.Component {
        static navigationOptions = {
            title: 'Games List'
        };

        componentDidMount() {
            this.props.gamesListStore.loadGameList()
        }

        _renderListItem({item}) {
            return (<GameListItem id={item.id} title={item.name} onPressItem={this._onPressItem.bind(this)}/>)

        };

        _onPressItem(gameId: number) {
            this.props.navigation.push('GameDetailsScreen', {gameId: gameId})
        }

        render() {
            let dataSource = this.props.gamesListStore.gamesList;
            return (
                <View>
                    <FlatList
                        data={dataSource}
                        renderItem={this._renderListItem.bind(this)}
                        keyExtractor={(item, i) => item.id.toString()}
                    />
                </View>
            );
        }
    }))