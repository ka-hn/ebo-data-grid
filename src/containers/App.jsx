import React, { Component } from 'react';
import './App.css';
import TableHeader from '../components/TableHeader';
import TableTop from '../components/TableTop';
import Table from '../components/Table';
import TestData from '../dev/testdata-markers-sisab';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      data: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    const headers = [
      { label: 'Fast.nr', id: 'id' },
      { label: 'Namn / kvarter', id: 'title' },
      { label: 'Adress', id: 'address' },
      { label: 'FO', id: 'district' },
      { label: 'Verksamhet', id: 'type' },
    ];

    const data = TestData.map(marker => {
      return {
        id: marker.markerid,
        title: marker.title,
        address: `${marker.adress}, ${marker.postalnumber}, ${
          marker.postaltown
        } `,
        district: marker.tags[0],
        type: marker.type,
      };
    });

    this.setState({ headers, data });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const title = 'EBO Data Grid';

    const { headers, data, searchfield } = this.state;

    const filteredData = data.filter(object => {
      return JSON.stringify(object)
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return !data.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="app">
        <TableTop title={title} searchChange={this.onSearchChange} />
        <div className="table">
          <TableHeader headers={headers} />
          <Table data={filteredData} />
        </div>
      </div>
    );
  }
}

export default App;
