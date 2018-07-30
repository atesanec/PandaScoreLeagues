/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class GameListItem extends PureComponent {
  static propTypes = {
    onPressItem: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  onItemPress = () => {
    const { onPressItem, id } = this.props;
    onPressItem(id);
  };

  render() {
    const { title } = this.props;
    return (
      <TouchableOpacity onPress={this.onItemPress}>
        <Text>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
