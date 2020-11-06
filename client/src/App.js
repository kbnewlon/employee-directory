import React, { Component } from 'react';
import './App.css';
import Table from './component/table';
import Input from './component/input';
import Api from './utils/api';

class App extends Component {
  state = {
    list: [],
    search: ""
  }
  componentDidMount() {
    Api.getRandomPeople().then(response => {
      console.log(response.data.results)
      this.setState({
        list: response.data.results
      })
    })
  }
  render() {
    return (
      <div className="container">
        {console.log(this.state.list)}
        <Input />
        <Table list={this.state.list} />

      </div>
    );

  }

}

export default App;
