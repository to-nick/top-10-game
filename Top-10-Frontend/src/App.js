import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Game from './Pages/Game';
import Category from './Pages/Category';
import Players from './Pages/Players';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/players" element={<Players />} />
          <Route path="/category" element={<Category />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
