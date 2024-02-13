export default class Scope {
  constructor(data, parentScope = null, provider, index, length) {
    this.data = data;
    this.parentScope = parentScope;
    this.provider = provider;
    this.index = index;
    if (!isNaN(this.index)) this.index1 = index + 1;
    this.length = length;
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
