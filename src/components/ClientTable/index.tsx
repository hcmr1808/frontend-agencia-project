import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { EmployeeData } from "../../interface/IEmployee"
import styled from "@emotion/styled";
import { ClientData } from "../../interface/IClient";

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`] : {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
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

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                                <StyledCell>Id</StyledCell>
                                <StyledCell>Nome</StyledCell>
                                <StyledCell>Cpf</StyledCell>                                    
                                <StyledCell>email</StyledCell>
                                <StyledCell>phone_number</StyledCell>
                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {clients?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id}>
                                                    <TableCell>{linha.id}</TableCell>
                                                    <TableCell>{linha.name}</TableCell>
                                                    <TableCell>{linha.cpf}</TableCell>
                                                    <TableCell>{linha.email}</TableCell>
                                                    <TableCell>{linha.phone_number}</TableCell>

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