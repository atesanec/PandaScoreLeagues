/**
 * List of available video games
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

export default class GameListItem extends PureComponent {
    _onItemPress() {
        this.props.onPressItem(this.props.id)
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onItemPress.bind(this)}>
                <Text >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}