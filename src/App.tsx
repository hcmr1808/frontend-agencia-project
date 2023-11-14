import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages from './pages/packages';
import Cabecalho from './components/Cabecalho';
import Employees from './pages/employee';
import { Header } from './components/Header';


function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/packages" element={<Packages/>} />
          <Route path="/employees" element={<Employees/>}/>
        </Routes>
    </BrowserRouter>
  )

}

export default App
