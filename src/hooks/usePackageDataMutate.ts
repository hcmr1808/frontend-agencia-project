import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PackageData } from "../interface/IPackage";

const API_URL = 'http://localhost:8080';

const postData = async (data: PackageData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/package', data);
    return response;
}

export function usePackageDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['package-data'])
        }
    })

    return mutate;
}