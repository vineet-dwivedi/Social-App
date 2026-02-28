import AppRoutes from "./routes"
import { RouterProvider } from "react-router";
import './global.scss'
import { AuthProvider } from "./features/auth/auth.context";
const App = () => {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
