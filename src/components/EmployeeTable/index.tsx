import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { EmployeeData } from "../../interface/IEmployee"
import styled from "@emotion/styled";

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`] : {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
                
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        
    }
}))

const StyledRow = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))


function Tabela({employees} : {employees ?: EmployeeData[] | null }) {
    console.log("Dados recebidos no componente Tabela:", employees);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                                <StyledCell>Id</StyledCell>
                                <StyledCell>Nome</StyledCell>
                                <StyledCell>Cpf</StyledCell>                                    
                                <StyledCell>Data de Nascimento</StyledCell>
                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {employees?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id_employee}>
                                                    <TableCell>{linha.id_employee}</TableCell>
                                                    <TableCell>{linha.name}</TableCell>
                                                    <TableCell>{linha.cpf}</TableCell>
                                                    <TableCell component="th" scope="row">{linha.birth_date}</TableCell>
                                                </TableRow>
                                                )       
                                            })}
                                           
                                        </TableBody>
                                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;