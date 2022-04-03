import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function FacultyDashboard() {
  let navigate = useNavigate();
  /////////////Session
  let user = sessionStorage.getItem("user");
  useEffect(() => {
    if (user === "null") {
      toast.error("Login First!!");
      navigate("/");
    }
  },[]);
  if (user !== "null") {
    user = JSON.parse(sessionStorage.getItem("user"));
  }
  /////////////

  return (
    <>
      <div>FacultyDashboard</div>
      <Link to="/AddQuiz">AddQuiz</Link>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
