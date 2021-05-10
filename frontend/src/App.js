import './App.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getUserList } from './actions';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="mb-3">Test App</h1>
            <UserForm />
            <UserList display={this.props.display} />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { display } = state;
  return { display };
};

export default connect(mapStateToProps, { getUserList })(UnconnectedApp);
