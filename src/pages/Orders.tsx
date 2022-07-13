import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import { Header } from '../components';
import { ordersData } from '../data/dummy';

interface OrdersHeadType {
  id:
    | 'ProductImage'
    | 'OrderItems'
    | 'CustomerName'
    | 'TotalAmount'
    | 'Status'
    | 'OrderID'
    | 'Location';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}

const ordersHead: readonly OrdersHeadType[] = [
  { id: 'ProductImage', label: 'Image', minWidth: 50 },
  { id: 'OrderItems', label: 'Item Name', minWidth: 150 },
  { id: 'CustomerName', label: 'Customer Name', minWidth: 150 },
  {
    id: 'TotalAmount',
    label: 'Total Amount',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'Status', label: 'Status', minWidth: 100, align: 'center' },
  { id: 'OrderID', label: 'Order ID', minWidth: 100 },
  { id: 'Location', label: 'Location', minWidth: 100, align: 'right' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StatusStyle = (id: string, bg: string) =>
  id === 'Status'
    ? {
        backgroundColor: bg,
      }
    : {
        backgroundColor: 'transparent',
      };

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader>
            <TableHead>
              <StyledTableRow>
                {ordersHead.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {ordersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.OrderID}
                    >
                      <TableCell key={'ProductImage'}>
                        <img
                          src={row['ProductImage']}
                          alt=''
                          className='w-12 h-12'
                        />
                      </TableCell>
                      {ordersHead
                        .filter((column) => column.id !== 'ProductImage')
                        .map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <span
                                className='px-4 py-2 rounded'
                                style={StatusStyle(column.id, row.StatusBg)}
                              >
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </span>
                            </TableCell>
                          );
                        })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className='border-t-1'
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={ordersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Orders;
