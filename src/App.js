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
import DigitalSignage from './Pages/DigitalSignage';
import Dooh from './Pages/Dooh';
import Services from './Pages/Services';
import Learn from './Pages/Learn';
import GovernmentAndNgo from "./Pages/GovernmentAndNgo"
import CaseStudies from './Pages/CaseStudies';
import New from './Pages/new';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/retail" element={<Retail />} />
      <Route path="/talktosales" element={<TalktoSales />} />
      <Route path="/healthcare" element={<HealthCare />} />
      <Route path="/hospitality" element={<Hospitality />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path='/digital-signage-software' element={<DigitalSignage />} />
      <Route path='/dooh' element={<Dooh />} />
      <Route path='/government-and-ngo' element={<GovernmentAndNgo />} />
      <Route path='/ourservices' element={<Services />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/casestudies' element={<CaseStudies />} />
      <Route path='/new' element={<New />} />
   
    </Routes>


  );
};

export default App;