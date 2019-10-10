import EventDispatcher from "./EventDispatcher";
import AssetList from "./AssetList";
import {awaitAnimationFrame, awaitTimeout} from "./await";
import ArrayData from "./data/ArrayData";

export default class Router extends EventDispatcher {

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

		this.show = new RouterTransition(this, "show", this._showComplete.bind(this));
		this.show.tasks = [
			new RouterTask("load", true),
			new RouterTask("show", false)
		];
		this.hide = new RouterTransition(this, "hide", this._hideComplete.bind(this));
		this.hide.tasks = [
			new RouterTask("hide", false)
		];
	}

	static get INTERRUPT() {
		return "interrupt";
	}

	static get CHANGE() {
		return "change";
	}

	static get COMPLETE() {
		return "complete";
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

	set location (value) {
		if (this._debug) {
			console.log("set location", value);
		}

		if (this._inTransition) {
			if (this.goToAllLocations) {
				let lastInterruptingLocation = this._interruptingLocations[this._interruptingLocations.length - 1];
				if (lastInterruptingLocation != value) {
					this._interruptingLocations.push(value);
				}
			} else {
				this._interruptingLocations = [value];
			}
        } else {
			this.changeTheLocation(value);
		}
	};

	changeTheLocation(value) {
		let hashes = value.split("&");
		this.parameters = {};
		for (let i = 0; i < hashes.length; i++) {
			let string = hashes[i];
			let equalIndex = string.indexOf("=");
			if (equalIndex != -1) {
				let hash = [];
				hash[0] = string.substr(0, equalIndex);
				hash[1] = string.substr(equalIndex + 1);
				this.parameters[hash[0]] = hash[1];
			}
		}

		let path = hashes[0];

		// remove slash if it is the last character, we don't need blank pages.
		let lastChar = path.charAt(path.length - 1);
		while (lastChar == "/") {
			path = path.substr(0, path.length - 1);
			lastChar = path.charAt(path.length - 1);
		}

		path = this._applyRedirect(path);

		if (path != this._location) {

			this._inTransition = true;

			this._location = path;

			this.dispatchEvent({type:Router.CHANGE, location:path});

			this._nextLocation = "root";
			if (path != "") {
				this._nextLocation += "/" + path;
			}
			if (this._debug) {
				console.log("_nextLocation", this._nextLocation);
			}

			awaitTimeout(0).then(() => {
				this._startTransitions();
			});
		} else {
			this._showComplete();
		}

	}

	_applyRedirect(path) {
		let redirect = this.redirects[path];
		let newPath;
		if (redirect) {
			newPath = redirect();
		}
		newPath = newPath || path;
		if (newPath != path) {
			newPath = this._applyRedirect(newPath);
		}
		return newPath;
	}

	_startTransitions() {
		let currentLocationArray = this.branches.value.map((branch) => {
			return branch.slug;
		});
		let nextLocationArray = this._nextLocation.split("/");
		let breakIndex = -1;
		for (let i = 0; i < currentLocationArray.length; i++) {
			let branchId = currentLocationArray.slice(0, i + 1).join("/");
			let nextBranchId = nextLocationArray.slice(0, i + 1).join("/");
			if (branchId == nextBranchId) {
				breakIndex = i;
			}
		}
		this.hide.branches = this.branches.splice(breakIndex + 1).reverse();
		let parent = this;
		if (this.branches.length > 0) {
			parent = this.branches.item(this.branches.length - 1);
		}
		let newBranches = [];
		for (let i = breakIndex + 1; i < nextLocationArray.length; i++) {
            let slug = nextLocationArray[i];
			let branch = this.getBranchFromSlug(parent, slug);
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
				let slug = parent.defaultChild;
				let branch = this.getBranchFromSlug(parent, slug);
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
			let path = "";
			if (parent == this ) {
				path = "";
			} else if (parent.slug == "root") {
				path = slug;
			} else {
				path = parent.path + "/" + slug;
			}
			branch.path = path;
		}
		return branch;
	}

	_hideComplete(event) {
		let interruptTheTransition = false;
		if (this.interruptTransitions && this._interruptingLocations.lenth > 0) {
			let nextInterruptedLocation = this._interruptingLocations[0];
			if (nextInterruptedLocation != null || nextInterruptedLocation != undefined) {
				interruptTheTransition = true;
			}
		}
		if (interruptTheTransition) {
			this._inTransition = false;
			this.dispatchEvent({type:Router.INTERRUPT, location:this.location});
			// this.location = this._interruptingLocations.shift();
			this.changeTheLocation(this._interruptingLocations.shift());

		} else {
			this.branches.push.apply(this.branches, this.show.branches);
			this.show.start();
		}
	}

	_showComplete(event) {
		this._inTransition = false;
		this.dispatchEvent({type:Router.COMPLETE, location:this.location});
		let interruptedLocation = this._interruptingLocations[0];
		if (interruptedLocation != null || interruptedLocation != undefined) {
			// this.location = this._interruptingLocations.shift();
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
		return "[Router" + " location=" + this.location + "]";
	}

}


class RouterTransition {

	constructor(router, name, onComplete) {
		this.router = router;
		this.name = name;
		this.onComplete = onComplete;
		this.branches = [];
		this.tasks = [];
	}

	start() {
		if (this.branches.length > 0) {
			let nextTask;
			for (let i = this.tasks.length - 1; i > -1; i--) {
				let task = this.tasks[i];
				task.router = this.router;
				task.branches = this.branches.slice();
				if (nextTask) {
					task.onComplete = nextTask.start.bind(nextTask);
				} else {
					task.onComplete = this.tasksComplete.bind(this);
				}
				nextTask = task;
			}
			let firstTask = this.tasks[0];
			firstTask.start();
		} else {
			this.tasksComplete();
		}
	}

	tasksComplete() {
		this.onComplete();
	}

}

class RouterTask {

	constructor(name, preload) {
		this.name = name;
		this.preload = preload;
		this.branches = [];
		this.router = null;
		this.checkProgressBind = this.checkProgress.bind(this);
	}

	start() {
		this.preloader = null;
		this.assets = [];
		if (this.branches.length > 0) {
			if (this.preload) {
				for (let i = 0; i < this.branches.length; i++) {
					this.assets.push(new AssetList());
				}
				this.assetList = new AssetList(this.assets.slice());
				this.preloader = this.router.preloader;
				if (this.preloader) {
					this.isPreloading = true;
					this.checkProgress();
					let promise = this.preloader.show();
					if (promise) {
						promise.then((obj) => {
							this.startNextBranch();
						});
					} else {
						this.startNextBranch();
					}
				} else {
					this.startNextBranch();
				}
			} else {
				this.startNextBranch();
			}
		} else {
			this.allComplete();
		}
	}

	checkProgress() {
		if (this.assetList) {
			this.preloader.progress = this.assetList.progress;
		}
		if (this.isPreloading) {
			this.animationFrame = requestAnimationFrame(this.checkProgressBind);
		}
	}

	startNextBranch() {
		this.branch = this.branches.shift();
		// let method = this.branch.getMethod(this.name);
		let method = this.branch[this.name];
		if (method) {
		    method = method.bind(this.branch);
			let assetList = this.assets.shift();
			let promise = method(assetList);
			if (promise) {
				promise.then(this.branchComplete.bind(this));
			} else {
				this.branchComplete();
            }
        } else {
			this.branchComplete();
        }
	}

	branchComplete() {
		if (this.branches.length > 0) {
			this.startNextBranch();
		} else {
			if (this.preloader) {
				this.isPreloading = false;
				let promise = this.preloader.hide();
				if (promise) {
					promise.then(this.allComplete.bind(this));
				} else {
					this.allComplete();
				}
			} else {
				this.allComplete();
			}
		}
	}

	allComplete() {
		this.assets = null;
		this.assetList = null;
		this.branches = null;

		awaitAnimationFrame(1).then(() => {
			this.onComplete();
		});
	}

}
