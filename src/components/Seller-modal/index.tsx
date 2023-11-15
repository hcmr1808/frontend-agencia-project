import { useEffect, useState } from 'react';
import { useSellerDataMutate } from '../../hooks/useSellerDataMutate';
import { SellerData } from '../../interface/ISeller';
import { FaTimes } from 'react-icons/fa';
import { EmployeeData } from '../../interface/IEmployee';


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
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function SellerModal({ closeModal }: ModalProps){
    const [workload, setWorkload] = useState("");
    const [id] = useState(0);
    const {mutate: sellerMutate, isSuccess, isLoading } = useSellerDataMutate();
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [birth_date, setBirth_date] = useState("");

    const submitSeller = () => {
        const sellerData: SellerData = {
            id,
            workload,
            name,
            cpf,
            birth_date
        }
        console.log('Submitting Seller Data:', sellerData);
        sellerMutate(sellerData)
    }
    
    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastrar Funcionário</h2>
                <form className="input-container">
                    <Input label="Name" value={name} updateValue={setName}/>
                    <Input label="Cpf" value={cpf} updateValue={setCpf}/>
                    <Input label="Birth Date" value={birth_date} updateValue={setBirth_date}/>
                    <Input label="Workload" value={workload} updateValue={setWorkload}/>
                </form>
                <button onClick={submitSeller} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
                <button className="close-button" onClick={closeModal}>
                <FaTimes />
                </button>
            </div>
        </div>
    )
}

