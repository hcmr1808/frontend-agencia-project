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

function TituloTicket({imagem, children} : Props) {


    return (
        <ContainerEstilizado>
                        <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default TituloTicket;