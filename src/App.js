
import './App.css';

import Navbar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import Rechart from './Components/Rechart/Rechart';

function App() {
  return (
    <div >
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <PricingOptions></PricingOptions>
      <Rechart></Rechart>
    </div>
  );
}

export default App;
