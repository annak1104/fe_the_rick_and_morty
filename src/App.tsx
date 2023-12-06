import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Filter } from './components/Filter/Filter';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import { PaginationComponent } from './components/PaginationComponent/PaginationComponent';

export const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <Filter />
    <CharacterCard />
    <PaginationComponent />
    <Footer />
    </>
  );
};
