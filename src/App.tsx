import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./bank/Header";
import RegistrationCard from "./bank/RegistrationCard";
import ShowCart from "./bank/ShowCards";
import Trasaction from './bank/Transaction'
import TransferCard from './bank/TransferCard'

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <div className="container">
      <Routes>
        <Route index element={<RegistrationCard />} />
        <Route path="/info" element={<RegistrationCard />} />
        <Route path="/transfer" element={<TransferCard />} />
        <Route path="/tarakonesh" element={<Trasaction />} />
      </Routes>
         <ShowCart/>
      </div>
     
    </BrowserRouter>
  </div>
  );
}

export default App;
