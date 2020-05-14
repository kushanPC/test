import React from 'react';

import { connect } from 'react-redux';
import Success from './Success';
import { setSuccessData } from '../../../redux/users-reduser';
import styles from './success.module.scss';

class SuccessContainer extends React.Component {
  render() {
    return (
      this.props.status
        ? (
          <Success
            status={this.props.status}
            onClick={this.props.setSuccessData}
          />
        )
        : <div className={styles.fake} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    status: state.users.success,
  }
);

export default connect(mapStateToProps, { setSuccessData })(SuccessContainer);
