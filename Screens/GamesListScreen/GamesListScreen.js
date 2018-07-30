/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View, FlatList,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import GameListItem from './GameListItem';
import GamesListStore from '../../Stores/GamesListStore';

const GamesListScreen = inject('gamesListStore')(observer(
  class GamesListScreen extends Component {
    static navigationOptions = {
      title: 'Games List',
    };

    static propTypes = {
      gamesListStore: PropTypes.instanceOf(GamesListStore).isRequired,
      navigation: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
    };

    componentDidMount() {
      const { gamesListStore } = this.props;
      gamesListStore.loadGameList();
    }

    onPressItem = (gameId: number) => {
      const { navigation } = this.props;
      navigation.push('GameDetailsScreen', { gameId });
    };

    renderListItem = ({ item }) => (
      <GameListItem id={item.id} title={item.name} onPressItem={this.onPressItem} />
    );

    render() {
      const { gamesListStore: { gamesList: dataSource } } = this.props;
      return (
        <View>
          <FlatList
            data={dataSource}
            renderItem={this.renderListItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      );
    }
  },
));

export default GamesListScreen;
