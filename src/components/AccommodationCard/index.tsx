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
    font-family: Arial, Helvetica, sans-serif;

`
const StyleImgCard = styled.img`
    border-radius: 8px 8px 0 0;
    width: 250px;
    height: 200px;
`


interface CardProps {
    name: string,
    id_accommodation: number,
    street: string,
    district: string,
    number: number,
    image: string,
}

export function CardAccommodation({ name, image, street, district, number, id_accommodation } : CardProps){
    return(
        <StyledCard>
            <StyleImgCard src={image}/>
            <h2>{name}</h2>
            <p>{id_accommodation}</p>
            <p><b>Rua:</b>{district}</p>
            <p><b>Bairro:</b>{street}</p>
            <p><b>Numero:</b>{number}</p>
        </StyledCard>
    )
}