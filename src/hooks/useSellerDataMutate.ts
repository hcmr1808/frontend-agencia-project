import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { SellerData } from "../interface/ISeller";
import { EmployeeData } from "../interface/IEmployee";

const API_URL = 'http://localhost:8080';

const postData = async (data: EmployeeData): AxiosPromise<any> => {
    try {
        const response = await axios.post(API_URL + '/employee/add/seller', data);
        return response.data;
    } catch (error) {
        throw new Error('Erro desconhecido ao processar a solicitação');
    }
}

export function useSellerDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['seller-data'])
        }
    })

    return mutate;
}