import './App.css';
import Footer from './components/Footer';
import SetInfo from './components/Setinfo'
import Navbar from './components/Navbar';
import Shipping_Address from './components/Shipping_Address';
import Payment_info from './components/Payment_info';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SetInfo/>
      <Shipping_Address/>
      <Payment_info/>
     <Footer/>
    </div>
  );
}

export default App;
