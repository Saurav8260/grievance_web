
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-3 md:p-6">
        <Outlet />
      </div>
    </div>
  );
}


{/* <div className="flex flex-col md:flex-row min-h-screen">
  <Sidebar />
  <div className="flex-1 p-3 md:p-6">
    {children}
  </div>
</div> */}
