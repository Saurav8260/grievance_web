
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 min-h-screen bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
}
