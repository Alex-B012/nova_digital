import { Route, Routes } from 'react-router-dom';
import './App.scss';
import TitleUpdater from './components/TitleUpdater/TitleUpdater';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './layouts/Footer/Footer';

import { footer_data } from './data/data';

function App() {
  return (
    <div className="App">
      <TitleUpdater />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer data={footer_data} />
    </div>
  );
}

export default App;
