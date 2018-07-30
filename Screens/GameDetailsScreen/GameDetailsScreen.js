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
import PropTypes from 'prop-types';
import LeagueInfoItem from './LeagueInfoItem';
import LeaguesListStore from '../../Stores/LeaguesListStore';


const GameDetailsScreen = inject('leaguesListStore')(observer(
  class GameDetailsScreen extends React.Component {
        static navigationOptions = {
          title: 'Game Info',
        };

      static propTypes = {
        navigation: PropTypes.shape({
          getParam: PropTypes.func.isRequired,
        }).isRequired,
        leaguesListStore: PropTypes.instanceOf(LeaguesListStore).isRequired,
      };


      componentDidMount() {
        const { navigation } = this.props;
        const gameId = navigation.getParam('gameId', null);

        const { leaguesListStore } = this.props;
        leaguesListStore.loadLeaguesList(gameId);
      }

      onPressItem = (itemId: number) => {
        const { leaguesListStore: { leaguesList } } = this.props;
        const item = leaguesList.find(elem => elem.id === itemId);
        if (item.url) {
          Linking.openURL(item.url);
        }
      };

      renderLeagueListItem = ({ item }) => {
        const title = item.name;
        const imageURL = item.image_url;
        const websiteURL = item.url;
        return (
          <LeagueInfoItem
            id={item.id}
            title={title}
            imageURL={imageURL}
            websiteURL={websiteURL}
            onPressItem={this.onPressItem}
          />
        );
      };

      render() {
        const { leaguesListStore: { leaguesList } } = this.props;
        return (
          <View>
            <FlatList
              data={leaguesList}
              renderItem={this.renderLeagueListItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        );
      }
  },
));

export default GameDetailsScreen;
