import React, { Component } from 'react';
import './App.css';
import Table from './component/Table';
import SearchForm from './component/SearchForm';
import Homepage from './pages/Homepage';
import Api from './utils/api';


class App extends Component {
  state = {
    list: [],
    search: ""
  };
  componentDidMount() {
    Api.getRandomPeople().then(response => {
      console.log(response.data.results)
      this.setState({
        list: response.data.results
      });
    });
  };
  render() {
    return (
      <div className="container">
        <Homepage />
        {/* {console.log(this.state.list)} */}
        <SearchForm />
        <Table list={this.state.list} />

      </div>
    );

  };

};

export default App;
