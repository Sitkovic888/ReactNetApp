import { queries } from "@testing-library/react";
import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
	data: CompanySearch[];
}

const apiKey = process.env.REACT_APP_API_KEY;

export const searchCompanies = async (query: string) => {
	try {
		const data = await axios.get<SearchResponse>(
			`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("Error message: ", error.message);
			return error.message;
		} else {
			console.log("Unexpected error: ", error);
			return "Unexpected error";
		}
	}
}

export const getCompanyProfile = async (query: string) => {
	try {
		const data = axios.get<CompanyProfile[]>(
			`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}