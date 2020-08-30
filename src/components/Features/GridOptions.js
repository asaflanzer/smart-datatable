import React from 'react';
// mui
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const options = {
  print: false,
  viewColumns: false,
  download: false,
  filterType: 'multiselect',
  pagination: false,
  searchOpen: true,
  searchPlaceholder: 'Feature Name or Description',
  expandableRows: true,
  expandableRowsHeader: false,
  expandableRowsOnClick: true,
  renderExpandableRow: (rowData, rowMeta) => {
    return (
      <TableRow>
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell colSpan={6}>{rowData[2]}</TableCell>
      </TableRow>
    );
  },
  // serverSide: true,
  // onTableChange: (action, tableState) => {
  //   this.xhrRequest('/APICALL', result => {
  //     this.setState({ data: result });
  //   });
  // }
};
