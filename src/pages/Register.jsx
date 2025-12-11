import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form
        onSubmit={handleRegister}
        className="bg-gray-100 p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Register
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-3 border rounded-lg text-black"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg text-black"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
