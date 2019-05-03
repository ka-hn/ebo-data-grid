/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ButtonSort from './ButtonSort';

const uuidv1 = require('uuid/v1');

export default class TableHeader extends Component {
  constructor(props) {
    super(props);
    const { headers } = this.props;
    this.state = {
      headers,
    };
  }

  render() {
    const { sort, updateSortSettings } = this.props;
    const { headers } = this.state;
    return !headers.length ? (
      <h1>Loading</h1>
    ) : (
      <div key={uuidv1()} className="tableheader">
        {headers.map(header => (
          <ButtonSort
            key={uuidv1()}
            header={header}
            sort={sort}
            updateSortSettings={updateSortSettings}
          />
        ))}
      </div>
    );
  }
}
