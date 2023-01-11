import { Navigate } from 'react-router-dom';


 const ProtectedRoute = ({ user, children }) => {
  if (!user.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute
