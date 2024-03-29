import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkUserStatusLogin } from "@/service/user.api";
import Spinner from "@/ui/Spinner";

function ProtectedRoute() {
  const { data, isLoading } = useQuery({
    queryKey: ["checkUserStatusLogins"],
    queryFn: checkUserStatusLogin,
  });
  if (isLoading) {
    return <Spinner />;
  }
  return data.message === "Unauthorized" ? (
    <Navigate to="/signin" />
  ) : (
    <Outlet />
  );
}

export default ProtectedRoute;
