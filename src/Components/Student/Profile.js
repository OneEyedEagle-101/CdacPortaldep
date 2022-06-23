import { Avatar, Button, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  let id;
  let user = sessionStorage.getItem("user");
  let [dis, setDis] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
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
  //     "https://cdacportal.herokuapp.com/getpropic?id=" + id == "" ||
  //     "https://cdacportal.herokuapp.com/getpropic?id=" + id == null ||
  //     "https://cdacportal.herokuapp.com/getpropic?id=" + id == undefined
  //   ) {
  //     setimg("https://i.ibb.co/bPzHL31/download.png");
  //   } else {
  //     setimg("https://cdacportal.herokuapp.com/getpropic?id=" + id);
  //   }

  let name = user.name;
  let surname = user.surname;

  let email = user.email;
  let imgPath;
  const handleEdit = () => {
    setDis(false);
  };

  const handleSave = async () => {
    // if (
    //   document.getElementById("image").value == null ||
    //   document.getElementById("image").value == ""
    // ) {
    //  toast.error("Please select an image");
    // }
    var formData = new FormData();
    formData.append("profilePic", selectedFile);
    formData.append("id", id);

    await axios.post("https://cdacportal.herokuapp.com/imageUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const imgHandle = (e) => {
    var val = e.target.files[0];
    setSelectedFile(val);
    console.log(val);
  };

  return (
    <>
      <div className="display-6 fw-bolder">Update Profile</div>
      <Paper elevation={10} style={{ width: "500px", height: "75vh" }}>
        <Grid align="center">
          <img
            className="pt-2"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
            src={
              "https://cdacportal.herokuapp.com/getpropic?id=" +
              id +
              "&" +
              global.Date.now()
            }
            alt="Profile Not Available"
          />
        </Grid>

        <Form style={{ width: "450px", marginLeft: "20px" }}>
          <Grid align="center">
            <Form.Group className=" mb-4" style={{ width: "105px" }}>
              <Form.Label></Form.Label>
              <Form.Control
                type="file"
                id="image"
                name="profilepic"
                accept="image/*"
                disabled={dis}
                onChange={imgHandle}
              />
            </Form.Group>
          </Grid>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#2b6bac", fontWeight: "bolder" }}>
              Name
            </Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Name"
              defaultValue={name}
              disabled={true}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#2b6bac", fontWeight: "bolder" }}>
              Surname
            </Form.Label>
            <Form.Control
              id="surname"
              type="text"
              placeholder="Surname"
              defaultValue={surname}
              disabled={true}
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
              disabled
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 20, offset: 2 }}>
                  <Button
                    variant="contained"
                    style={{ width: "100px" }}
                    color="success"
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
                    variant="contained"
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
