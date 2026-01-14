import { useEffect, useState } from "react";
import { getAllUsers, patchUserStatus } from "../api/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please login again.");
      }

      const data = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      console.error("Fetch users error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-72">
        <div className="relative">
          <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            User Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor, manage, and control all platform users
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold tracking-wide">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-semibold tracking-wide">
                  Contact
                </th>
                <th className="px-6 py-4 text-left font-semibold tracking-wide">
                  Role
                </th>
                <th className="px-6 py-4 text-left font-semibold tracking-wide">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-10 text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr
                    key={u.id}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {u.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{u.contact}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {(() => {
                        const isActive =
                          u.is_active === true ||
                          u.is_active === 1 ||
                          u.status === true ||
                          u.active === 1 ||
                          u.isActive === true;

                        return (
                          <button
                            onClick={async () => {
                              try {
                                const newStatus = !isActive;
                                await patchUserStatus(u.id, newStatus);

                                setUsers((prev) =>
                                  prev.map((user) =>
                                    user.id === u.id
                                      ? { ...user, isActive: newStatus }
                                      : user
                                  )
                                );
                              } catch (err) {
                                alert("Failed to update status");
                              }
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                              isActive
                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                            }`}
                          >
                            {isActive ? "Active" : "Inactive"}
                          </button>
                        );
                      })()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
