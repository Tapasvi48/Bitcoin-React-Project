import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges.js";
import Loading from "./components/Loading";
import Footer from "./components/Footer";


function App() {
  return (
<Router>
  <Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/coin" element={<Coin/>}/>
<Route path="/coin/:id" element={<CoinDetails/>}/>
<Route path="/exchanges" element={<Exchanges/>}/>
<Route path="/loading" element={<Loading/>}/>
</Routes>
<Footer/>
</Router>
  );
}

export default App;
