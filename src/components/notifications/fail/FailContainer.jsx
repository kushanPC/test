import React from 'react';

import { connect } from 'react-redux';
import Fail from './Fail';
import { errorStatusOf } from '../../../redux/users-reduser';
import styles from './fail.module.scss';

class FailContainer extends React.Component {
  render() {
    return (
      this.props.status
        ? (
          <Fail
            title={this.props.title}
            description={this.props.description}
            status={this.props.status}
            onClick={this.props.errorStatusOf}
          />
        )
        : <div className={styles.fake} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    title: state.users.error.title,
    description: state.users.error.description,
    status: state.users.error.status,

  }
);

export default connect(mapStateToProps, { errorStatusOf })(FailContainer);
