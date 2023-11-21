import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { ClientData } from '../../interface/IClient';
import { useClientUpdateData } from '../../hooks/useClientUpdateData';

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
    background-color: lightgray;
    padding: 8px;
    height: 45%;
    width: 60%;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
`

const StyledTitle = styled.h2`
font-size: 18px;
`
const StyledInputContainer = styled.form`
width: calc(100% - 24px);
`
const StyledInput = styled.input`
    padding: 2px;
    border: 2px solid #c6c5c5c5;
    color: rgba(0, 0, 0, 0.9);
    font-size: 15px;
    line-height: 4px;
    border-radius: 0px;
    width: 100%;
    margin-bottom: 2px;
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
    margin-top: 1px;
    right: -300px;
    height: 8%;
    border: 1px;
    border-radius: 2px;
    background-color: #3a44f8;
    transform: scale(1);
    color: white;
    padding: 5px;
`

const StyledCloseButton = styled.button`
    position: absolute;
    top: 170px; 
    left: 950px;
    width: 30px; 
    height: 30px; 
    border-radius: 10px;
    background-color: blue;
    color:white;
    margin: 1%;
    border: 2px;
`

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal: (arg?: any) => void; 
    cliente : ClientData;
}




const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput value={value} onChange={event => updateValue(event.target.value)}></StyledInput>
        </>
    )
}

export function ClientEdit({ closeModal, cliente }: ModalProps){
    console.log('Dados do cliente em ClientEdit:', cliente);
    const {mutate, isSuccess, isLoading } = useClientUpdateData();
    const[id_client, setId_client] = useState(0);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");

    const submit = () => {
        const clientData: ClientData = {
            id_client,
            cpf,
            name,
            email,
            phone_number
        }
        console.log('Submitting Client Data:', clientData);
        mutate(clientData)
    }
    
    useEffect(() => {
        if (cliente) {
            setId_client(cliente.id_client);
            setCpf(cliente.cpf);
            setEmail(cliente.email);
            setName(cliente.name);
            setPhone_number(cliente.phone_number);
        }
    }, [cliente]);


    return(
        <StyledOverlay>
            <StyledBody>
                <StyledTitle>Editar Client</StyledTitle>
                <StyledInputContainer>
                    <Input label="Cpf" value={cpf} updateValue={setCpf}/>
                    <Input label="Email" value={email} updateValue={setEmail}/>
                    <Input label="Name" value={name} updateValue={setName}/>
                    <Input label="Phone Number" value={phone_number} updateValue={setPhone_number}/>
                </StyledInputContainer>
                <StyledBtnSecondary onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'editar'}
                </StyledBtnSecondary>
                <StyledCloseButton className="close-button" onClick={closeModal}>
                <FaTimes />
                </StyledCloseButton>
            </StyledBody>
        </StyledOverlay>
    )
}

