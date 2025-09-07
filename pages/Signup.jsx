import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
