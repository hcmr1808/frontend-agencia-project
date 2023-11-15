import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { AccommodationData } from "../interface/IAccommodation";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<AccommodationData[]> => {
    const response = axios.get(API_URL + '/accommodation');
    return response;
}

export function useAccommodationData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['accommodation-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}