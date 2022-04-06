import { Grid, Paper } from "@mui/material";
import { Button, Table } from "react-bootstrap";

export default function FacultyList() {
  let faculty = [
    {
      name: "sagar",
      email: "sagar@gmail.com",
      surname: "sss",
    },
    {
      name: "vishal",
      email: "vishal@gmail.com",
      surname: "sss",
    },
    {
      name: "ganesh",
      email: "ganesh@gmail.com",
      surname: "sss",
    },
  ];

  return (
    <>
      <Grid align="center">
        <Paper
          elevation={10}
          style={{ width: "700px", height: "60vh", marginTop: "100px" }}
        >
          <div className="p-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>SurName</th>
                  <th>Account</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((row) => (
                  <tr>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.surname}</td>
                    <td>
                      {<Button type="submit">Enable </Button>} {}
                      {}
                      {}
                      {}
                      <Button type="submit">Disable</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Paper>
      </Grid>
    </>
  );
}
