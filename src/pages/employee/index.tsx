import React, { useState } from 'react';
import Container from "../../components/Container";
import Tabela from "../../components/EmployeeTable";
import TabelaSeller from "../../components/SellerTable";
import TabelaDriver from "../../components/DriverTable"; // Import your DriverTable component
import Titulo from "../../components/Titulo";
import { useEmployeeData } from "../../hooks/useEmployeeData";
import { useSellerData } from "../../hooks/useSellerData";
import { useDriverData } from "../../hooks/useDriverData"; 

function Employees() {
  const { data } = useEmployeeData();
  const { dados } = useSellerData();
  const { dado } = useDriverData(); 
  const [showEmployees, setShowEmployees] = useState(true);
  const [showSellers, setShowSellers] = useState(false);
  const [showDrivers, setShowDrivers] = useState(false);

  console.log("Dados recebidos da API:", data);

  if ((!data || data.length === 0) && (!dados || dados.length === 0) && (!dado || dado.length === 0)) {
    return <p>Nenhum funcionário, vendedor ou motorista encontrado.</p>;
  }

  return (
    <>
      <Container>
        <Titulo>Área de Funcionário</Titulo>
        <div>
          <button onClick={() => { setShowEmployees(true); setShowSellers(false); setShowDrivers(false); }}>Mostrar Funcionários</button>
          <button onClick={() => { setShowEmployees(false); setShowSellers(true); setShowDrivers(false); }}>Mostrar Vendedores</button>
          <button onClick={() => { setShowEmployees(false); setShowSellers(false); setShowDrivers(true); }}>Mostrar Motoristas</button>
        </div>
        {showEmployees && <Tabela employees={data} />}
        {showSellers && <TabelaSeller sellers={dados} />}
        {showDrivers && <TabelaDriver drivers={dado} />} 
      </Container>
    </>
  );
}

export default Employees;
