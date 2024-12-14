import axios from "axios";
import { error } from "console";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const errorResponse = error.response;
    const errorData: {
      description: string;
    }[] = errorResponse?.data;
    if (Array.isArray(errorData)) {
      for (const err of errorData) {
        toast.warning(err.description);
      }
    } else {
      console.error(error);
      toast.error(error.message);
    }
  }
};
