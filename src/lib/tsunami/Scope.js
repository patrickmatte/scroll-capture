import DataModel from './data/DataModel';

export default class Scope extends DataModel {
  constructor(data, parentScope = null, provider, index, length) {
    super({ data, parentScope, provider, index, length });
    // this.data = data;
    // this.parentScope = parentScope;
    // this.provider = provider;
    // this.index = index;
    // this.length = length;
  }

  get rootScope() {
    let rootScope = this;
    let parentScope = this;
    let i = 0;
    while (parentScope) {
      rootScope = parentScope;
      parentScope = rootScope.parentScope;
      i++;
    }
    return rootScope;
  }

  toString() {
    return 'Scope' + ' ' + this.parentScope;
  }
}
