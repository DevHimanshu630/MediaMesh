// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Retail from './Pages/Retail';
import TalktoSales from './Pages/TalktoSales';
import HealthCare from './Pages/HealthCare';
import Hospitality from './Pages/Hospitality';
import Corporate from './Pages/Corporate';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/retail" element={<Retail />} />
      <Route path="/talktosales" element={<TalktoSales />} />
      <Route path="/Healthcare" element={<HealthCare />} />
      <Route path="/Hospitality" element={<Hospitality />} />
      <Route path="/Corporate" element={<Corporate />} />
    </Routes>
  );
};

export default App;