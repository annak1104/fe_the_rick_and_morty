import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { CardsList } from './components/CardsList/CardsList';
import { Filter } from './components/Filter/Filter';
import { PaginationComponent } from './components/PaginationComponent/PaginationComponent';

export const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <Filter />
    <CardsList />
    <PaginationComponent />
    <Footer />
    </>
  );
};
