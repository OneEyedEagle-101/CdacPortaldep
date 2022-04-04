import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Paper } from "@mui/material";
import { Button, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StudentStudyMaterial() {
  function createData(SubjectName, date, Doc) {
    return { SubjectName, date, Doc };
  }

  const rows = [
    {
      subject: "java",
      date: "16 Mar, 2022",
      link: "www.google.com",
    },

    {
      subject: "java",
      date: "16 Mar, 2022",
      link: "www.google.com",
    },

    {
      subject: "java",
      date: "16 Mar, 2022",
      link: "www.google.com",
    },

    {
      subject: "java",
      date: "16 Mar, 2022",
      link: "www.google.com",
    },

    {
      subject: "java",
      date: "16 Mar, 2022",
      link: "www.google.com",
    },
  ];

  return (
    <>
      <Grid align="center">
        <Paper
          elevation={10}
          style={{ width: "90vw", height: "500px", margin: "20px" }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>document</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr>
                  <td>{rows[i].subject}</td>
                  <td>{rows[i].date}</td>
                  <td>{rows[i].link}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid>
    </>
  );
}
