import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "./header";


export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup() {
    try {
      const res = await axios.post("http://localhost:3000/signup", {
        email,
        password, // Fixed typo "passeword" -> "password"
      });

      if (res.status === 200) { // Changed condition to check for status code
        console.log("Logged in!!");
        navigate("/login");
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
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#f0f2f5", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
    <div style={{paddingTop:150,width:"100%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

   
      <div style={{ width: "100%", maxWidth: "400px", marginTop: "50px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: "20px", fontSize: "18px", color: "#333" }}>
          <b>
            Welcome to 100xDevs <br />
            Log in to access paid content!
          </b>
        </div>
  
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="name@gmail.com"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>
  
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="...."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>
  
          <div>
            <button
              onClick={handleSignup}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
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