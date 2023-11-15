import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { SellerData } from "../interface/ISeller";
import { EmployeeData } from "../interface/IEmployee";

const API_URL = 'http://localhost:8080';

const postData = async (data: SellerData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/seller', data);
    return response;
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