import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { SellerData } from "../interface/ISeller";
import { EmployeeData } from "../interface/IEmployee";
import { TicketData } from "../interface/ITicket";

const API_URL = 'http://localhost:8080';

const postData = async (data: TicketData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/ticket', data);
    return response;
}

export function useTicketDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['ticket-data'])
        }
    })

    return mutate;
}