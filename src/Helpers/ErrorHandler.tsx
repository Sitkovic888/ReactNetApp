import axios from "axios";
import { error } from "console";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    var errorResponse = error.response;
    const errors = errorResponse?.data.errors;
    const errorData = errorResponse?.data;
    if (Array.isArray(errors)) {
      for (let val of errors) {
        toast.warning(val.description);
      }
    } else if (typeof errors == "object") {
      for (let val of errors) {
        toast.warning(errors[val][0]);
      }
    } else if (errorData) {
      toast.warning(errorData);
    } else if (errorResponse?.status == 401) {
      toast.warning("Unathrozied user. Sign up or log in.");
      window.history.pushState({}, "loginPage", "/login");
    } else if (errorResponse) {
      toast.warning(errorData);
    }
  }
};
