import TabelaClient from "../../components/ClientTable";
import Container from "../../components/Container";
import TituloClient from "../../components/Titulo-Client";
import { useClientData } from "../../hooks/useClientData";



function Clients(){
    const {data} = useClientData();
    
    return(
        <Container>
            <TituloClient>Cadastrar clientes</TituloClient>
            <TabelaClient clients={data} />
        </Container>
    );

}

export default Clients;