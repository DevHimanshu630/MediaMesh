// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Retail from './Pages/Retail';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/retail" element={<Retail />} />
    </Routes>


  );
};

export default App;