import React, { useState } from "react";
import { MainHeader } from "./mainPageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AdminMainWebsite({ isDark, setDark }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDesctiption] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    async function addCourse() {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/admin/course",
                {
                    title,
                    description,
                    image,
                    price,
                },
                    {
                        headers:{
                            token:token
                        }
                    }
            );

            if (res.status === 200) {
            
                const courseid = await res.data.courseid;
               localStorage.setItem("courseid",courseid);
                alert("Course has been added successfully!");
                navigate("/admin/courses");
            }
        } catch (e) {
            console.error("Error occurred while adding the course:", e);
            alert("Error adding course. Please try again.");
        }
    }

    return (
        <div className="h-screen">
            <MainHeader isDark={isDark} setDark={setDark} />
            <div>
                <h2>Add Course</h2>
                <label>
                    Title: <input onChange={(e) => setTitle(e.target.value)} type="text" />
                </label>
                <br />
                <label>
                    Description: <input onChange={(e) => setDesctiption(e.target.value)} type="text" />
                </label>
                <br />
                <label>
                    Image URL: <input onChange={(e) => setImage(e.target.value)} type="text" />
                </label>
                <br />
                <label>
                    Price: <input onChange={(e) => setPrice(Number(e.target.value))} type="number" />
                </label>
                <br />
                <button onClick={addCourse}>Add Course</button>
            </div>
            <div>
                <button onClick={()=>{
                    localStorage.removeItem("token");
                }}>Logout</button>
            </div>
        </div>
    );
}
