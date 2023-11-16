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
    id_package:number,
    price: number,
    title: string,
    image: string,
    description: string,
    id_accommodation: number,
    name : string

}

export function Card({ id_package,price, image, title, description, id_accommodation, name } : CardProps){
    return(
        <StyledCard>
            <StyleImgCard src={image}/>
            <p><b>Id:</b>{id_package}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><b>Valor:</b>{price}</p>
        
        </StyledCard>
    )
}