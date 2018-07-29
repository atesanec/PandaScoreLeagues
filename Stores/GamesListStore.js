/**
 * Store of games list
 *
 * @format
 * @flow
 */
import { observable, action, flow } from 'mobx';
import PandaScoreBaseStore from './PandaScoreBaseStore';

export default class GamesListStore extends PandaScoreBaseStore {
    @observable gamesList = [];

    @action loadGameList = flow(function* () {
      this.isLoading = true;

      try {
        yield fetch(GamesListStore.makeRequestURL('/videogames')).then(
          (response) => {
            response.json().then(
              (json) => {
                this.gamesList = json;
                this.isLoading = false;
              },
            );
          },
        );
      } catch (err) {
        this.error = err;
        this.isLoading = false;
        console.warn(err);
      }
    })
}
