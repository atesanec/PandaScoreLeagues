/**
 * Details about selected video game
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View, FlatList, Linking,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import LeagueInfoItem from './LeagueInfoItem';

export default GameDetailsScreen = inject('leaguesListStore')(observer(
  class GameDetailsScreen extends React.Component {
        static navigationOptions = {
          title: 'Game Info',
        };

        componentDidMount() {
          const gameId = this.props.navigation.getParam('gameId', null);
          this.props.leaguesListStore.loadLeaguesList(gameId);
        }

        _renderLeagueListItem({ item }) {
          const title = item.name;
          const imageURL = item.image_url;
          const websiteURL = item.url;
          return (
            <LeagueInfoItem
              id={item.id}
              title={title}
              imageURL={imageURL}
              websiteURL={websiteURL}
              onPressItem={this._onPressItem.bind(this)}
            />
          );
        }

        _onPressItem(itemId: number) {
          const item = this.props.leaguesListStore.leaguesList.find((item, i, list) => item.id === itemId);
          if (item.url) {
            Linking.openURL(item.url);
          }
        }

        render() {
          const dataSource = this.props.leaguesListStore.leaguesList;
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
  },
));
