import UIListBase from '../../lib/tsunami/components/UIListBase';

export class SCTabs extends UIListBase {
  constructor(element) {
    super(element);

    this.templates['router-button'] = html`
      <span class="sc-tab" is="sc-section-tab" set:path="'{scope.data.path}'" set:location="scope.root.location">
        <span class="sc-drag-area"></span>
        <button is="router-button" data-path="{scope.data.path}" title="{scope.data.title}">
          <span class="sc-icon ${scope.data.icon}"></span>
          <span class="sc-label" is="ui-text">${scope.data.title}</span>
        </button>
      </span>
    `;
  }
}
