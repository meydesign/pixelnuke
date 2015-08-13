const AutoPrefix = require('../styles/autoPrefix');
const ImmutabilityHelper = require('./immutabilityHelper');

module.exports = {
  mergeAndPrefix() {
    const mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);

    return AutoPrefix.all(mergedStyles);
  },
};
