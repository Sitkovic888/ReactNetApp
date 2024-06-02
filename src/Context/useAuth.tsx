import React, { ReactNode, createContext, useEffect, useState } from "react";
import { UserProfile, UserProfileToken } from "../Models/User";
import { useNavigate } from "react-router";
import { loginApi, registerApi } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, userName: string, password: string) => void;
  loginUser: (userName: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: ReactNode };

const userContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    userName: string,
    password: string
  ) => {
    await registerApi(email, userName, password)
      .then((res) => {
        const resData = res?.data;
        if (resData) {
          localStorage.setItem("token", resData.token);

          const userObj = {
            email: resData.email,
            userName: resData.userName,
          };

          localStorage.setItem("user", JSON.stringify(userObj));

          setToken(resData.token);
          setUser(userObj);

          toast.success("Succesfull login.");

          navigate("/search");
        }
      })
      .catch((e) => toast.warning("A server error occured."));
  };

  const loginUser = async (userName: string, password: string) => {
    await loginApi(userName, password)
      .then((res) => {
        const resData = res?.data;
        if (resData) {
          localStorage.setItem("token", resData.token);

          const userObj = {
            email: resData.email,
            userName: resData.userName,
          };

          localStorage.setItem("user", JSON.stringify(userObj));

          setToken(resData.token);
          setUser(userObj);

          toast.success("Succesfull Login.");

          navigate("/search");
        }
      })
      .catch((e) => toast.warning("A server error occured."));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <userContext.Provider
      value={{ user, token, registerUser, loginUser, logoutUser, isLoggedIn }}
    >
      {isReady ? children : null}
    </userContext.Provider>
  );
};

export const useAuth = () => React.useContext(userContext)
