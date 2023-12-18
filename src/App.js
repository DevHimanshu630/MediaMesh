// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Retail from './Pages/Retail';
import TalktoSales from './Pages/TalktoSales';
import DigitalSignage from './Pages/DigitalSignage';
import Tabcontent from './Pages/Tabcontent'
const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/pricing" element={<Pricing />} />
    //   <Route path="/aboutus" element={<About />} />
    //   <Route path="/retail" element={<Retail />} />
    //   <Route path="/talktosales" element={<TalktoSales />} />
    // </Routes>
    <DigitalSignage/>
    // <Demo/>


  );
};

export default App;