/**
 * Details about selected video game
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, FlatList, Linking} from 'react-native';
import {inject, observer} from "mobx-react";
import LeagueInfoItem from "./LeagueInfoItem";

export default GameDetailsScreen = inject('leaguesListStore')(observer(
    class GameDetailsScreen extends React.Component {
        static navigationOptions = {
            title: 'Game Info',
        };

        componentDidMount() {
            let gameId = this.props.navigation.getParam('gameId', null);
            this.props.leaguesListStore.loadLeaguesList(gameId)
        }

        _renderLeagueListItem({item}) {
            let title = item.name;
            let imageURL = item.image_url;
            let websiteURL = item.url;
            return (
                <LeagueInfoItem id={item.id} title={title} imageURL={imageURL} websiteURL={websiteURL}
                                onPressItem={this._onPressItem.bind(this)}/>
            )
        }

        _onPressItem(itemId: number) {
            let item = this.props.leaguesListStore.leaguesList.find((item, i, list) => item.id === itemId);
            if (item.url) {
                Linking.openURL(item.url)
            }
        }

        render() {
            let dataSource = this.props.leaguesListStore.leaguesList;
            return (
                <View>
                    <FlatList
                        data={dataSource}
                        renderItem={this._renderLeagueListItem.bind(this)}
                        keyExtractor={(item, i) => item.id.toString()}
                    />
                </View>
            );
        }
    }))