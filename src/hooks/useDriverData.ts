import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { DriverData } from "../interface/IDriver";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<DriverData[]> => {
    const response = axios.get(API_URL + '/driver');
    return response;
}

export function useDriverData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['driver-data'],
        retry: 2
    })

    return {
        ...query,
        dado: query.data?.data
    }
}