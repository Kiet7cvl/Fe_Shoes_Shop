
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './screens/HomePage';
import ListProduct from './screens/ListProduct';
import DetailProduct from './screens/DetailProduct';
import Cart from './screens/Cart';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Checkout from './screens/CheckOut';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Header /> */}
        {/* <HomePage /> */}
        {/* <ListProduct />  */}
        {/* <DetailProduct/> */}
        {/* <Cart/> */}
        {/* <Signin/> */}
        {/* <Signup/> */}
        <Checkout/>
        {/* <Footer /> */}
      </div>

    </>
  );
}

export default App;
