import React from 'react';
import Header from '../layout/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OutOfStock() {
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [outOfStockArray, setOutOfStockArray] = React.useState([]);

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

  const delivery_list = [
    { id: 2 },

    { id: 5 },

    { id: 6 },

    { id: 7 },

    { id: 8 },

    { id: 10 },
  ];

  const stock = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 9 }];

  let OutOfStock = [];

  const checkOutOfStock = () => {
    let removedVal;

    for (let i = 0; i < delivery_list.length; i++) {
      for (let j = 0; j < stock.length; j++) {
        if (delivery_list[i].id === stock[j].id) {
          console.log(delivery_list[i]);
          removedVal = delivery_list[i];
        }
      }
      if (i === delivery_list.length - 1) {
        OutOfStock = delivery_list.filter((item) => item.id !== removedVal.id);

        let OutOfStockWithName = [];
        for (let i = 0; i < all_products.length; i++) {
          for (let j = 0; j < OutOfStock.length; j++) {
            if (all_products[i].id === OutOfStock[j].id) {
              OutOfStockWithName.push(all_products[i]);
            }
          }
          setOutOfStockArray(OutOfStockWithName);
        }

        setDataLoaded(true);
        console.log(OutOfStockWithName);
      }
    }
  };

  React.useEffect(() => {
    checkOutOfStock();
  }, []);

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ backgroundColor: 'green' }}>
                <b>Product_Id</b>
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: 'green' }}>
                <b>Product_Name</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataLoaded &&
              outOfStockArray.map((row) => (
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

export default OutOfStock;
