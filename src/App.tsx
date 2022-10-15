import { Footer, Navbar } from '@/components';
import { Fragment, useEffect, useState } from 'react';
import { Home } from '@/pages';
import { LayoutContainer } from './styled-components';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
