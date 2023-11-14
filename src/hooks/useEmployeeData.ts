import axios, { AxiosPromise } from "axios";
import {EmployeeData} from "../interface/IEmployee";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<EmployeeData[]> => {
    try {
      const response = await axios.get(API_URL + '/employee');
      console.log("Dados da API:", response.data);
      return response;
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    }
  }
  

  export function useEmployeeData(){
    const query = useQuery({
      queryFn: fetchData,
      queryKey: ['employee-data'],
      retry: 2
    })
  
    console.log("Query Status:", query.status);
  
    if (query.isError) {
      console.error("Erro ao buscar dados:", query.error);

    }
  
    return {
      ...query,
      data: query.data?.data
    }
  }
  