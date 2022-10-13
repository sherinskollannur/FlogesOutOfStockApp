import React from 'react';
import Header from '../layout/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DeliveryList() {
  const all_products = [
    { id: 1, name: 'Product 1' },

    { id: 2, name: 'Product 2' },

    { id: 3, name: 'Product 3' },

    { id: 4, name: 'Product 4' },

    { id: 5, name: 'Product 5' },

    { id: 6, name: 'Product 6' },

    { id: 7, name: 'Product 7' },

    { id: 8, name: 'Product 8' },

    { id: 9, name: 'Product 9' },

    { id: 10, name: 'Product 10' },
  ];

  const delivery_list = all_products.filter((item) => {
    return (
      item.id === 2 ||
      item.id === 5 ||
      item.id === 6 ||
      item.id === 7 ||
      item.id === 8 ||
      item.id === 10
    );
  });

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {delivery_list.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DeliveryList;
