import axios from "axios";
import { CommentDataType, CommentGet } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = process.env.REACT_APP_SERVER_URL + "comment/";

export const postCommentApi = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentDataType>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (e) {
    handleError(e);
  }
};

export const getCommentApi = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (e) {
    handleError(e);
  }
};
