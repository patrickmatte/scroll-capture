import AssetList from "./AssetList";

export default class RouterTask {
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
                    const promise = this.preloader.show();
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
            const assetList = this.assets.shift();
            const promise = method(this.branch, assetList);
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
                const promise = this.preloader.hide();
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

        window.requestAnimationFrame(() => {
            this.onComplete();
        });
    }
}
