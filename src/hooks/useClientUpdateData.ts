import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ClientData } from "../interface/IClient";

const API_URL = 'http://localhost:8080';

const postData = async (data: ClientData): AxiosPromise<any> => {
    const response = axios.put(`${API_URL}/client/update`, data).then((response) => {
        console.log(response); 
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error
      });;
      return response;
    
}

export function useClientUpdateData(){
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