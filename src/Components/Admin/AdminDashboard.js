import { Button } from "@mui/material";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Router, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  /////Sesion Logic
  const navigate = useNavigate();
  let user = sessionStorage.getItem("user");
  useEffect(() => {
    console.log(user);
    if (user === "null" || user === null) {
      toast.error("Login First!!");
      navigate("/");
    }
  }, []);

  if (user !== "null") {
    user = JSON.parse(sessionStorage.getItem("user"));
  }
  const signOut = () => {
    sessionStorage.setItem("user", null);
    localStorage.setItem("user", null);
    toast.success("Logged out Successfully");
    navigate("/");
  };
  /////////Session Logic
  return (
    <>
      <div>AdminDashboard:- </div>
      <Button onClick={signOut}>SignOut</Button>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
