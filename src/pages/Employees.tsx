import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { employeesData } from '../data/dummy';
import { Header } from '../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 100 },
  {
    field: 'Name',
    headerName: 'Employee',
    flex: 1,
    minWidth: 200,
    renderCell: (params) => {
      return (
        <div className='flex items-center gap-2'>
          <Avatar src={params.row.EmployeeImage} />
          {params.row.Name}
        </div>
      );
    },
  },
  { field: 'Title', headerName: 'Employee Title', flex: 1, minWidth: 200 },
  {
    field: 'HireDate',
    headerName: 'Date of Hire',
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: 'Country',
    headerName: 'Country',
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: 'ReportsTo',
    headerName: 'Reports To',
    flex: 0.5,
    minWidth: 100,
  },
];

const Employees = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <div style={{ height: 500 }}>
        <DataGrid
          rows={employeesData}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[10, 20, 50]}
          onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
          checkboxSelection
          sx={{
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </div>
  );
};
export default Employees;
