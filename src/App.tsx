import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages from './pages/packages';
import Cabecalho from './components/Cabecalho';
import Employees from './pages/employee';
import { Header } from './components/Header';
import Clients from './pages/clients';
import Admin from './pages/admin';
import Accommodations from './pages/accommodations';
import Tickets from './pages/tickets';
import Consults from './pages/consults';


function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/packages" element={<Packages/>} />
          <Route path="/accommodations" element={<Accommodations/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/consults" element={<Consults/>}/>
        </Routes>
    </BrowserRouter>
  )

}

export default App
