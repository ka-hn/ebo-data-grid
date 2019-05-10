import React, { Component } from 'react';
import './App.css';
import TableHeader from '../components/TableHeader';
import TableTop from '../components/TableTop';
import Table from '../components/Table';
/* import TestData from '../dev/testdata-markers-sisab'; */

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      data: [],
      searchfield: '',
      sort: { order: 'asc', column: 'id' },
      settings: [],
    };
    this.updateSortSettings = this.updateSortSettings.bind(this);
  }

  componentDidMount() {
    const THAT = this;

    window.addEventListener('message', function messageListener(event) {
      // Create promise to recieve data
      const FETCHDATA = new Promise(function fetchData(resolve, reject) {
        let counter = 0;
        const CHECKFORVALUES = setInterval(function checkForvalues() {
          const { data } = event;
          // Check that data and headers exist
          if (
            data.headers.length &&
            data.rows.length &&
            data.module_info.name === 'ebo-data-grid'
          ) {
            resolve(data);
            clearInterval(CHECKFORVALUES);
          } else {
            if (counter > 10) {
              reject(new Error('No data was recieved for 10 seconds'));
              clearInterval(CHECKFORVALUES);
            }
            counter += 1;
          }
        }, 1000);
      });

      FETCHDATA.then(eventdata => {
        const data = eventdata.rows.map(marker => {
          return {
            id: marker.markerid.trim(),
            title: marker.title.trim(),
            address: marker.adress.trim(),
            postalnumber: marker.postalnumber.trim(),
            postalrown: marker.postaltown.trim(),
            completeaddress: `${marker.adress.trim()}, ${marker.postalnumber.trim()}, ${marker.postaltown.trim()}`.trim(),
            district: marker.tags[0].trim(),
            type: marker.type.trim(),
            link: marker.sbolink.trim(),
            origin: eventdata.eboTGMLOrigin.trim(),
          };
        });

        const headers = eventdata.headers.map(header => {
          return { label: header.label, id: header.id };
        });

        const { settings } = eventdata.module_info;

        THAT.setState({ headers, data, settings });
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

    return function compare(a, b) {
      if (
        !Object.prototype.hasOwnProperty.call(a, key) ||
        !Object.prototype.hasOwnProperty.call(b, key)
      ) {
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
    let title = 'EBO Data Grid';
    const { headers, data, searchfield, sort, settings } = this.state;
    const sortedData = data.sort(this.onSortChange());
    const filteredData = sortedData.filter(object => {
      return JSON.stringify(object)
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    if (settings) {
      title = settings.headertitle;
    }

    return !data.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="app">
        <TableTop
          title={title}
          searchChange={this.onSearchChange}
          settings={settings}
        />
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
