import { useEffect, useState } from "react";
import {
  getAllUsers,
  patchUserStatus,
  createUser,
  updateUser,
} from "../api/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [confirmUser, setConfirmUser] = useState(null);

  const [form, setForm] = useState({
    // name: "",
    // contact: "",
    // email: "",
    newPassword: "",
    // role: "AGENT",
    // active: true,
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      console.error("Fetch users error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [passwordUser, setPasswordUser] = useState(null);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await createUser(form);
  //     alert("Agent created successfully");
  //     setShowModal(false);
  //     fetchUsers();
  //   } catch (err) {
  //     alert(err.message || "Failed to create user");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ newPassword: form.newPassword });
      alert("Agent created successfully");
      setShowModal(false);
      fetchUsers();
    } catch (err) {
      alert(err.message || "Failed to create agent");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-72">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            User Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor, manage, and control all platform users
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          + Add Agent
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Contact</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium">{u.name}</td>
                  <td className="px-6 py-4">{u.contact}</td>
                  <td className="px-6 py-4">{u.role}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setConfirmUser(u)}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        u.isActive
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {u.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setPasswordUser(u)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-xs"
                    >
                      Change Password
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {confirmUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">
              {confirmUser.isActive ? "Deactivate User" : "Activate User"}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to{" "}
              {confirmUser.isActive ? "deactivate" : "activate"}{" "}
              <span className="font-semibold">{confirmUser.name}</span>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmUser(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    const newStatus = !confirmUser.isActive;
                    await patchUserStatus(confirmUser.id, newStatus);
                    setUsers((prev) =>
                      prev.map((user) =>
                        user.id === confirmUser.id
                          ? { ...user, isActive: newStatus }
                          : user,
                      ),
                    );
                    setConfirmUser(null);
                  } catch {
                    alert("Failed to update status");
                  }
                }}
                className={`px-4 py-2 rounded text-white ${
                  confirmUser.isActive ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {confirmUser.isActive ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-5 text-center text-indigo-700 bg-blue-700 text-white py-2 rounded-lg">
              Create New User
            </h2>

            <div className="space-y-4">
              {/* <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />{" "}
              <input
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />{" "}
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              /> */}
              <input
                type="password"
                placeholder="Set Agent Password"
                value={form.newPassword}
                onChange={(e) => setForm({ newPassword: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                required
              />

              {/* <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="ADMIN">Admin</option>
                <option value="AGENT">Agent</option>
                <option value="USER">User</option>
              </select> */}
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
      {passwordUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              Change Password - {passwordUser.name}
            </h3>

            <input
              type="password"
              placeholder="Current Password"
              value={passwordForm.currentPassword}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  currentPassword: e.target.value,
                })
              }
              className="w-full px-4 py-2 border rounded mb-3"
            />

            <input
              type="password"
              placeholder="New Password"
              value={passwordForm.newPassword}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  newPassword: e.target.value,
                })
              }
              className="w-full px-4 py-2 border rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setPasswordUser(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  try {
                    // 🔥 Hardcode contact if role is AGENT
                    const updatedContact =
                      passwordUser.role === "AGENT"
                        ? "9999999999" // 👈 your hardcoded contact
                        : passwordUser.contact;

                    await updateUser(passwordUser.id, {
                      name: passwordUser.name,
                      role: passwordUser.role,
                      isActive: passwordUser.isActive,
                      gpAssigned: passwordUser.gpAssigned,
                      contact: updatedContact,
                      currentPassword: passwordForm.currentPassword,
                      newPassword: passwordForm.newPassword,
                    });

                    alert("Password updated successfully!");
                    setPasswordUser(null);
                    setPasswordForm({ currentPassword: "", newPassword: "" });
                  } catch (err) {
                    alert(err.message || "Password update failed");
                  }
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
