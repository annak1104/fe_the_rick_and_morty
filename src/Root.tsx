import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CharacterPage } from './components/CharacterPage/CharacterPage';
import { HomePage } from './pages/HomePage/HomePage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path=':characterId' element={<CharacterPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
