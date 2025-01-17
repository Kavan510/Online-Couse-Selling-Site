import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from './header';

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/admin/signin", {
        email,
        password,
      });

      if (res.status === 200) {
        console.log("Logged in!!");
        navigate("/admin");
      } else {
        console.log("Error");
        alert("Try Again");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed, please try again.");
    }
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center pt-36">

        <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <div className="text-center mb-5 text-lg text-gray-800 font-bold">
            Welcome to 100xDevs <br />
            Log in to access paid content!
          </div>
  
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="name@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="...."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="w-full py-2 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Login
              </button>
              <div className="flex mt-4 items-center">
                <div className="font-bold pr-2">
                  For first time Admins
                </div>
                <Link className="text-green-500 none " to='/admin/signup'>Signup</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
