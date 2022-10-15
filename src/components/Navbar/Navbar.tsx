import React, { Fragment } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FavoritesTable } from './FavoritesTable';
import { CustomDialog } from '../CustomDialog';
import { Favorite } from '@mui/icons-material';
import { observableToOpenModal$ } from '../CustomDialog/CustomDialog';
import { LayoutContainer } from '@/styled-components';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => (observableToOpenModal$.setSubject = true);
  return (
    <Fragment>
      <CustomDialog>
        <LayoutContainer>
          <FavoritesTable />
        </LayoutContainer>
      </CustomDialog>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <IconButton
            color='secondary'
            aria-label='Open Favorites modal'
            component='label'
            onClick={handleClick}
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
