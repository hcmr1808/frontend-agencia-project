import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PackageData } from '../interface/IPackage';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PackageData[]> => {
    const response = axios.get(API_URL + '/package');
    return response;
}

export function usePackageData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['package-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}