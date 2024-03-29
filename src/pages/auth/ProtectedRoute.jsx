import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkUserStatusLogin } from "@/service/user.api";
import Spinner from "@/ui/Spinner";
import Profile from "../user/Profile";
import { useState } from "react";

function ProtectedRoute() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["checkUserStatusLogins"],
  //   queryFn: checkUserStatusLogin,
  // });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Spinner />;
  }
  return message === "Authorized" ? <Profile /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
