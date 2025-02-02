import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Game from './Pages/Game';
import Category from './Pages/Category';
import PlayersPage from './Pages/PlayersPage';
import HowToPlay from './Pages/HowToPlay';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/game" element={<Game />} />
          <Route path="how-to-play" element={<HowToPlay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
