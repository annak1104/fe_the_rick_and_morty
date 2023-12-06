import { CardsList } from '../../components/CardsList/CardsList';
import { Filter } from '../../components/Filter/Filter';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';

export const HomePage = () => {
  return (
    <>
      <Filter />
      <CardsList />
      <PaginationComponent />
    </>
  );
};