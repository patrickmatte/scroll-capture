export default class Style {

	constructor(style) {
		this.style = style;
		this.units = new StyleUnits();
		this._transform = "";
		this.updateTransform = this.updateTransform.bind(this);
		this.getTransform = this.getTransform.bind(this);
		this.getTranslate3d = this.getTranslate3d.bind(this);
		this.getRotateX = this.getRotateX.bind(this);
		this.getRotateY = this.getRotateY.bind(this);
		this.getRotateZ = this.getRotateZ.bind(this);
		this.transformBindings = [this.getTransform];
	}

	get bottom() {
		return Number(this.style.bottom.split(this.units.bottom)[0]) || 0;
	}

	set bottom(value) {
		this.style.bottom = value + this.units.bottom;
	}

	get fontSize() {
		return Number(this.style.fontSize.split(this.units.fontSize)[0]) || 0;
	}

	set fontSize(value) {
		this.style.fontSize = value + this.units.fontSize;
	}

	get height() {
		return Number(this.style.height.split(this.units.height)[0]) || 0;
	}

	set height(value) {
		this.style.height = value + this.units.height;
	}

	get left() {
		return Number(this.style.left.split(this.units.left)[0]) || 0;
	}

	set left(value) {
		this.style.left = value + this.units.left;
	}

	get marginBottom() {
		return Number(this.style.marginBottom.split(this.units.marginBottom)[0]) || 0;
	}

	set marginBottom(value) {
		this.style.marginBottom = value + this.units.marginBottom;
	}

	get marginLeft() {
		return Number(this.style.marginLeft.split(this.units.marginLeft)[0]) || 0;
	}

	set marginLeft(value) {
		this.style.marginLeft = value + this.units.marginLeft;
	}

	get marginRight() {
		return Number(this.style.marginRight.split(this.units.marginRight)[0]) || 0;
	}

	set marginRight(value) {
		this.style.marginRight = value + this.units.marginRight;
	}

	get marginTop() {
		return Number(this.style.marginTop.split(this.units.marginTop)[0]) || 0;
	}

	set marginTop(value) {
		this.style.marginTop = value + this.units.marginTop;
	}

	get maxHeight() {
		return Number(this.style.maxHeight.split(this.units.maxHeight)[0]) || 0;
	}

	set maxHeight(value) {
		this.style.maxHeight = value + this.units.maxHeight;
	}

	get opacity() {
		return this._opacity;
		// return (isNaN(this.style.opacity))?1:this.style.opacity;
	}

	set opacity(value) {
		this._opacity = value;
		this.style.opacity = this.round(value);
	}

	get paddingBottom() {
		return Number(this.style.paddingBottom.split(this.units.paddingBottom)[0]) || 0;
	}

	set paddingBottom(value) {
		this.style.paddingBottom = value + this.units.paddingBottom;
	}

	get paddingLeft() {
		return Number(this.style.paddingLeft.split(this.units.paddingLeft)[0]) || 0;
	}

	set paddingLeft(value) {
		this.style.paddingLeft = value + this.units.paddingLeft;
	}

	get paddingRight() {
		return Number(this.style.paddingRight.split(this.units.paddingRight)[0]) || 0;
	}

	set paddingRight(value) {
		this.style.paddingRight = value + this.units.paddingRight;
	}

	get paddingTop() {
		return Number(this.style.paddingTop.split(this.units.paddingTop)[0]) || 0;
	}

	set paddingTop(value) {
		this.style.paddingTop = value + this.units.paddingTop;
	}

	get strokeDashoffset() {
		return (isNaN(this.style.strokeDashoffset))?0:this.style.strokeDashoffset;
	}

	set strokeDashoffset(value) {
		this.style.strokeDashoffset = value;
	}

	get right() {
		return Number(this.style.right.split(this.units.right)[0]) || 0;
	}

	set right(value) {
		this.style.right = value + this.units.right;
	}

	get top() {
		return Number(this.style.top.split(this.units.top)[0]) || 0;
	}

	set top(value) {
		this.style.top = value + this.units.top;
	}

	get width() {
		return Number(this.style.width.split(this.units.width)[0]) || 0;
	}

	set width(value) {
		this.style.width = value + this.units.width;
	}

	transformSpace() {
		return (this.transform)?" ":"";
	}

	get translateX() {
		return (isNaN(this._translateX))?0:this._translateX;
	}

	set translateX(value) {
		this._translateX = value;
		this._transform += this.transformSpace() + "translateX(" + value + this.units.translateX + ")";
	}

	get translateY() {
		return (isNaN(this._translateY))?0:this._translateY;
	}

	set translateY(value) {
		this._translateY = value;
		this._transform += this.transformSpace() + "translateY(" + value + this.units.translateY + ")";
	}

	get translateZ() {
		return (isNaN(this._translateZ))?0:this._translateZ;
	}

	set translateZ(value) {
		this._translateZ = value;
		this._transform += this.transformSpace() + "translateZ(" + value + this.units.translateZ + ")";
	}

	get scale() {
		return this.scaleX;
	}

	set scale(value) {
		this.scaleX = value;
		this.scaleY = value;
	}

	get scaleX() {
		return (isNaN(this._scaleX))?1:this._scaleX;
	}

	set scaleX(value) {
		this._scaleX = value;
		this._transform += this.transformSpace() + "scaleX(" + value + ")";
	}

	get scaleY() {
		return (isNaN(this._scaleY))?1:this._scaleY;
	}

	set scaleY(value) {
		this._scaleY = value;
		this._transform += this.transformSpace() + "scaleY(" + value + ")";
	}

	get scaleZ() {
		return (isNaN(this._scaleZ))?1:this._scaleZ;
	}

	set scaleZ(value) {
		this._scaleZ = value;
		this._transform += this.transformSpace() + "scaleZ(" + value + ")";
	}

	get rotateX() {
		return (isNaN(this._rotateX))?0:this._rotateX;
	}

	set rotateX(value) {
		this._rotateX = value;
		this._transform += this.transformSpace() + "rotateX(" + value + "deg)";
	}

	get rotateY() {
		return (isNaN(this._rotateY))?0:this._rotateY;
	}

	set rotateY(value) {
		this._rotateY = value;
		this._transform += this.transformSpace() + "rotateY(" + value + "deg)";
	}

	get rotateZ() {
		return (isNaN(this._rotateZ))?0:this._rotateZ;
	}

	set rotateZ(value) {
		this._rotateZ = value;
		this._transform += this.transformSpace() + "rotateZ(" + value + "deg)";
	}

	get rotate() {
		return (isNaN(this._rotate))?0:this._rotate;
	}

	set rotate(value) {
		this._rotate = value;
		this._transform += this.transformSpace() + "rotate(" + value + "deg)";
	}

	get skewX() {
		return (isNaN(this._skewX))?0:this._skewX;
	}

	set skewX(value) {
		this._skewX = value;
		this._transform += this.transformSpace() + "skewX(" + value + "deg)";
	}

	get skewY() {
		return (isNaN(this._skewY))?0:this._skewY;
	}

	set skewY(value) {
		this._skewY = value;
		this._transform += this.transformSpace() + "skewY(" + value + "deg)";
	}

	updateTransform() {
		var style = this.style;
		var transform = this.getCalculatedTransform();
		style.msTransform = transform;
		style.webkitTransform = transform;
		style.transform = transform;
		this.setTransform("");
	}

	setTransform(value) {
		this._transform = value;
	}

	getTransform() {
		return this._transform;
	}

	getCalculatedTransform() {
		let transform = "";
		for (let i = 0; i < this.transformBindings.length; i++) {
			if (i > 0) {
				transform += " ";
			}
			let method = this.transformBindings[i];
			transform += method();
		}
		return transform;
	}

	getTranslate3d() {
		return "translate3d(" + this.round(this.translateX) + this.units.translateX + ", " + this.round(this.translateY) + this.units.translateY + "," + this.round(this.translateZ) + this.units.translateZ + ")";
	}

	getRotateX() {
		return "rotateX(" + this.round(this.rotateX) + "deg)";
	}

	getRotateY() {
		return "rotateY(" + this.round(this.rotateY) + "deg)";
	}

	getRotateZ() {
		return "rotateZ(" + this.round(this.rotateZ) + "deg)";
	}

	destroy() {
		this.style = null;
	}

	round(value) {
		return Math.round(value * 10) / 10;
	}
}

export class StyleUnits {

	constructor() {
		this.fontSize = "px";
		this.marginTop = "px";
		this.marginBottom = "px";
		this.marginRight = "px";
		this.marginLeft = "px";
		this.paddingTop = "px";
		this.paddingBottom = "px";
		this.paddingRight = "px";
		this.paddingLeft = "px";
		this.width = "px";
		this.height = "px";
		this.maxHeight = "px";
		this.left = "px";
		this.top = "px";
		this.right = "px";
		this.bottom = "px";
		this.translateX = "px";
		this.translateY = "px";
		this.translateZ = "px";
	}

}