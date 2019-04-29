import React, { Component } from 'react';
import './App.css';
import TableHeader from '../components/TableHeader';
import TableTitle from '../components/TableTitle';
import SearchBox from '../components/SearchBox';
import TableRows from '../components/TableRows';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      rows: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    const headers = [
      { label: 'Fast.nr', id: 'markerid' },
      { label: 'Namn / kvarter', id: 'title' },
      { label: 'Adress', id: 'addressFull' },
      { label: 'FO', id: 'district' },
      { label: 'Verksamhet', id: 'type' },
    ];

    const rows = [
      {
        markerid: 'FS0010',
        title: 'Askebyskolan',
        addressFull: 'Askebykroken 22, 163 70, Spånga',
        district: 'FO5',
        type: 'Skola',
      },
    ];

    this.setState({ headers, rows });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const title = 'EBO Data Grid';

    const { rows, searchfield, headers } = this.state;
    const filteredRows = rows.filter(row => {
      return row.title.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !rows.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <div className="TableTop">
          <TableTitle title={title} />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <TableHeader headers={headers} />
        <Scroll>
          <TableRows rows={filteredRows} />
        </Scroll>
      </div>
    );
  }
}

export default App;
