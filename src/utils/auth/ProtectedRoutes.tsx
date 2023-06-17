import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element | null;
}
const ProtectedRoute = ({ children }: Props) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
