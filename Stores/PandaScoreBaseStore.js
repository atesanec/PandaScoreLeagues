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

      params.token = PandaScoreBaseStore.apiKey;
      requestURL.query = queryString.stringify(params);
      requestURL.pathname = path;

      return requestURL.toString();
    }
}
