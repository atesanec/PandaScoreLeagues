/**
* Store of leagues list
*
* @format
* @flow
*/

import { observable, action, flow } from 'mobx';
import Path from 'path';
import PandaScoreBaseStore from './PandaScoreBaseStore';

export default class LeaguesListStore extends PandaScoreBaseStore {
    @observable leaguesList = [];

    @action loadLeaguesList = flow(function* (gameId: number) {
      this.leaguesList = [];
      this.isLoading = true;

      try {
        const requestPath = Path.join('/', '/videogames', gameId.toString(), 'leagues');
        yield fetch(LeaguesListStore.makeRequestURL(requestPath)).then(
          (response) => {
            response.json().then(
              (json) => {
                this.leaguesList = json;
              },
            );
          },
        );
      } catch (err) {
        this.error = err;
      }

      this.isLoading = false;
    })
}
