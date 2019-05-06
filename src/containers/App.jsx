/* eslint-disable func-names */
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
      sort: { order: 'asc', column: 'id' },
    };
    this.updateSortSettings = this.updateSortSettings.bind(this);
  }

  componentDidMount() {
    // This might need a rework, not satisfied here
    const that = this;
    // Add eventlistener
    window.addEventListener('message', function(event) {
      // Create promise to recieve data
      const FetchData = new Promise(function(resolve, reject) {
        let counter = 0;
        const checkForValues = setInterval(function() {
          const { data } = event;

          if (data !== null) {
            resolve(data);
            clearInterval(checkForValues);
          } else {
            if (counter > 10) {
              reject(new Error('No data was recieved for 10 seconds'));
              clearInterval(checkForValues);
            }
            counter += 1;
          }
        }, 200);
      });

      FetchData.then(eventdata => {
        const data = eventdata.map(marker => {
          return {
            id: marker.markerid.trim(),
            title: marker.title.trim(),
            address: `${marker.adress.trim()}, ${marker.postalnumber.trim()}, ${marker.postaltown.trim()}`.trim(),
            district: marker.tags[0].trim(),
            type: marker.type.trim(),
          };
        });

        const headers = [
          { label: 'Fast.nr', id: 'id' },
          { label: 'Namn / kvarter', id: 'title' },
          { label: 'Adress', id: 'address' },
          { label: 'FO', id: 'district' },
          { label: 'Verksamhet', id: 'type' },
        ];

        that.setState({ headers, data });
      });
    });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  onSortChange = () => {
    const { sort } = this.state;
    const { order } = sort;
    const key = sort.column;
    // TODO: For some reason this stupid function returns "Lotterivägen 15, 129 32, Hägersten" as first object when sorting on address...
    return function compare(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  };

  updateSortSettings(newSettings) {
    const { data } = this.state;
    this.setState(newSettings);
    data.sort(this.onSortChange());
  }

  render() {
    const title = 'EBO Data Grid';
    const { headers, data, searchfield, sort } = this.state;
    const sortedData = data.sort(this.onSortChange());
    const filteredData = sortedData.filter(object => {
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
          <TableHeader
            headers={headers}
            sort={sort}
            updateSortSettings={this.updateSortSettings}
          />
          <Table data={filteredData} />
        </div>
      </div>
    );
  }
}

export default App;
