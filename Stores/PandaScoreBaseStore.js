/**
 * Base class for all PandaScore Stores
 *
 * @format
 * @flow
 */

import URL from 'url-parse';
import queryString from 'query-string';
import { observable } from 'mobx';

export default class PandaScoreBaseStore {
    static apiEndPointName: string = 'https://api.pandascore.co';

    static apiKey: string = 'i0C_UwC38urnS2NGUuRKOUVpE7BgwnBc51LAhQlq11gDVYDD3BM';

    @observable isLoading = false;

    @observable error = null;

    static makeRequestURL = (path: string, params: any = {}) => {
      const requestURL: URL = URL(PandaScoreBaseStore.apiEndPointName);

      const fullParams = Object.assign({ token: PandaScoreBaseStore.apiKey }, params);
      requestURL.query = queryString.stringify(fullParams);
      requestURL.pathname = path;

      return requestURL.toString();
    }
}
