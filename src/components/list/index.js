import React from "react";
import { Image, List } from "semantic-ui-react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList: props.userList ? props.userList : [] };
  }
  render() {
    const { userList } = this.state;
    let users = userList.map((user, index) => {
      return (
        <List.Item key={index}>
          <Image avatar src={user.avatar_url} />
          <List.Content>
            <List.Header>{user.login}</List.Header>
            {user.type}
          </List.Content>
        </List.Item>
      );
    });
    return (
      <div>
        {userList.length === 0 ? (
          <div>
            <span>No users found</span>
          </div>
        ) : (
          <List>
            {users}
          </List>
        )}
      </div>
    );
  }
}

export default UserList;
