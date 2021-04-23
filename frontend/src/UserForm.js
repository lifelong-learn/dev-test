import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  clearFilter,
  filterAgeOverThirty,
  filterAgeUnderThirty,
  filterGenderMale,
  filterGenderFemale
} from './actions';

class UnconnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 'all',
      gender: 'all'
    };

    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(evt) {
    evt.preventDefault();
    this.props.clearFilter();
    switch (this.state.age) {
      case 'under_30':
        this.props.filterAgeUnderThirty();
        break;
      case 'over_30':
        this.props.filterAgeOverThirty();
        break;
      default:
        break;
    }

    switch (this.state.gender) {
      case 'male':
        this.props.filterGenderMale();
        break;
      case 'female':
        this.props.filterGenderFemale();
        break;
      default:
        break;
    }

  }

  render() {
    const filter = (
      <form className="form-inline">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>
              Age:
              <select
                id="age"
                onChange={(evt) => this.setState({ ...this.state, age: evt.target.value })}
              >
                <option value="all">All</option>
                <option value="under_30">Under 30</option>
                <option value="over_30">Over 30</option>
              </select>
            </label>
          </div>

          <div className="col-sm-6 mb-3">
            <label>
              Gender:
              <select
                id="gender"
                onChange={(evt) => this.setState({ ...this.state, gender: evt.target.value })}
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <button
              className="btn btn-primary"
              onClick={(evt) => this.applyFilter(evt)}
              type="submit"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </form>
    );
    const content = this.props.loading ?
      <h2>Loading...</h2> : filter;
    return content;
  }
}

const mapStateToProps = (state) => {
  const { loading } = state;
  return { loading };
};

const mapDispatchToProps = {
  clearFilter,
  filterAgeOverThirty,
  filterAgeUnderThirty,
  filterGenderMale,
  filterGenderFemale
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedForm);