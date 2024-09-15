import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from './pages/contact/contact';
//import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer/Footer"; // Import Footer
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
   
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  
  );

}

export default App;
