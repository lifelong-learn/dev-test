import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const content = 
      (this.props.display && this.props.display.length > 0) ?
      (<table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {this.props.display.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>) : <p>List is empty</p>;
    return content;
  }
}

export default UserList;