/**
 * Mapping of all stores
 *
 * @format
 * @flow
 */

import GamesListStore from './GamesListStore';
import LeaguesListStore from "./LeaguesListStore";

export default {
    gamesListStore: new GamesListStore(),
    leaguesListStore: new LeaguesListStore(),
};