import styled from "styled-components";
import Container from "../../components/Container";
import Tabela from "../../components/EmployeeTable";
import { TicketModal } from "../../components/Ticket-modal";
import TabelaTicket from "../../components/TicketTable";
import TituloTicket from "../../components/Titulo-Ticket";
import { useTicketData } from '../../hooks/useTicketData';
import { useState } from "react";



function Tickets() {


    const StyledButton = styled.button`

    background-color: #D0D0D0;
    color: black;
    font-weight: bold;
    bottom: 16px;
    right: 24px;
    transition: all 0.1s linear 0.1s;
    border: 1px solid black;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
    transform: scale(1);
`
const StyledSpan = styled.span`
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
    padding-right: 25px;

`

  const { data } = useTicketData();
  const[IsModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
}


  console.log("Dados recebidos da API:", data);

  if ((!data || data.length === 0)) {
    return <p>Nenhuma passagem.</p>;
  }

  return (
    <>
      <Container>
        <TituloTicket>Cadastrar ticket</TituloTicket>
        <TabelaTicket tickets={data}/>
        {IsModalOpen && <TicketModal closeModal={handleOpenModal}/>}
            <StyledButton onClick={handleOpenModal}><StyledSpan>Adicionar</StyledSpan></StyledButton>
      </Container>
    </>
  );
}

export default Tickets;
