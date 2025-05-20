import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { getLocal } from "../utils/localFunctions";
import type { User } from "../types";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localUser = getLocal("user");
    setUser(localUser);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
