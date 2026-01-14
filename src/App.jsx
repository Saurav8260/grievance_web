import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddAgent from "./pages/AddAgent";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import MainLayout from "./MainLayout";
import GrievanceDetails from "./pages/GrievanceDetails";
import EditGrievance from "./pages/EditGrievance";
//  import PrivateRoute from "./components/PrivateRoute";


// simple auth guard
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token)
  return token ? children : <Navigate to="/login" />;
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/grievance/:id" element={<GrievanceDetails />} />
        <Route path="/grievance/edit/:id" element={<EditGrievance />} />

        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* Protected Layout */}
        <Route element={<MainLayout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/AddAgent"
            element={
              <PrivateRoute role="admin">
                <AddAgent />
              </PrivateRoute>
            }
          />

          <Route
            path="/userdetails"
            element={
              <PrivateRoute role="admin">
                <UserList />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <UserDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/grievances/:id"
            element={
              <PrivateRoute>
                <GrievanceDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/grievances/:id"
            element={
              <PrivateRoute>
                <EditGrievance />
              </PrivateRoute>
            }
          />
        </Route>
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

