// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("user"); // Simulasi login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
