import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { DriverData } from "../interface/IDriver";

const API_URL = 'http://localhost:8080';

const postData = async (data: DriverData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/driver', data);
    return response;
}

export function useDriverDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['driver-data'])
        }
    })

    return mutate;
}