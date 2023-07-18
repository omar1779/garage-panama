import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export function ProtectedRouter({ children }) {
  const auth = useAuth();
  // Verifica si el usuario está autenticado
  const isUserAuthenticated = auth.user && auth.user.email;
  // Si el usuario no está autenticado, redirige a la página de inicio
  if (!isUserAuthenticated) {
    return <Navigate to={"/"} />;
  }
  // Si el usuario está autenticado, muestra el contenido protegido
  return <>{children}</>;
}
