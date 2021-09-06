export default class Branch extends EventTarget {
  constructor({ load, show, hide, branches, defaultChild, getBranch } = {}) {
    super();
    this.branches = branches || {};
    if (load) {
      this.load = load;
    }
    if (show) {
      this.show = show;
    }
    if (hide) {
      this.hide = hide;
    }
    if (getBranch) {
      this.getBranch = getBranch;
    }

    this._defaultChild = defaultChild;
    this._parent = null;
    this._path = null;
    this._router = null;
    this._slug = null;
  }

  getBranch(slug) {
    let branch;
    if (this.branches[slug]) {
      branch = this.branches[slug];
    } else if (this.branches['*']) {
      branch = this.branches['*'];
    } else {
      branch = new Branch();
      console.log('No branch named ' + slug + ', default branch was created');
    }
    return branch;
  }

  load(props, assetList) {
    return Promise.resolve();
  }

  show(props) {
    return Promise.resolve();
  }

  hide(props) {
    return Promise.resolve();
  }

  get defaultChild() {
    return this._defaultChild;
  }

  set defaultChild(value) {
    this._defaultChild = value;
  }

  get parent() {
    return this._parent;
  }

  set parent(value) {
    this._parent = value;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get router() {
    return this._router;
  }

  set router(value) {
    this._router = value;
  }

  get slug() {
    return this._slug;
  }

  set slug(value) {
    this._slug = value;
  }
}
