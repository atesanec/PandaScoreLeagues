/**
 * Details about selected video game
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  leagueIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
  },
});

export default class LeagueInfoItem extends PureComponent {
  static propTypes = {
    onPressItem: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string,
    title: PropTypes.string.isRequired,
    websiteURL: PropTypes.string,
  };

  static defaultProps = {
    imageURL: null,
    websiteURL: null,
  };

  onPressItem = () => {
    const { id, onPressItem } = this.props;
    onPressItem(id);
  };

  render() {
    let { imageURL: iconSource } = this.props;
    if (iconSource === undefined) {
      iconSource = require('../../assets/league-placeholder-logo.png'); // eslint-disable-line global-require
    } else {
      iconSource = { uri: iconSource };
    }

    const { title, websiteURL } = this.props;
    return (
      <TouchableOpacity onPress={this.onPressItem}>
        <Image style={styles.leagueIcon} source={iconSource} />
        <Text>
          {title}
        </Text>

        {websiteURL !== null
                    && (
                    <Text>
                      {`Website: ${websiteURL}`}
                    </Text>
                    )
                }
      </TouchableOpacity>
    );
  }
}
