import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PackageAccommodationData } from "../interface/IPackageAccommodation";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PackageAccommodationData[]> => {
    const response = axios.get(API_URL + '/package_accommodation');
    return response;
}

export function usePackageAccommodationData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['package_accommodation-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}