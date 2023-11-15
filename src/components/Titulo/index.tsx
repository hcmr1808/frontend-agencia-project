import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';
import { useState } from 'react';
import { SellerModal } from '../Seller-modal';

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

function Titulo({imagem, children} : Props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
      }

    return (
        <ContainerEstilizado>
                        <TituloEstilizado>{children}</TituloEstilizado>
                        {isModalOpen && <SellerModal closeModal={handleOpenModal}/>}
                        <button className="button" onClick={handleOpenModal}><span>Cadastrar Vendedor</span></button>
        </ContainerEstilizado>
    )
}

export default Titulo;