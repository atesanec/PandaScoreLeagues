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

const styles = StyleSheet.create({
  leagueIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
  },
});

export default class LeagueInfoItem extends PureComponent {
  _onPressItem() {
    this.props.onPressItem(this.props.id);
  }

  render() {
    let iconSource = this.props.imageURL;
    if (iconSource === undefined) {
      iconSource = require('../../assets/league-placeholder-logo.png');
    } else {
      iconSource = { uri: iconSource };
    }

    const title = this.props.title;
    const webSiteURL = this.props.websiteURL;
    return (
      <TouchableOpacity onPress={this._onPressItem.bind(this)}>
        <Image style={styles.leagueIcon} source={iconSource} />
        <Text>
          {title}
        </Text>

        {webSiteURL !== null
                    && (
                    <Text>
                      {`Website: ${webSiteURL}`}
                    </Text>
                    )
                }
      </TouchableOpacity>
    );
  }
}
