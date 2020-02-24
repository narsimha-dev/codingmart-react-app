import React from 'react';
import {Table, Paper,TableContainer, TableHead } from '@material-ui/core/Table';

const TableFormat=(props)=>{
    const {row, data}=props;
return <TableContainer component={Paper}>
<Table style={{minWidth:650}} aria-label="simple table">
  <TableHead>
    {row}
  </TableHead>
       {data}
</Table>
</TableContainer>
}
export default TableFormat;