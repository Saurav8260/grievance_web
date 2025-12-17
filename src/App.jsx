import { Routes, Route, Navigate } from "react-router-dom";
//  import sampleData from "./data/sampleData";  
import DataTable from "./components/table/DataTable";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import "./App.css";

// Private Route Wrapper
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Register */}
      <Route path="/register" element={<Register />} />

      {/* ✅ Home now shows Dashboard */}
      <Route 
        path="/home" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
  );
}
