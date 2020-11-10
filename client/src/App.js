import React, { Component } from 'react';
import './App.css';
import Table from './component/Table';
import SearchForm from './component/SearchForm';
import Header from './component/Header';
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
        <Header />
        <SearchForm />
        <Table list={this.state.list} />

      </div>
    );

  };

};

export default App;
