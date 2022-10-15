import { useFavorites } from '@/hooks';
import { Person } from '@/models';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';
export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const { findPerson, handleChange } = useFavorites();
  const pageSize = 5;
  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      flex: 0,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Checkbox
            size='small'
            checked={findPerson(params.row.id)}
            onChange={(): void => handleChange(params.row)}
          />
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  const peopleState = useSelector((store: AppStore): Person[] => store.people);
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={peopleState}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        getRowId={(row: any): number => row.id}
      />
    </div>
  );
};

export default PeopleTable;
