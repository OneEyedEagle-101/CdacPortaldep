import { Grid, Paper } from "@mui/material";
import { Button, Table } from "react-bootstrap";

export default function StudentsList() {
  let student = [
    {
      id: "1",
      name: "sagar",
      email: "sagar@gmail.com",
      surname: "sss",
    },
    {
      id: "2",
      name: "vishal",
      email: "vishal@gmail.com",
      surname: "sss",
    },
    {
      id: "3",
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
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>SurName</th>
                  <th>Account</th>
                </tr>
              </thead>
              <tbody>
                {student.map((row) => (
                  <tr>
                    <td>{row.id}</td>
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
