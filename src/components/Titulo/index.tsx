import styled from 'styled-components';
import { useState } from 'react';
import { SellerModal } from '../Seller-modal';
import { DriverModal } from '../Driver-modal';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}


const SpanEstilizado = styled.span<Props>`
font-family: Arial, Helvetica, sans-serif;

`

const TituloEstilizado = styled.h2`
 color: var(--azul-escuro);
 font-family: Arial, Helvetica, sans-serif;

`

const ContainerEstilizado = styled.div`
 display: flex;
 align-items: center;
`

const StyledButton = styled.button`
display:flex;
background-color: #061251;
padding: 10px;
color: white;
border-radius: 2px;
border: 1px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
justify-content: space-around;
flex-grow: .1;
margin-left: 80px; 

`

function Titulo({imagem, children} : Props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
      }
    
    const handleOpenModal2 = () => {
        setIsModalOpen2(prev => !prev)
    }

    return (
        <ContainerEstilizado>
                        <TituloEstilizado>{children}</TituloEstilizado>
                        {isModalOpen && <SellerModal closeModal={handleOpenModal}/>}
                        <StyledButton onClick={handleOpenModal}><span>Cadastrar Vendedor</span></StyledButton>
                        {isModalOpen2 && <DriverModal closeModal={handleOpenModal2}/>}
                        <StyledButton onClick={handleOpenModal2}><SpanEstilizado>Cadastrar Motorista</SpanEstilizado></StyledButton>
        </ContainerEstilizado>
    )
}

export default Titulo;