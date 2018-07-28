/**
 * Store of games list
 *
 * @format
 * @flow
 */
import PandaScoreBaseStore from "./PandaScoreBaseStore";
import {observable, action, flow} from 'mobx';

export default class GamesListStore extends PandaScoreBaseStore {
    @observable gamesList = [];
    @observable isLoading = false;

    @action loadGameList = flow(function * () {
        this.isLoading = true;

        try {
            yield fetch(GamesListStore.makeRequestURL('/videogames'))
                .then((response) => {this.gamesList = response.json()});
        } catch (err) {
            this.error = err;
            console.warn(err)
        }

        this.isLoading = false
    })
}