import React from 'react';

import { connect } from 'react-redux';
import Users from './Users';
import { setUsersThunk, addUsersThunk } from '../../redux/users-reduser';


class UsersContainer extends React.Component {
  componentDidMount() {
    if (window.innerWidth < 500) {
      this.props.setUsersThunk(1, 3);
    } else {
      this.props.setUsersThunk(1, 6);
    }
  }

  render() {
    return (
      <Users
        url={this.props.url}
        users={this.props.users}
        showButton={this.props.showButton}
        addUsersThunk={this.props.addUsersThunk}
      />
    );
  }
}

const mapStateToProps = (state) => (
  {
    users: state.users.users,
    url: state.users.next_url,
    isFetching: state.isFetching,
    showButton: Boolean(state.users.next_url),
  }
);

export default connect(mapStateToProps, { setUsersThunk, addUsersThunk })(UsersContainer);
