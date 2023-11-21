import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { SellerData } from "../interface/ISeller";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<SellerData[]> => {
    const response = axios.get(API_URL + '/employee/sellers');
    return response;
}

export function useSellerData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['seller-data'],
        retry: 2
    })

    return {
        ...query,
        dados: query.data?.data
    }
}