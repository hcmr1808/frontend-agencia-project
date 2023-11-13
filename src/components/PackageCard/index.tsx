import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 0;
`
const StyleImgCard = styled.img`
    border-radius: 8px 8px 0 0;
    width: 250px;
    height: 200px;
`


interface CardProps {
    price: number,
    title: string,
    image: string,
    description: string
}

export function Card({ price, image, title, description } : CardProps){
    return(
        <StyledCard>
            <StyleImgCard src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><b>Valor:</b>{price}</p>
        </StyledCard>
    )
}