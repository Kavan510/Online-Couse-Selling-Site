import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "./header";

export function AdminSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup() {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/admin/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.status === 200) {
        console.log("Signed up successfully!!");
        navigate("/admin/signin");
      } else {
        console.log("Error");
        alert("Try Again");
      }
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed, please try again.");
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className="pt-20 w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-md mt-12 p-5 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-5 text-lg font-bold text-gray-800">
            Welcome to 100xDevs <br /> Sign up to access paid content!
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="John"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="name@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="...."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <button
                onClick={handleSignup}
                className="w-full py-2 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
