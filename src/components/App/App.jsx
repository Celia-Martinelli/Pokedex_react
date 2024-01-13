import './App.scss';
import Header from '@/components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import { Container } from 'semantic-ui-react';
import ListPage from '@/pages/List/ListPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import TypesPokemonPage from '@/pages/TypesPokemon/TypesPokemonPage';

function App() {
  return (
    <Container className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/types" element={<TypesPokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
