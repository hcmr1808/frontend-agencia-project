import { useEffect, useState } from 'react';
import { useSellerDataMutate } from '../../hooks/useSellerDataMutate';
import { SellerData } from '../../interface/ISeller';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { ClientData } from '../../interface/IClient';
import { useClientDataMutate } from '../../hooks/useClientDataMutate';
import { BookingData } from '../../interface/IBooking';
import { useBookingDataMutate } from '../../hooks/useBookingDataMutate';

const StyledOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
`

const StyledBody = styled.div`
    background-color: white;
    padding: 24px;
    height: 80%;
    width: 60%;
    border-radius: 24px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
`

const StyledTitle = styled.h2`
font-size: 32px;
`
const StyledInputContainer = styled.form`
width: calc(100% - 24px);
`
const StyledInput = styled.input`
    padding: 12px;
    border: 2px solid #c6c5c5c5;
    color: rgba(0, 0, 0, 0.9);
    font-size: 18px;
    line-height: 24px;
    border-radius: 12px;
    width: 100%;

    margin-bottom: 12px;
`

const StyledLabel = styled.label`
    color: darkblue;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 18px;
`

const StyledBtnSecondary = styled.button`
    position: relative;
    width: 20%;
    margin-top: 20px;
    right: -300px;
    height: 9%;
    border: 2px;
    border-radius: 2px;
    background-color: #3a44f8;
    transform: scale(1);
    color: white;
    padding: 5px;
`

const StyledCloseButton = styled.button`
    position: absolute;
    top: 70px; 
    left: 950px;
    width: 40px; 
    height: 40px; 
    border-radius: 10px;
    background-color: red;
    margin: 1%;
    border: 2px;
`

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput value={value} onChange={event => updateValue(event.target.value)}></StyledInput>
        </>
    )
}

export function BookingModal({ closeModal }: ModalProps){
    const {mutate, isSuccess, isLoading } = useBookingDataMutate();
    const [id_package, setId_package] = useState(0);
    const [id_client, setId_client] = useState(0);
    const [id_employee, setId_employee] = useState(0);
    const [id_ticket, setId_ticket] = useState(0);
    const [name_client, setName_client] = useState("");
    const [title, setTitle] = useState("");
    const[name, setName] = useState("");

    const submit = () => {
        const bookingData: BookingData = {
            id_package,
            name,
            id_client,
            id_employee,
            id_ticket,
            name_client,
            title
        }
        console.log('Submitting Booking Data:', bookingData);
        mutate(bookingData)
    }
    
    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <StyledOverlay>
            <StyledBody>
                <StyledTitle>Cadastrar Reserva</StyledTitle>
                <StyledInputContainer>
                    <Input label="Id Pacote" value={id_package} updateValue={setId_package}/>
                    <Input label="Id Vendedor" value={id_employee} updateValue={setId_employee}/>
                    <Input label="Id Cliente" value={id_client} updateValue={setId_client}/>
                    <Input label="Id passagem" value={id_ticket} updateValue={setId_ticket}/>
                </StyledInputContainer>
                <StyledBtnSecondary onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'CONFIRMAR'}
                </StyledBtnSecondary>
                <StyledCloseButton className="close-button" onClick={closeModal}>
                <FaTimes />
                </StyledCloseButton>
            </StyledBody>
        </StyledOverlay>
    )
}

