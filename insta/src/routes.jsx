import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/post/pages/feed";
import { useAuth } from "./features/auth/hooks/useAuth";
import CreatePost from "./features/post/pages/CreatePost";

function ProtectedRoute({ children }) {
  const { user, checkingAuth } = useAuth();

  if (checkingAuth) {
    return <main><h1>Checking session...</h1></main>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function PublicRoute({ children }) {
  const { user, checkingAuth } = useAuth();

  if (checkingAuth) {
    return <main><h1>Checking session...</h1></main>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Feed/></ProtectedRoute>}/>
        <Route path="/create-post" element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

