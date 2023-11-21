import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {useState} from 'react'
import styled from "@emotion/styled";
import { ClientData } from "../../interface/IClient";
import { ClientEdit } from "../Client-edit";
import { useClientDeleteData } from "../../hooks/useClientDeleteData";

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`] : {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const StyledRow = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))


function TabelaClient({clients} : {clients ?: ClientData[] | null }) {
    console.log("Dados recebidos no componente Tabela:", clients);
    const handleEdit = (cliente: ClientData) => {
        console.log('handleEdit chamada com:', cliente);
        setSelectedClient(cliente);
        setIsModalOpen(true);
    };

    const { mutate: clientDeleteMutate } = useClientDeleteData();



    const handleDelete = (cliente: ClientData) => {
        const { id_client } = cliente;
    
        clientDeleteMutate(id_client);
    };

    const handleEditClient = (cliente: ClientData) => {
        console.log('Editar cliente:', cliente);
    };
    const closeModal = (arg?: any) => {
        setIsModalOpen(false);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);

    return (
        <>
         {isModalOpen && selectedClient && (
                <ClientEdit
                    cliente={selectedClient}
                    closeModal={closeModal}
                />
            )}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                                <StyledCell>Id</StyledCell>
                                <StyledCell>Nome</StyledCell>
                                <StyledCell>Cpf</StyledCell>                                    
                                <StyledCell>email</StyledCell>
                                <StyledCell>phone_number</StyledCell>
                                <StyledCell>Editar</StyledCell> 
                                <StyledCell>Deletar</StyledCell> 

                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {clients?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id_client}>
                                                    <TableCell>{linha.id_client}</TableCell>
                                                    <TableCell>{linha.name}</TableCell>
                                                    <TableCell>{linha.cpf}</TableCell>
                                                    <TableCell>{linha.email}</TableCell>
                                                    <TableCell>{linha.phone_number}</TableCell>
                                                    <TableCell><button onClick={() => handleEdit(linha)}>Editar</button></TableCell>
                                                    <TableCell><button onClick={() => handleDelete(linha)}>Deletar</button></TableCell>
                                                </TableRow>
                                                )       
                                            })}
                                           
                                        </TableBody>
                                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaClient;