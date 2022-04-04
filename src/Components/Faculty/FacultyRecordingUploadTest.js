import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

//import { Table } from "react-bootstrap";

export default function FacultyRecordingUpload() {
  function createData(
    id,
    date,
    SubjectName,
    Title,
    RecordingLink,
    keyPasswowrd
  ) {
    return { id, date, SubjectName, Title, RecordingLink, keyPasswowrd };
  }

  const rows = [
    createData(
      0,
      "16 Mar, 2022",
      "Java",
      "day4",
      "https://us02web.zoom.us/rec/share/BGBuhlm9A0w-63xzur0hKFGM55u0QWN75t-vNCewsIwC4d_GXnFGe_-AMIUN3tk.4b3B5f5n5iigjQ2G",
      "+Nqk$9Pw"
    ),

    createData(
      1,
      "17 Mar, 2022",
      "DBMS",
      "day4",
      "https://us02web.zoom.us/rec/share/BGBuhlm9A0w-63xzur0hKFGM55u0QWN75t-vNCewsIwC4d_GXnFGe_-AMIUN3tk.4b3B5f5n5iigjQ2G",
      "+Nqk$9Pw"
    ),
    createData(
      2,
      "18 Mar, 2022",
      "J2EE",
      "day4",
      "https://us02web.zoom.us/rec/share/BGBuhlm9A0w-63xzur0hKFGM55u0QWN75t-vNCewsIwC4d_GXnFGe_-AMIUN3tk.4b3B5f5n5iigjQ2G",
      "+Nqk$9Pw"
    ),
    createData(
      3,
      "19 Mar, 2022",
      "REACT",
      "day4",
      "https://us02web.zoom.us/rec/share/BGBuhlm9A0w-63xzur0hKFGM55u0QWN75t-vNCewsIwC4d_GXnFGe_-AMIUN3tk.4b3B5f5n5iigjQ2G",
      "+Nqk$9Pw"
    ),
  ];

  return (
    <div>
      <Grid align="center" spacing={2}>
        <Paper
          elevation={10}
          style={{ width: "500px", height: "63vh", borderRadius: 16 }}
        >
          <Form className="mt-2" style={{ width: "480px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="datetime-local" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject name</Form.Label>
              <Form.Control type="text" placeholder="Subject name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Topic Name</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ color: "Black" }}>
              Submit
            </Button>
          </Form>
        </Paper>
      </Grid>
      <Grid>
        <Paper sx={{ p: 2 }}>
          <React.Fragment>
            {/* <Title>Recent Quiz</Title> */}
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Subject name</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Video </TableCell>
                  <TableCell>Key</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.SubjectName}</TableCell>
                    {/* <TableCell>{row.Title}</TableCell> */}
                    <TableCell>{row.RecordingLink}</TableCell>
                    <TableCell>{row.keyPasswowrd}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton aria-label="delete" size="large">
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link color="primary" href="#" sx={{ mt: 3 }}>
              See more students records
            </Link>
          </React.Fragment>
        </Paper>
      </Grid>
    </div>
  );
}
