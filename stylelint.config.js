const trbl = prefix => {
  let rules = [];

  if (prefix) {
    rules.push(prefix);
  }

  prefix = prefix ? `${prefix}-` : '';

  return rules.concat([
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`,
  ]);
};

const minMax = suffix => [suffix, `min-${suffix}`, `max-${suffix}`];

const border = infix => {
  infix = infix ? `-${infix}` : '';

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
  ];
};

var cssModules = [].concat(['composes']);

var positioning = []
  .concat(['position'])
  .concat(trbl())
  .concat(['z-index']);

var displayAndBoxModel = []
  .concat(['display', 'overflow'])
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat([
    'box-sizing',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order',
  ])
  .concat(trbl('padding'))
  .concat(trbl('border'))
  .concat(trbl('margin'));

var borders = []
  .concat(border())
  .concat(border('top'))
  .concat(border('right'))
  .concat(border('bottom'))
  .concat(border('left'));

module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: 'stylelint-config-standard',
  rules: {
    'no-descending-specificity': null,
    'order/properties-order': [
      []
        .concat(cssModules)
        .concat(positioning)
        .concat(displayAndBoxModel)
        .concat(borders),
      { unspecified: 'bottomAlphabetical' },
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
