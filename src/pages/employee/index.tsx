import Container from "../../components/Container";
import Tabela from "../../components/EmployeeTable";
import Titulo from "../../components/Titulo";
import { useEmployeeData } from "../../hooks/useEmployeeData";
import { useState } from 'react'

function Employees(){
    const { data } = useEmployeeData();

    console.log("Dados recebidos da API:", data);


    if (!data || data.length === 0) {
      return <p>Nenhum funcionário encontrado.</p>;
    }

    return(
        <>
        <Container>
            <Titulo>Area de Funcionario</Titulo>
            <Tabela employees={data} />
        </Container>
        </>
    )
}

export default Employees;