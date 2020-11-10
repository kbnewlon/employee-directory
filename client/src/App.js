import React, { Component } from 'react';
import './App.css';
import Table from './component/Table';
import SearchForm from './component/SearchForm';
import Header from './component/Header';
import Api from './utils/api';


class App extends Component {
  state = {
    list: [],
    originalList: [],
    search: ""
  };
  componentDidMount() {
    Api.getRandomPeople().then(response => {
      console.log(response.data.results)
      this.setState({
        list: response.data.results,
        originalList: response.data.results
      });
    });
  };
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(value);
    const newList = this.state.originalList.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      list: newList
    })
  }
  handleSubmit = event => {
    const newList = this.state.list.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first)
    })
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm handleInputChange={this.handleInputChange} search={this.state.search} />
        <Table list={this.state.list} handleSubmit={this.handleSubmit} />

      </div>
    );

  };

};

export default App;
