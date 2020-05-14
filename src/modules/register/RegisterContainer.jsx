import React from 'react';

import { connect } from 'react-redux';
import { setPositionsThunk } from '../../redux/positions';
import Register from './Register';
import { registerUsersThunk } from '../../redux/users-reduser';


class RegisterContainer extends React.Component {
  componentDidMount() {
    this.props.setPositionsThunk();
  }


  render() {
    return (
      <Register
        positions={this.props.positions}
        register={this.props.registerUsersThunk}
      />
    );
  }
}

const mapStateToProps = (state) => (
  {
    positions: state.positions.positions,
  }
);

export default connect(mapStateToProps, { setPositionsThunk, registerUsersThunk })(RegisterContainer);
