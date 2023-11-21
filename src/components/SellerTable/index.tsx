import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import styled from "@emotion/styled";
import { SellerData } from "../../interface/ISeller";

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


function TabelaSeller({sellers} : {sellers ?: SellerData[] | null }) {
    console.log("Dados recebidos no componente TabelaSeller:", sellers);

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
                                <StyledCell>Carga Horária</StyledCell>
                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {sellers?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id_seller}>
                                                    <TableCell>{linha.id_seller}</TableCell>
                                                    <TableCell>{linha.name}</TableCell>
                                                    <TableCell>{linha.cpf}</TableCell>
                                                    <TableCell component="th" scope="row">{linha.birth_date}</TableCell>
                                                    <TableCell>{linha.workload}</TableCell>
                                                </TableRow>
                                                )       
                                            })}
                                           
                                        </TableBody>
                                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaSeller;