import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { AccommodationData } from "../interface/IAccommodation";

const API_URL = 'http://localhost:8080';

const postData = async (data: AccommodationData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/accommodation', data);
    return response;
}

export function useAccommodationDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['accommodation-data'])
        }
    })

    return mutate;
}