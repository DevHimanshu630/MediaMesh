// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Retail from './Pages/Retail';
import TalktoSales from './Pages/TalktoSales';


const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/pricing" element={<Pricing />} />
    // </Routes>
    // <Retail/>
    <TalktoSales/>
    
   
  );
};

export default App;