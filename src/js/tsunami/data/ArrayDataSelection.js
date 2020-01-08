import ObjectData from "./ObjectData";
import Data from "./Data";
import NumberData from "./NumberData";

export default class ArrayDataSelection {

	constructor(arrayData = null, itemProp = "isSelectedItem") {
		this.arrayData = arrayData;
		this.itemProp = itemProp;

		this.selectedItem = new ObjectData();
		this.selectedItemChange = this.selectedItemChange.bind(this);
		this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);

		this.selectedIndex = new NumberData();
		this.selectedIndexChange = this.selectedIndexChange.bind(this);
		this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);

		this.nextIndex = new NumberData();
		this.prevIndex = new NumberData();
	}

	selectedItemChange(event) {
		this.selectedIndex.removeEventListener(Data.CHANGE, this.selectedIndexChange);
		let index = this.arrayData.value.indexOf(this.selectedItem.value);
		this.selectedIndex.value = index;
		this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);
		this.setSelectedData(this.selectedItem.value);
	}

	setSelectedData(value) {
		if(this.previousSelectedItem) {
			if(this.previousSelectedItem[this.itemProp] instanceof Data) {
				this.previousSelectedItem[this.itemProp].value = false;
			}
		}
		if (this.selectedData) {
			this.selectedData.copy(value);
		}
		this.previousSelectedItem = value;
		if(this.previousSelectedItem) {
			if(this.previousSelectedItem[this.itemProp] instanceof Data) {
				this.previousSelectedItem[this.itemProp].value = true;
			}
		}

		let index = this.selectedIndex.value;

		let nextIndex = index + 1;
		if(nextIndex > this.arrayData.value.length - 1) {
			nextIndex = 0;
		}
		this.nextIndex.value = nextIndex;
		if(this.nextData) {
			this.nextData.copy(this.arrayData.value[this.nextIndex.value]);
		}

		let prevIndex = index - 1;
		if(prevIndex < 0) {
			prevIndex = this.arrayData.value.length - 1;
		}
		this.prevIndex.value = prevIndex;
		if(this.prevData) {
			this.prevData.copy(this.arrayData.value[this.prevIndex.value]);
		}
	}

	selectedIndexChange(event) {
		let index = this.selectedIndex.value;
		this.selectedItem.removeEventListener(Data.CHANGE, this.selectedItemChange);
		this.selectedItem.value = this.arrayData.value[index];
		this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);
		this.setSelectedData(this.selectedItem.value);
	}

}