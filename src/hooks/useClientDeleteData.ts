import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ClientData } from "../interface/IClient";

const API_URL = 'http://localhost:8080';

const postData = async (id_client: number): AxiosPromise<any> => {
    const response = axios.delete(`${API_URL}/client/delete/${id_client}`).then((response) => {
        console.log(response); 
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
    return response;
}

export function useClientDeleteData(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data']);
        }
    });

    return mutate;
}
