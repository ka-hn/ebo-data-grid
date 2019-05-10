/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

class TableRow extends Component {
  constructor(props) {
    super(props);
    const { rowData } = this.props;
    this.state = {
      rowData,
    };
  }

  onRowClick = () => {
    const { rowData } = this.state;
    const redirectMessage = {
      message: 'ebo.redirect',
      header: `${rowData.district} - ${rowData.id.replace('FS', '')} - ${
        rowData.address
      } - ${rowData.title}`,
      link: rowData.link,
    };
    console.log(redirectMessage);

    window.parent.frames[1].postMessage(redirectMessage, rowData.origin);
  };

  render() {
    const { rowData } = this.state;
    return (
      <div className="tablerow" onClick={this.onRowClick}>
        <div className="tablecell">{rowData.id}</div>
        <div className="tablecell">{rowData.title}</div>
        <div className="tablecell">{rowData.completeaddress}</div>
        <div className="tablecell">{rowData.district}</div>
        <div className="tablecell">{rowData.type}</div>
      </div>
    );
  }
}

export default TableRow;
