import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import styled from "@emotion/styled";
import { TicketData } from "../../interface/ITicket";

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


function TabelaTicket({tickets} : {tickets ?: TicketData[] | null }) {
    console.log("Dados recebidos no componente Tabela:", tickets);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                                <StyledCell>Id</StyledCell>
                                <StyledCell>Preço</StyledCell>
                                <StyledCell>Data</StyledCell>                                    
                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {tickets?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id_ticket}>
                                                    <TableCell>{linha.id_ticket}</TableCell>
                                                    <TableCell>{linha.price}</TableCell>
                                                    <TableCell>{linha.date}</TableCell>
                                                </TableRow>
                                                )       
                                            })}
                                           
                                        </TableBody>
                                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaTicket;