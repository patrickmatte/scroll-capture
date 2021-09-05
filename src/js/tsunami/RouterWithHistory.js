import BaseEvent from './events';
import Router from './Router';

export default class RouterWithHistory extends Router {
  constructor(root, basePath, fragment, fallback) {
    super(root);

    this.basePath = basePath;
    this.fragment = fragment;
    this.fallback = fallback;

    this.hasPushed = false;

    this.hash = '#!';

    this.state = { path: null };
    this._updateOnHashChange = true;

    this.historyIsAvailable = window.history.pushState;
  }

  get absoluteBasePath() {
    return this.basePath + this.fragment;
  }

  static get POP_STATE() {
    return 'popstate';
  }

  static get FALLBACK_HASH() {
    return 'hash';
  }

  static get FALLBACK_RELOAD() {
    return 'reload';
  }

  start() {
    if (this.historyIsAvailable) {
      window.onpopstate = this._popStateHandler.bind(this);
    } else if (this.fallback === RouterWithHistory.FALLBACK_HASH) {
      window.onhashchange = this._hashChangeHandler.bind(this);
    }

    this.state = {};
    if (window.location.hash.indexOf(this.hash) != -1) {
      this.state.path = this.basePath + this.fragment + window.location.hash.split(this.hash)[1];
      if (this.state.path !== this.basePath && this.historyIsAvailable) {
        window.history.replaceState(this.state, '', this.state.path);
      }
    } else {
      this.state.path = window.location.href.substr(this.absoluteBasePath.length);
      if (this.state.path !== this.basePath) {
        if (!this.historyIsAvailable) {
          if (this.fallback === RouterWithHistory.FALLBACK_HASH) {
            if (!window.location.hash) {
              let deeplink = this.state.path.split(this.basePath)[1];
              deeplink = deeplink.split(this.fragment)[1];
              this._updateOnHashChange = false;
              window.location.replace(this.basePath + this.hash + deeplink);
            }
          } else if (this.fallback === RouterWithHistory.FALLBACK_RELOAD) {
            if (window.location.hash) {
              window.location.replace(this.basePath + this.fragment + this.state.path);
            }
          }
        } else {
          //this.replaceState({path:this.state.path}, "", this.state.path);
        }
      }
    }
    this.changeState({ path: this.state.path });
  }

  pushState(path, title) {
    if (this.debug) {
      console.log('pushState', path);
    }
    this.state.path = path;

    this.hasPushed = true;

    this.location = path;

    const url = this.absoluteBasePath + path;

    if (this.historyIsAvailable) {
      window.history.pushState(this.state, title, url);
    } else if (this.fallback === RouterWithHistory.FALLBACK_HASH) {
      this._updateOnHashChange = false;
      window.location.href = this.hash + this.state.path;
    } else if (this.fallback === RouterWithHistory.FALLBACK_RELOAD) {
      window.location.assign(url);
    }
  }

  replaceState(state, title, url) {
    this.state = state;
    if (this.historyIsAvailable) {
      window.history.replaceState(this.state, title, url);
    } else if (this.fallback === RouterWithHistory.FALLBACK_HASH) {
      this._updateOnHashChange = false;
      window.location.replace(this.hash + this.state.path);
    } else if (this.fallback === RouterWithHistory.FALLBACK_RELOAD) {
      window.location.replace(url);
    }
  }

  _popStateHandler(event) {
    // if (!this.hasPushed) {
    //return;
    // }
    let state = event.state;
    if (state == null) {
      state = {
        path: window.location.href.substr(this.absoluteBasePath.length),
      };
    }
    this.changeState(state);
  }

  _hashChangeHandler(e) {
    if (this._updateOnHashChange) {
      const path = window.location.hash.split(this.hash)[1] || '';
      this.changeState({ path: path });
    } else {
      this._updateOnHashChange = true;
    }
  }

  changeState(state) {
    this.state = state;
    this.location = state.path || '';
    const event = new BaseEvent(RouterWithHistory.POP_STATE, {
      state: this.state,
    });
    this.dispatchEvent(event);
  }
}
