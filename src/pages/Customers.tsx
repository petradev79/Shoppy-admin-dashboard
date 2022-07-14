import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { RiDeleteBinLine } from 'react-icons/ri';

import { Header } from '../components';
import { customersData } from '../data/dummy';

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 100 },
    {
      field: 'CustomerName',
      headerName: 'Customer Name',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => {
        return (
          <div className='flex items-center gap-2'>
            <Avatar src={params.row.CustomerImage} />
            {params.row.CustomerName}
          </div>
        );
      },
    },
    {
      field: 'ProjectName',
      headerName: 'Project Name',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'Status',
      headerName: 'Status',
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'Weeks',
      headerName: 'Weeks',
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'Budget',
      headerName: 'Budget',
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'Location',
      headerName: 'Location',
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      flex: 0.5,
      minWidth: 100,
      renderCell: (id) => {
        return (
          <Tooltip title='Delete' placement='right'>
            <IconButton onClick={() => handleDelete(id)}>
              <RiDeleteBinLine className='text-xl' />
            </IconButton>
          </Tooltip>
        );
      },
    },
  ];

  const handleDelete = (clickedUser: any) => {
    setCustomers(customers.filter((user) => user.id !== clickedUser.id));
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <div style={{ height: 500 }}>
        <DataGrid
          rows={customers}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[10, 20, 50]}
          onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
          checkboxSelection={false}
          disableSelectionOnClick={true}
        />
      </div>
    </div>
  );
};

export default Customers;
