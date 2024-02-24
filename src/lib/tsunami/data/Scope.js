import DataModel from './DataModel';

export default class Scope extends DataModel {
  constructor(data, parent = null, provider, index, length) {
    super({ data, parent, provider, index, length });
    // this.data = data;
    // this.parent = parent;
    // this.provider = provider;
    // this.index = index;
    // this.length = length;
  }

  get root() {
    let root = this;
    let parent = this;
    let i = 0;
    while (parent) {
      root = parent;
      parent = root.parent;
      i++;
    }
    return root;
  }

  toString() {
    return 'Scope' + ' ' + this.parent;
  }
}
