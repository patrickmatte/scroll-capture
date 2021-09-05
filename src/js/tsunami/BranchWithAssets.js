import { loadStyle} from "./load/loadStyle";
import { loadHTML } from "./load/loadHTML";
import { loadImage } from "./load/loadImage";
import { loadJSON} from "./load/loadJSON";
import { loadScript } from "./load/loadScript";
import Branch from "./Branch";

export default class BranchWithAssets extends Branch {

	constructor(slug) {
		super(slug);

		this.assets = {
			images:[],
			templates:[],
			scripts:[],
			styles:[],
			jsons:[]
		}
	}

	loadParallel(method, assets, assetList) {
		let promises = [];
		for (let i = 0; i < assets.length; i++) {
			let asset = assets[i];
			let promise = method(asset);
			promises.push(promise);
			assetList.push(promise);
		}
		return Promise.all(promises);
	}

	loadSerie(method, assets, assetList) {
		let promise = new Promise(function(resolve, reject) {
			let elements = [];
			let loadAsset = function(index) {
				let asset = assets[index];
				if (asset) {
					let assetPromise = method(asset);
					assetList.push(assetPromise);
					assetPromise.then(function(element) {
						elements.push(element);
						loadAsset(index + 1);
					});
				} else {
					resolve(elements);
				}
			};
			loadAsset(0);
		});
		return promise;
	}

	load(assetList) {
		let jsons = this.loadParallel(loadJSON, this.assets.jsons, assetList);
		let images = this.loadParallel(loadImage, this.assets.images, assetList);
		let templates = this.loadParallel(loadHTML, this.assets.templates, assetList);
		let styles = this.loadSerie(loadStyle, this.assets.styles, assetList);
		let scripts = this.loadSerie(loadScript, this.assets.scripts, assetList);

		let promise = Promise.all([jsons, images, templates, styles, scripts]);
		return promise.then(this.loadComplete.bind(this));
	}

	loadComplete(assets) {
		this.jsons = assets[0];
		this.images = assets[1];
		this.templates = assets[2];
		this.styles = assets[3];
		this.scripts = assets[4];
	}

	hide() {
		super.hide();
		this.jsons = null;
		this.images = null;
		this.templates = null;
		this.removeElements(this.styles);
		this.styles = null;
		this.removeElements(this.scripts);
		this.scripts = null;
	}

	removeElements(elements) {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];
			if (element.parentNode) {
				element.parentNode.removeChild(element);
			}
		}
	}

}