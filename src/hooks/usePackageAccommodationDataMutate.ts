import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PackageAccommodationData } from "../interface/IPackageAccommodation";

const API_URL = 'http://localhost:8080';

const postData = async (data: PackageAccommodationData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/package_accommodation', data);
    return response;
}

export function usePackageAccommodationDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['package_accommodation-data'])
        }
    })

    return mutate;
}