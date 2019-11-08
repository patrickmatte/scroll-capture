import * as tsunami from "./tsunami/tsunami";
import UIComponent from "./tsunami/components/UIComponent";
import UIButton from "./tsunami/components/UIButton";
import UIList from "./tsunami/components/UIList";
import UIInput from "./tsunami/components/UIInput";
import UISelect from "./tsunami/components/UISelect";
import UIText from "./tsunami/components/UIText";
import UINumber from "./tsunami/components/UINumber";
import UIScrollpane from "./tsunami/components/UIScrollpane";
import UIImage from "./tsunami/components/UIImage";
import UIToggle from "./tsunami/components/UIToggle";

export default class App {

	constructor() {
		tsunami.define("ui-component", UIComponent);
		tsunami.define("ui-button", UIButton);
		tsunami.define("ui-list", UIList);
		tsunami.define("ui-input", UIInput);
		tsunami.define("ui-select", UISelect);
		tsunami.define("ui-text", UIText);
		tsunami.define("ui-number", UINumber);
		tsunami.define("ui-scrollpane", UIScrollpane);
		tsunami.define("ui-image", UIImage);
		tsunami.define("ui-toggle", UIToggle);
	}

}