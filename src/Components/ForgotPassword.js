import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "react-bootstrap";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  let [emaildis, setEmaildis] = useState(false);
  let [otpdis, setotpdis] = useState(true);
  let [newPassworddis, setNewPassworddis] = useState(true);

  let navigate = useNavigate();
  let email;
  const getOtp = async () => {
    email = document.getElementById("email").value;
    console.log(email);
    if (email == "" || email == null) {
      toast.error("Please enter a valid email address");
      return;
    }
    let resp = await axios.post(
      "http://localhost:8080/ForgetPasswordGenerateOtp",
      null,
      {
        params: {
          email,
        },
      }
    );
    console.log(email);
    console.log(resp.data);
    if (resp.data) {
      console.log(resp.data);
      toast.success("Otp sent Successfully");
      setEmaildis(true);
      setotpdis(false);
      return;
    }
    console.log(resp.data);
    toast.error("Please enter a Registered email");
    return;
  };

  const verifyOtp = async () => {
    let otp = document.getElementById("otp").value;
    let resp = await axios.post("http://localhost:8080/verifyOtp", null, {
      params: {
        email,
        otp,
      },
    });
    if (resp.data) {
      toast.success("Otp Verified Successfully");
      setotpdis(true);
      setNewPassworddis(false);
      return;
    }
    toast.error("Otp does not matched !!");
  };

  const updatePassword = async () => {
    let newPassword = document.getElementById("newPassword").value;
    email = document.getElementById("email").value;
    console.log(newPassword);
    console.log(email);
    let resp = await axios.post("http://localhost:8080/updatePassword", null, {
      params: { newPassword, email },
    });
    if (resp.data) {
      toast.success("Password updated successfully, Please relogin");
      navigate("/");
      return;
    } else toast.error("Error Occured !");
  };

  const reset = () => {
    setotpdis(true);
    setNewPassworddis(true);
    setEmaildis(false);
  };

  return (
    <>
      <Grid align="center">
        <Paper
          elevation={4}
          style={{ width: "450px", height: "70vh", marginTop: "80px" }}
        >
          <form>
            <div className="display-5 pt-3">Reset Password</div>
            <div>
              <TextField
                className="mt-4 w-75 "
                disabled={emaildis}
                id="email"
                label="Email"
              />
            </div>
            <div className="mt-3">
              <Button variant="contained" disabled={emaildis} onClick={getOtp}>
                Get Otp
              </Button>
            </div>
            <div>
              <TextField
                className="mt-4 w-25 "
                id="otp"
                label="Otp"
                disabled={otpdis}
              />
            </div>
            <div className="mt-3">
              <Button variant="contained" onClick={verifyOtp} disabled={otpdis}>
                Verify Otp
              </Button>
            </div>
            <div>
              <TextField
                className="mt-4 w-50 "
                id="newPassword"
                label="New Password"
                disabled={newPassworddis}
              />
            </div>
            <div className="my-3">
              <Button
                className="mx-3"
                variant="outlined"
                color="error"
                type="reset"
                onClick={reset}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={updatePassword}
                disabled={newPassworddis}
              >
                Update Password
              </Button>
            </div>
          </form>
          <Typography style={{ marginTop: "2px" }}>
            Go back to Login page
            <Link to={"/Register"}>
              <b className="text-info"> Click here</b>
            </Link>
          </Typography>
        </Paper>
        <Toaster position="top-center" reverseOrder={false} />
      </Grid>
    </>
  );
}
