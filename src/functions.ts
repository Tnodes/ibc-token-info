// functions.ts
import axios, { AxiosError } from 'axios';
import { TokenData } from './types';

export async function fetchTokenData(symbol: string): Promise<TokenData[]> {
  const apiURL = `https://api-osmosis.imperator.co/tokens/v2/${symbol}`;

  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error(`Error fetching token data for symbol ${symbol}. Status code: ${axiosError.response.status}`);
    } else if (axiosError.request) {
      console.error(`Error fetching token data for symbol ${symbol}. No response received.`);
    } else {
      console.error(`Error fetching token data for symbol ${symbol}: ${axiosError.message}`);
    }

    throw axiosError;
  }
}