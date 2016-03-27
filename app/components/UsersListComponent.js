import React from 'react';
import UsersListStore from '../storages/UsersListStore';

const UsersListComponent = React.createClass({
  getInitialState: function() {
    return {
      users: []
    };
  },

  componentDidMount: function() {
    UsersListStore.addChangeListener(this.onUpdate);
  },

  componentWillUnmount: function() {
    UsersListStore.removeChangeListener(this.onUpdate);
  },

  render: function() {
    return (
      <div className="users-list">
        Connected users
        <hr />
        {
          this.state.users.map(function(user) {
            return <p key={user.id}>{user.name}</p>
          })
        }
      </div>
    );
  },

  onUpdate: function() {
    let users = UsersListStore.getAll();

    this.setState({
      users: _.toArray(users)
    });
  }
});

export default UsersListComponent;
