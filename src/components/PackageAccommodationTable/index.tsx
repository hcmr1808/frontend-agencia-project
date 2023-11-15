import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { EmployeeData } from "../../interface/IEmployee"
import styled from "@emotion/styled";
import { PackageAccommodationData } from "../../interface/IPackageAccommodation";

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


function TabelaPackagesAccommodations({packages} : {packages ?: PackageAccommodationData[] | null }) {
    console.log("Dados recebidos no componente Tabela:", packages);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                                <StyledCell>Id Pacote</StyledCell>
                                <StyledCell>Titulo</StyledCell>
                                <StyledCell>Id Hospedagem</StyledCell>                                    
                                <StyledCell>Nome</StyledCell>
                        </StyledRow>
                    </TableHead>
                                        <TableBody>
                                            {packages?.map((linha) => {
                                                return(
                                                <TableRow key={linha.id_package}>
                                                    <TableCell>{linha.id_package}</TableCell>
                                                    <TableCell>{linha.title}</TableCell>
                                                    <TableCell>{linha.id_accommodation}</TableCell>
                                                    <TableCell>{linha.name}</TableCell>
                                                </TableRow>
                                                )       
                                            })}
                                           
                                        </TableBody>
                                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaPackagesAccommodations;