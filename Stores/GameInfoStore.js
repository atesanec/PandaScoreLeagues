/**
 * Store of leagues list
 *
 * @format
 * @flow
 */

import PandaScoreBaseStore from "./PandaScoreBaseStore";
import {observable, action, flow} from 'mobx';

export default class GameInfoStore extends PandaScoreBaseStore {
    @observable leaguesList = [];

    @action loadGameList = flow(function * () {
        this.isLoading = true;

        try {
            yield fetch(GamesListStore.makeRequestURL('/videogames')).then(
                (response) => {response.json().then(
                    json => {
                        this.gamesList = json
                    }
                )});
        } catch (err) {
            this.error = err;
            console.warn(err)
        }

        this.isLoading = false
    })
}