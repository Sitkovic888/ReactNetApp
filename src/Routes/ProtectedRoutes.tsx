import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Context/useAuth";

type Props = { children: React.ReactNode };

export default function ProtectedRoutes({ children }: Props): ReactElement {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
