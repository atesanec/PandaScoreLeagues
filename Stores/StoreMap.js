/**
 * Mapping of all stores
 *
 * @format
 * @flow
 */

import GamesListStore from './GamesListStore';
import LeaguesListStore from "./LeaguesListStore";
import GameInfoStore from "./GameInfoStore"

export default {
    gamesListStore: new GamesListStore(),
    gameInfoStore: new GameInfoStore(),
    leaguesListStore: new LeaguesListStore(),
};