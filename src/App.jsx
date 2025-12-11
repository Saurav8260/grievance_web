// import DataTable from "./components/table/DataTable";
// import sampleData from "./data/sampleData";
// import './App.css'

// export default function App() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         Odisha Panchayat Table
//       </h1>

//        <DataTable data={sampleData} />
//     </div>
//   );
// }

// import { Routes, Route, Navigate } from "react-router-dom";
// import DataTable from "./components/table/DataTable";
// import sampleData from "./data/sampleData";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import "./App.css";

// // Private Route Wrapper
// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

// export default function App() {
//   return (
//     <Routes>

//       {/* Login Page */}
//       <Route path="/login" element={<Login />} />

//       {/* Register Page */}
//       <Route path="/register" element={<Register />} />

//       {/* ✅ Protected Home with Logout */}
//       <Route
//         path="/home"
//         element={
//           <PrivateRoute>
//             <div className="p-6 bg-gray-100 min-h-screen">

//               {/* ✅ Header with Logout */}
//               <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-blue-700">
//                   Odisha Panchayat Table
//                 </h1>

//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("isLoggedIn");
//                     window.location.href = "/login";
//                   }}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
//                 >
//                   Logout
//                 </button>
//               </div>

//               <DataTable data={sampleData} />
//             </div>
//           </PrivateRoute>
//         }
//       />

//       {/* Default Redirect */}
//       <Route path="*" element={<Navigate to="/login" />} />

//     </Routes>
//   );
// }
import { Routes, Route, Navigate } from "react-router-dom";
import sampleData from "./data/sampleData";  
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
