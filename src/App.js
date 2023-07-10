
import './App.css';

import Navbar from './Components/NavBar/NavBar';
import PhoneChart from './Components/PhoneChart/PhoneChart';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import Rechart from './Components/Rechart/Rechart';

function App() {
  return (
    <div >
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <PricingOptions></PricingOptions>
      <Rechart></Rechart>
      <PhoneChart></PhoneChart>
    </div>
  );
}

export default App;
