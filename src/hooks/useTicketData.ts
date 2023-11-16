import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { TicketData } from "../interface/ITicket";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<TicketData[]> => {
    const response = axios.get(API_URL + '/ticket');
    return response;
}

export function useTicketData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['ticket-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}