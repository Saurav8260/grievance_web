import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userService";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Added states
  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  // ✅ Added function
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userId = JSON.parse(localStorage.getItem("id"));

      await fetch(`/api/users/${userId}/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      alert("Password updated successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordBox(false);
    } catch (err) {
      alert("Failed to update password");
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

        {/* ✅ ADDED ONLY THIS SECTION */}
        <div className="mt-8">
          <div className="flex justify-between items-center  pt-4">
            {/* <h3 className="text-lg font-semibold">Change Password</h3> */}

            <button
              onClick={() => setShowPasswordBox(!showPasswordBox)}
              className="text-blue-600 text-bold font-medium hover:underline"
            >
              {showPasswordBox ? "Cancel" : "Change Password"}
            </button>
          </div>

          {showPasswordBox && (
            <div className="mt-4 space-y-3">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-lg px-3 py-2"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-lg px-3 py-2"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg px-3 py-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  onClick={handleChangePassword}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}