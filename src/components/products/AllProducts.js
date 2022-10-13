import React from 'react';
import Header from '../layout/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AllProducts() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

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
            {all_products.map((row) => (
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

export default AllProducts;
