import { localStorageTypes, Person } from '@/models';
import { removeFavorite } from '@/redux';
import { AppStore } from '@/redux/store';
import { setLocalStorage } from '@/utilities';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface FavoritesTableInterface {}

const FavoritesTable: React.FC<FavoritesTableInterface> = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((store: AppStore): Person[] => store.favorites);
  const filterPersons = (id: number): Person[] =>
    favorites.filter((favorite: Person): boolean => favorite.id !== id);
  const handleClick = (person: Person): void => {
    const filteredPeople = filterPersons(person.id);
    dispatch(removeFavorite(filteredPeople));
    setLocalStorage(
      localStorageTypes.FAVORITES,
      JSON.stringify(filteredPeople)
    );
  };
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
          <IconButton
            color='secondary'
            aria-label='add an alarm'
          >
            <Delete onClick={(): void => handleClick(params.row)} />
          </IconButton>
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
  const favoritesState = useSelector((store: AppStore) => store.favorites);
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={favoritesState}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};

export default FavoritesTable;
