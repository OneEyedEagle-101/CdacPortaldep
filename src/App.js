import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./Components/Student/StudentDashboard";
import FacultyDashboard from "./Components/Faculty/FacultyDashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ForgetPassword from "./Components/ForgetPassword";
import Register from "./Components/Register";
import QuizList from "./Components/Student/QuizList";
import { Quiz, Profileinfo } from "./Components/Student/QuizList";
import CreateQuiz, { SendNotice } from "./Components/Faculty/Faculty";
import { AddQuestions, AddNotes } from "./Components/Faculty/Faculty";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/"></Route>
      <Route element={<StudentDashboard />} path="/Student" />
      <Route element={<FacultyDashboard />} path="/Faculty" />
      <Route element={<AdminDashboard />} path="/Admin" />
      <Route element={<ForgetPassword />} path="/ForgetPassword" />
      <Route element={<AddQuestions />} path="/Faculty/AddQuestion" />
      <Route element={<CreateQuiz />} path="Faculty/CreateQuiz" />
      <Route element={<Register />} path="/Register" />
      <Route element={<QuizList />} path="/Student/QuizList" />
      <Route element={<Quiz />} path="/Student/Quiz" />
      <Route element={<Profileinfo />} path="/Student/Profile" />
      <Route element={<SendNotice />} path="/Faculty/Notice" />
    </Routes>
  );
}

export default App;
