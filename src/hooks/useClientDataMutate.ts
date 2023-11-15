import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ClientData } from "../interface/IClient";

const API_URL = 'http://localhost:8080';

const postData = async (data: ClientData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/client', data);
    return response;
}

export function useClientDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate;
}