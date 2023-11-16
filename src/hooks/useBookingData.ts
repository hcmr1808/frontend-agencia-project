import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { BookingData } from "../interface/IBooking";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<BookingData[]> => {
    const response = axios.get(API_URL + '/booking');
    return response;
}

export function useBookingData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['booking-data'],
        retry: 2
    })

    return {
        ...query,
        dados: query.data?.data
    }
}