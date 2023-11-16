import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { BookingData } from "../interface/IBooking";

const API_URL = 'http://localhost:8080';

const postData = async (data: BookingData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/booking', data);
    return response;
}

export function useBookingDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['booking-data'])
        }
    })

    return mutate;
}