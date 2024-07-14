import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedDashboard({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("roleUser");
  useEffect(() => {
    if (role !== "Admin") {
      navigate("/home");
    }
  }, [role, navigate]);

  return role === "Admin" ? children : null;
}
