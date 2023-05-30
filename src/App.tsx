import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Actual } from './pages/Actual';
import { Cooperation } from './pages/Cooperation';
import { Page404 } from './pages/Page404';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actual" element={<Actual />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};
