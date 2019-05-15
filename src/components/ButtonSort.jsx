/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { Component } from 'react';

const uuidv1 = require('uuid/v1');

export default class ButtonSort extends Component {
  constructor(props) {
    super(props);

    const { header, sort } = this.props;
    this.state = {
      header,
      sort,
    };
    this.changeSortDirection = this.changeSortDirection.bind(this);
  }

  changeSortDirection() {
    const { updateSortSettings } = this.props;
    const { sort, header } = this.state;
    const newSort = {
      sort: {
        order: sort.order === 'asc' ? 'desc' : 'asc',
        column: header.id,
      },
    };
    this.setState(newSort);
    updateSortSettings(newSort);
  }

  render() {
    const { sort, header } = this.state;
    const color = header.id === sort.column ? '#304760' : '#e2e9ef';

    return (
      <div
        role="button"
        key={uuidv1()}
        className="th"
        onClick={this.changeSortDirection}
      >
        {header.label}
        <div
          className={
            sort.order === 'desc' ? 'sortarrow rotate180' : 'sortarrow'
          }
        >
          <svg
            display="flex"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 36 36"
            version="1.1"
          >
            <path d="M31.06,11,18,24.06,4.94,11Z" stroke={color} fill={color} />
          </svg>
        </div>
      </div>
    );
  }
}
