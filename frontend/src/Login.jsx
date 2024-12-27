import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from './header';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (res.status === 200) {
        console.log("Logged in!!");
        navigate("/");
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
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f0f2f5" }}>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div style={{display:'flex',flexDirection:"column", justifyContent: "center", alignItems: "center",paddingTop:150}}>

      <div style={{
        width: "100%",
        maxWidth: "400px",
        margin: "20px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ textAlign: "center", marginBottom: "20px", fontSize: "16px", color: "#333" }}>
          <b>
            Welcome to 100xDevs <br />
            Log in to access paid content!
          </b>
        </div>
  
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "15px" }}>
            Email <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="name@gmail.com"
              style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
              />
          </div>
          <div style={{ marginBottom: "15px" }}>
            Password <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="...."
              style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
              />
          </div>
          <div>
            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
              }}
              >
              Login
            </button>
            <div style={{display:'flex'}}>
              <div  style={{fontWeight:'bold' ,paddingRight:10}}>
              For first time users
              </div>
              <br/>
             <Link style={{textDecoration:'none'}} to='/signup'>Signup</Link>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
  
}
