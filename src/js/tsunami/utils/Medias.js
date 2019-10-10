import EventDispatcher from "../../tsunami/EventDispatcher";

export default class Medias extends EventDispatcher {

	constructor(medias) {
		super();
		this.medias = medias || [];
	}

	static get CHANGE() {
		return "change";
	}

	mqlListener(event) {
		if (event.matches) {
			for (var i = 0; i < this.medias.length; i++) {
				var media = this.medias[i];
				if (media.mql.media == event.media) {
					this.mql = media.mql;
					this.data = media.data;
				}
			}
		}
		this.dispatchEvent({type:Medias.CHANGE});
	}
	
	matchMedia(media, data) {
		var mql = window.matchMedia(media);
		mql.addListener(this.mqlListener.bind(this));
		if (mql.matches) {
			this.mql = mql;
			this.data = data;
		}
		this.medias.push({
			mql:mql,
			data:data
		});
	}

}
