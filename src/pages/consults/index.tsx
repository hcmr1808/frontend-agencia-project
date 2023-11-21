import useCountPackageData from "../../hooks-consult/useCountPackageData";
import Container from "../../components/Container"
import TituloTicket from "../../components/Titulo-Ticket";
import React, { useState, useEffect } from 'react';
import './index.css'
import useGuidePackageData from "../../hooks-consult/useGuidePackageData";
import useTicketPackageData from "../../hooks-consult/useTicketPackageData";
import useAccommodationListData from "../../hooks-consult/useAccommodationListData";
import useCountSellsData from "../../hooks-consult/useCountSellsData";
import useMaxPackageSellData from "../../hooks-consult/useMaxPackageSellData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input className="input" placeholder= "Search" value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

function Consults(){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [searchTerm3, setSearchTerm3] = useState('');
    const [searchTerm4, setSearchTerm4] = useState('');
    const [searchTerm5, setSearchTerm5] = useState('');
    const {data} = useCountPackageData(searchTerm);
    const {data2} = useGuidePackageData(searchTerm2);
    const {data3} = useTicketPackageData(searchTerm3);
    const {data4} = useAccommodationListData(searchTerm4);
    const {data5} = useCountSellsData(searchTerm5);

    const { data6 } = useMaxPackageSellData();
   
    return(
        <Container>
            <TituloTicket>Consultas de reservas de pacotes</TituloTicket>
        <div className="body">
        <label>
        <Input label="" value={searchTerm} updateValue={setSearchTerm}/>
      </label>
        {data ? (
          <div>
            <p className="p">QUANTIDADE: {data.count}</p>
            <p className="p">PACOTE: {data.title}</p>
          </div>
        ) : (
          <p className="p">Consulta...</p>
        )}
      </div>
      <TituloTicket>Consultas de roteiro de viagens</TituloTicket>
      <div className="body">
        <label>
        <Input label="" value={searchTerm2} updateValue={setSearchTerm2}/>
      </label>
        {data2 ? (
          <div>
            <p className="p">ROTEIRO: {data2.description}</p>
          </div>
        ) : (
          <p className="p">Consulta...</p>
        )}
      </div>
      <TituloTicket>Consultar hospedagens disponiveis de um pacote</TituloTicket>
      <div className="body">
        <label>
        <Input label="" value={searchTerm4} updateValue={setSearchTerm4}/>
      </label>
      {data4 ? (
        <div>
          <p className="p">HOSPEDAGENS:</p>
          <ul>
            {data4.map((accommodation, index) => (
              <li className="p" key={index}>{accommodation.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="p">Consulta...</p>
      )}
      </div>
      <TituloTicket>Consultar quantidade de vendas pelo cpf</TituloTicket>
      <div className="body">
        <label>
        <Input label="" value={searchTerm5} updateValue={setSearchTerm5}/>
      </label>
        {data5 ? (
          <div>
            <p className="p">CARGA HORÁRIA: {data5.workload}</p>
            <p className="p">QUANTIDADE DE VENDAS: {data5.count_sells}</p>
          </div>
        ) : (
          <p className="p">Consulta...</p>
        )}
      </div>
      <TituloTicket>Maxima venda de pacote</TituloTicket>
      <div className="body">
        {data6 ? (
          <div>
            <p className="p">Id pacote: {data6.id_package}</p>
            <p className="p">MAIOR VENDA: {data6.max_reservas}</p>
          </div>
        ) : (
          <p className="p">Consulta...</p>
        )}
      </div>
      
      </Container>
    );

}

export default Consults;