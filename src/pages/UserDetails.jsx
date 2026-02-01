import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userService";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const data = await getUserById(id);
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("User ID:", id);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-blue-600 font-semibold animate-pulse">
          Loading user details...
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-semibold">
        User not found
      </div>
    );

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          User Profile
        </h2>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Name</span>
            <span>{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Contact</span>
            <span>{user.contact}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Role</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}