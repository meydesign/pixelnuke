import React from 'react';
import ImmutabilityHelper from '../utils/immutabilityHelper';
import Styles from '../utils/styles';

module.exports = {
  propTypes: {
    style: React.PropTypes.object,
  },

  mergeStyles() {
    return ImmutabilityHelper.merge.apply(this, arguments);
  },

  mergeAndPrefix() {
    return Styles.mergeAndPrefix.apply(this, arguments);
  },
};
