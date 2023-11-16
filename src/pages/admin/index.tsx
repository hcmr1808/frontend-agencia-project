import { useState } from "react";
import Container from "../../components/Container";
import TabelaPackagesAccommodations from "../../components/PackageAccommodationTable";
import TituloTicket from "../../components/Titulo-Ticket";
import { usePackageAccommodationData } from "../../hooks/usePackageAccommodationData";
import { PackageAccommodationModal } from "../../components/PackageAccommodation-modal";
import styled from "styled-components";
import TabelaBooking from "../../components/BookingTable";
import { useBookingData } from "../../hooks/useBookingData";
import { BookingModal } from "../../components/Bookind-modal";

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

function Admin(){
    const {data} = usePackageAccommodationData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const {dados} = useBookingData();

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    const handleOpenModal2 = () => {
        setIsModalOpen2(prev => !prev)
    }

    return(
        <Container>
            <TituloTicket>Adicionar hospedagem ao pacote</TituloTicket>
            {isModalOpen && <PackageAccommodationModal closeModal={handleOpenModal}/>}
            <StyledButton onClick={handleOpenModal}><StyledSpan>Adicionar</StyledSpan></StyledButton>
            <TabelaPackagesAccommodations packages={data}/>
            <TituloTicket>Criar Reservas</TituloTicket>
            {isModalOpen2 && <BookingModal closeModal={handleOpenModal2}/>}
            <StyledButton onClick={handleOpenModal2}><StyledSpan>Adicionar</StyledSpan></StyledButton>
            <TabelaBooking bookings={dados}/>
         
        </Container>
    );

}

export default Admin;