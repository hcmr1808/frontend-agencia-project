import styled from 'styled-components';
import { useState } from 'react';
import { SellerModal } from '../Seller-modal';
import { DriverModal } from '../Driver-modal';
import { ClientModal } from '../Client-modal';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}


const SpanEstilizado = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
`

const TituloEstilizado = styled.h2`
 color: var(--azul-escuro);
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

function TituloClient({imagem, children} : Props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
      }

    return (
        <ContainerEstilizado>
                        <TituloEstilizado>{children}</TituloEstilizado>
                        {isModalOpen && <ClientModal closeModal={handleOpenModal}/>}
                        <StyledButton onClick={handleOpenModal}><span>Cadastrar Cliente</span></StyledButton>
        </ContainerEstilizado>
    )
}

export default TituloClient;