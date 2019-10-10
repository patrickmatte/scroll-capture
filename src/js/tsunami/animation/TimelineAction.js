export default class TimelineAction {

	constructor(method, time, direction, repeat) {
		this.method = method;
		this.time = time;
		if (!direction) {
			direction = TimelineAction.FORWARDS;
		}
		this.direction = direction;
		if (isNaN(repeat)) {
			repeat = Infinity;
		}
		this.repeat = repeat;
		this.count = 0;
	}

	static get FORWARDS() {
		return "forwards";
	}

	static get BACKWARDS() {
		return "backwards";
	}

	static get BOTH() {
		return "both";
	}

	execute() {
		this.method();
	}

}
