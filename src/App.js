import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';

function App() {
  return (
    <div >
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <PricingOptions></PricingOptions>
    </div>
  );
}

export default App;
