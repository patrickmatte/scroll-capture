import UIComponent from "./UIComponent";
import ExpressionBinding from "./ExpressionBinding";

export default class UIText2 extends UIComponent {

    get model() {
        return this.element.textContent;
    }

    set model(value) {
        this.element.textContent = value;
    }

    get scope() {
        return super.scope;
    }

    set scope(value) {
        super.scope = value;
        let expression = this.model;
        let hasTemplateLiteral1 = (expression.indexOf("`") != -1);
        let hasTemplateLiteral2 = (expression.indexOf("${") != -1);
        if (hasTemplateLiteral1 && hasTemplateLiteral2) {
            let setModel = (value) => {
                this.model = value;
            }
            this.expressionBinding = new ExpressionBinding(setModel, expression, value);
        }
    }

    destroy() {
        if (this.expressionBinding) this.expressionBinding.destroy();
        return super.destroy();
    }

}
