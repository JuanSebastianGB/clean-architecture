import { People } from '@/DATA/people';
import { addPeople } from '@/redux';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components/PeopleTable';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(addPeople(People));
  }, []);
  return (
    <Fragment>
      <PeopleTable />
    </Fragment>
  );
};

export default Home;
