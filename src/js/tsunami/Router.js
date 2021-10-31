import ArrayData from './data/ArrayData';
import BaseEvent from './events';
import RouterTask from './RouterTask';
import RouterTransition from './RouterTransition';

export default class Router extends EventTarget {
  constructor(root) {
    super();

    this.root = root;
    this._location = null;
    this.goToAllLocations = false;
    this.interruptTransitions = true;
    this._inTransition = false;
    this._interruptingLocations = [];
    this.branches = new ArrayData();
    this.redirects = {};
    this.parameters = {};
    
    this.show = new RouterTransition(this, 'show', this._showComplete.bind(this));
    this.show.tasks = [new RouterTask('load', true), new RouterTask('show', false)];
    this.hide = new RouterTransition(this, 'hide', this._hideComplete.bind(this));
    this.hide.tasks = [new RouterTask('hide', false)];
  }

  static get INTERRUPT() {
    return 'interrupt';
  }

  static get CHANGE() {
    return 'change';
  }

  static get COMPLETE() {
    return 'complete';
  }

  get root() {
    return this._root;
  }

  set root(value) {
    this._root = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (this.debug) {
      console.log('Router set location', value);
    }

    if (value.indexOf('?') !== -1) {
      value = value.split('?')[0];
    }

    if (this._inTransition) {
      if (this.goToAllLocations) {
        const lastInterruptingLocation = this._interruptingLocations[this._interruptingLocations.length - 1];
        if (lastInterruptingLocation !== value) {
          this._interruptingLocations.push(value);
        }
      } else {
        this._interruptingLocations = [value];
      }
    } else {
      this.changeTheLocation(value);
    }
  }

  start() {
    this.location = '';
  }

  pushState(value) {
    this.location = value;
  }

  changeTheLocation(value) {
    const hashes = value.split('&');
    this.parameters = {};
    for (let i = 0; i < hashes.length; i++) {
      const string = hashes[i];
      const equalIndex = string.indexOf('=');
      if (equalIndex !== -1) {
        const hash = [];
        hash[0] = string.substr(0, equalIndex);
        hash[1] = string.substr(equalIndex + 1);
        this.parameters[hash[0]] = hash[1];
      }
    }

    let path = hashes[0];

    // remove slash if it is the last character, we don't need blank pages.
    let lastChar = path.charAt(path.length - 1);
    while (lastChar === '/') {
      path = path.substr(0, path.length - 1);
      lastChar = path.charAt(path.length - 1);
    }

    path = this._applyRedirect(path);

    if (path !== this._location) {
      this._inTransition = true;

      this._location = path;

      const event = new BaseEvent(Router.CHANGE, { location: path });
      this.dispatchEvent(event);

      this._nextLocation = 'root';
      if (path !== '') {
        this._nextLocation += '/' + path;
      }
      // if (this.debug) {
      //   console.log('Router _nextLocation', this._nextLocation);
      // }

      setTimeout(() => {
        this._startTransitions();
      }, 0);
    } else {
      this._showComplete();
    }
  }

  _applyRedirect(path) {
    const redirect = this.redirects[path];
    let newPath;
    if (redirect) {
      newPath = redirect();
    }
    newPath = newPath || path;
    if (newPath !== path) {
      newPath = this._applyRedirect(newPath);
    }
    return newPath;
  }

  _startTransitions() {
    const currentLocationArray = this.branches.value.map((branch) => {
      return branch.slug;
    });
    const nextLocationArray = this._nextLocation.split('/');
    let breakIndex = -1;
    for (let i = 0; i < currentLocationArray.length; i++) {
      const branchId = currentLocationArray.slice(0, i + 1).join('/');
      const nextBranchId = nextLocationArray.slice(0, i + 1).join('/');
      if (branchId === nextBranchId) {
        breakIndex = i;
      }
    }
    this.hide.branches = this.branches.splice(breakIndex + 1).reverse();
    let parent = this;
    if (this.branches.length > 0) {
      parent = this.branches.item(this.branches.length - 1);
    }
    const newBranches = [];
    for (let i = breakIndex + 1; i < nextLocationArray.length; i++) {
      const slug = nextLocationArray[i];
      const branch = this.getBranchFromSlug(parent, slug);
      newBranches.push(branch);
      parent = branch;
    }

    this.checkForDefaultBranches(parent, newBranches);

    this.show.branches = newBranches;
    this.hide.start();
  }

  checkForDefaultBranches(parent, branches) {
    if (parent) {
      if (parent.defaultChild) {
        const slug = parent.defaultChild;
        const branch = this.getBranchFromSlug(parent, slug);
        if (branch) {
          branches.push(branch);
          this.checkForDefaultBranches(branch, branches);
        }
      }
    }
  }

  getBranchFromSlug(parent, slug) {
    let branch;
    if (slug) {
      if (!parent.getBranch) {
        throw new Error("The branch '" + parent.slug + "' doesn't implement the getBranch method for '" + slug + "'");
      }
      branch = parent.getBranch(slug);
      branch.router = this;
      branch.parent = parent;
      branch.root = parent.root;
      branch.slug = slug;
      let path = '';
      if (parent === this) {
        path = '';
      } else if (parent.slug === 'root') {
        path = slug;
      } else {
        path = parent.path + '/' + slug;
      }
      branch.path = path;
    }
    return branch;
  }

  _hideComplete(event) {
    let interruptTheTransition = false;
    if (this.interruptTransitions && this._interruptingLocations.lenth > 0) {
      const nextInterruptedLocation = this._interruptingLocations[0];
      if (nextInterruptedLocation !== null || nextInterruptedLocation !== undefined) {
        interruptTheTransition = true;
      }
    }
    if (interruptTheTransition) {
      this._inTransition = false;
      const event = new BaseEvent(Router.INTERRUPT, {
        location: this.location,
      });
      this.dispatchEvent(event);
      // this.location = this._interruptingLocations.shift();
      this.changeTheLocation(this._interruptingLocations.shift());
    } else {
      this.branches.push.apply(this.branches, this.show.branches);
      this.show.start();
    }
  }

  _showComplete(event) {
    this._inTransition = false;
    const evt = new BaseEvent(Router.COMPLETE, { location: this.location });
    this.dispatchEvent(evt);
    if (this._interruptingLocations.length > 0) {
      this.changeTheLocation(this._interruptingLocations.shift());
    }
  }

  getBranch(slug) {
    return this.root;
  }

  redirect(path, newPath) {
    if (newPath) {
      this.redirects[path] = newPath;
    } else {
      delete this.redirects[path];
    }
  }

  destroy() {
    this._interruptingLocations = null;
    this.branches = null;
    this.redirects = null;
    this.root = null;
    this.popStateBind = null;
  }

  toString() {
    return '[Router location=' + this.location + ']';
  }
}

