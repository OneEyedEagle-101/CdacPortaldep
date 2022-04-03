import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Paper,
  Radio,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RadioGroup } from "react-radio-buttons";
import { useNavigate, useLocation } from "react-router-dom";
import Webcam from "react-webcam";

export default function StartQuiz() {
  let [question, setQuestion] = useState("");
  let [quesCount, setCount] = useState(0);
  let [option, setOption] = useState([]);
  let navigate = useNavigate();
  let user = sessionStorage.getItem("user");
  let quiz = JSON.parse(sessionStorage.getItem("quiz"));
  let quizid;
  const lengthofquiz = quiz.queList.length;
  let score = 0;
  const location = useLocation();
  useEffect(() => {
    if (user === "null" || user === null) {
      toast.error("Login First!!");
      navigate("/");
    }
    quizid = quiz.queList[0].quizId;
    question = quiz.queList[quesCount].question;
    option = quiz.queList[quesCount].options;

    setOption(option);
    setCount(quesCount);
    setQuestion(question);
  }, []);
  if (user !== "null") {
    user = JSON.parse(sessionStorage.getItem("user"));
  }
  const submitAnswer = () => {
    let check = scoreCounter();
    console.log(quesCount);

    if (quesCount >= lengthofquiz) {
      toast.success("quiz ended");
      updateDB();
      navigate("/Student");
      return;
    }

    console.log(check);
    if (check) {
      question = quiz.queList[quesCount].question;
      console.log(question);
      setCount(quesCount);
      setQuestion(question);
      option = quiz.queList[quesCount].options;
      setOption(option);
    }
  };
  const updateDB = async () => {
    let userid = user.portalId;
    console.log("***********************************" + userid);
    await axios.post("http://localhost:8080/Student/AddScore", null, {
      params: {
        userid,
        quizid,
        score,
      },
    });
  };

  const scoreCounter = () => {
    for (let i = 0; i < 4; i++) {
      if (document.getElementById(i).checked) {
        quesCount = quesCount + 1;
        if (document.getElementById(i).value == "true") {
          score = score + 1;
        }

        document.getElementById(i).checked = false;
        return true;
      }
    }
    toast.error("Must select one option");
    return false;
  };

  return (
    <>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <img
            src="https://ci4.googleusercontent.com/proxy/mta1h-3IY-hDdJj9bN6Xxr94NMwPShHjLGCpVtITeh4FONiEryzXYSNYP_LzrMwHQ3_cb2nMIgqmiU5CP19fa1Sy2j0KZMxl0M0waLHaKN98tADGF1qfHtzGANmMCpK0XTl3WFf0yhABxLFC4cg4CeU=s0-d-e1-ft#https://i.ibb.co/Z6qL3Qk/130835957-4769194336484775-8630394154285450578-n-removebg-preview.png"
            alt="Kitten"
            height="65"
            width="45"
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Student Dashboard
          </Typography>
          <img
            alt={user.name}
            src={"http://localhost:8080/getpropic?id=" + user.portalId}
            height="65"
            width="45"
          />
          {/* <Avatar
              
              
            /> */}
        </Toolbar>
      </AppBar>
      <div className="mt-4"></div>
      <Grid container justify="space-even">
        <Grid item xs={8}>
          <div className="text-muted">
            Question No.
            {quesCount + 1} of {lengthofquiz}
            <h1 className="display-1">{question}</h1>
          </div>
          {option.map((item, i) => (
            <h1>
              <label for={i}>
                <input
                  id={i}
                  type="radio"
                  value={item.correct}
                  name="option"
                  required
                />
                {item.optionString}
              </label>
            </h1>
          ))}
          <Button onClick={submitAnswer}>Submit Answer</Button>
        </Grid>
        <Grid item xs={4}>
          <Webcam height={"50%"} width={"50%"} />
        </Grid>
      </Grid>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
