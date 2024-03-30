import axios from "axios";
import { CompanyProfile, CompanySearch, CompanyKeyMetrics, CompanyIncomeStatement, CompanyBalanceSheet, CompanyCashFlow } from "./company";

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
			`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
		);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}

export const getKeyMetrics = async (query: string) => {
	try {
		const data = axios.get<CompanyKeyMetrics[]>(
			`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=50&apikey=${apiKey}`
		);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}

export const getIncomeStatements = async (query: string) => {
	try {
		const data = axios.get<CompanyIncomeStatement[]>(
			`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${apiKey}`
		);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}

export const getBalanceSheet = async (query: string) => {
	try {
		const data = axios.get<CompanyBalanceSheet[]>(
			`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${apiKey}`
		);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}

export const getCashflowStatement= async (query: string) => {
	try {
		const data = axios.get<CompanyCashFlow[]>(
			`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${apiKey}`
		);
		return data;
	} catch (error: any) {
		console.log("Error from API: ", error.message);
	}
}