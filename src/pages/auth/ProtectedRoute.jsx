import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkUserStatusLogin } from "@/service/user.api";

function ProtectedRoute() {
  const { data } = useQuery({
    queryKey: ["checkUserStatusLogins"],
    queryFn: checkUserStatusLogin,
  });
  console.log(data);
  return data === 401 ? <Navigate to="/signin" /> : <Outlet />;
}

export default ProtectedRoute;
