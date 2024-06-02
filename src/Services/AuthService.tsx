import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = process.env.REACT_APP_SERVER_URL;

export const loginApi = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (e) {
    handleError(e);
  }
};

export const registerApi = async (email: string, username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/register", {
      email : email,
      username: username,
      password: password,
    });
    return data;
  } catch (e) {
    handleError(e);
  }
};
