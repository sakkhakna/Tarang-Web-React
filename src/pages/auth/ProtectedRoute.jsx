import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkUserStatusLogin } from "@/service/user.api";
import Spinner from "@/ui/Spinner";
import Profile from "../user/Profile";

function ProtectedRoute() {
  const { data, isLoading } = useQuery({
    queryKey: ["checkUserStatusLogins"],
    queryFn: checkUserStatusLogin,
  });
  if (isLoading) {
    return <Spinner />;
  }
  return data.message === "Authorized" ? (
    <Profile />
  ) : (
    <Navigate to="/signin" />
  );
}

export default ProtectedRoute;
