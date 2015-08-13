import React, { PropTypes } from 'react';
import styles from './RegisterPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class RegisterPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Register';

    this.context.onSetTitle(title);

    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
