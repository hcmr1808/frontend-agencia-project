import { useEffect, useState } from 'react';
import { usePackageDataMutate } from '../../hooks/usePackageDataMutate';
import { PackageData } from '../../interface/IPackage';
import { FaTimes } from 'react-icons/fa';


import "./modal.css";

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

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const { mutate, isSuccess, isLoading } = usePackageDataMutate();

    const submit = () => {
        const packageData: PackageData = {
            title, 
            price,
            description,
            image
        }
        mutate(packageData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastrar novo pacote de viagem</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                    <Input label="description" value={description} updateValue={setDescription}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
                <button className="close-button" onClick={closeModal}>
                <FaTimes />
                </button>
            </div>
        </div>
    )
}