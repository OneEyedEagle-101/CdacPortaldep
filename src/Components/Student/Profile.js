import { Avatar, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let id;
  let user = sessionStorage.getItem("user");
  let [dis, setDis] = useState(true);
  let [img, setimg] = useState("https://i.ibb.co/bPzHL31/download.png");
  let navigate = useNavigate();
  useEffect(() => {
    if (user === "null" || user === null || user === undefined) {
      toast.error("Login First!!");
      navigate("/");
    }
  }, []);

  if (user !== "null" && user !== null && user !== undefined) {
    user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    id = user.portalId;
  }
  //   if (
  //     "http://localhost:8080/getpropic?id=" + id == "" ||
  //     "http://localhost:8080/getpropic?id=" + id == null ||
  //     "http://localhost:8080/getpropic?id=" + id == undefined
  //   ) {
  //     setimg("https://i.ibb.co/bPzHL31/download.png");
  //   } else {
  //     setimg("http://localhost:8080/getpropic?id=" + id);
  //   }

  let name = user.name;
  let surname = user.surname;

  let email = user.email;

  const handleEdit = () => {
    setDis(false);
  };

  const handleSave = () => {
    alert("Successfully saved");
  };

  return (
    <>
      <Paper elevation={10} style={{ width: "500px", height: "75vh" }}>
        <Grid align="center">
          <img
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
            src={"http://localhost:8080/getpropic?id=" + id}
            alt="Profilepic"
          />
        </Grid>
        <Form style={{ width: "450px", marginLeft: "20px" }}>
          <Grid align="center">
            <Form.Group className=" mb-4" style={{ width: "105px" }}>
              <Form.Label></Form.Label>
              <Form.Control type="file" name="profilepic" disabled={dis} />
            </Form.Group>
          </Grid>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#2b6bac", fontWeight: "bolder" }}>
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              defaultValue={name}
              disabled={dis}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#2b6bac", fontWeight: "bolder" }}>
              Surname
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Surname"
              defaultValue={surname}
              disabled={dis}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#2b6bac", fontWeight: "bolder" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue={email}
              disabled={dis}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 20, offset: 2 }}>
                  <Button
                    style={{ width: "100px" }}
                    type="button"
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 20, offset: 2 }}>
                  <Button
                    style={{ width: "100px" }}
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Col>
              </Form.Group>
            </Col>
          </Row>
         
        </Form>
      </Paper>
    </>
  );
}
