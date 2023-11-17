import useCountPackageData from "../../hooks-consult/useCountPackageData";
import Container from "../../components/Container"
import TituloTicket from "../../components/Titulo-Ticket";
import React, { useState } from 'react';
import './index.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input className="input" placeholder= "Procurar pacote" value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

function Consults(){
    const [searchTerm, setSearchTerm] = useState('');
    const {data} = useCountPackageData(searchTerm);


    return(
        <Container>
            <TituloTicket>Consultas de reservas de pacotes</TituloTicket>
        <div>
        <label>
        <Input label="" value={searchTerm} updateValue={setSearchTerm}/>
      </label>
        {data ? (
          <div>
            <p>QUANTIDADE: {data.count}</p>
            <p>PACOTE: {data.title}</p>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
      </Container>
    );

}

export default Consults;