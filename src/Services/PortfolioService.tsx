import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = process.env.REACT_APP_SERVER_URL + "portfolio/";

export const addPortfolioApi = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (e) {
    handleError(e);
  }
};

export const deletePortfolioApi = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (e) {
    handleError(e);
  }
};

export const getPortfolioApi = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(api!);
    return data;
  } catch (e) {
    handleError(e);
  }
};
