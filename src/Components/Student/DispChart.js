import axios from "axios";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function DispChart() {
  let [data, setData] = useState([]);
  const theme = useTheme();
  let user = sessionStorage.getItem("user");
  let param;

  let response;
  useEffect(async () => {
    if (user !== "null" && user !== null && user !== undefined)
      user = JSON.parse(sessionStorage.getItem("user"));
    param = user.portalId;

    let resp = await axios.get(
      `http://localhost:8080/Student/getScore?id=${param}`
      //
    );
    response = resp.data;
    setData(response);
  }, []);

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis
          dataKey="time"
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        />
        <YAxis
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        ></YAxis>
        {/* <LineChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 100,
        left: 20,
        bottom: 5,
      }}
    > */}
        <Label
          angle={270}
          position="left"
          style={{
            textAnchor: "middle",
            fill: theme.palette.text.primary,
            ...theme.typography.body1,
          }}
        >
          Score
        </Label>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="score" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="score"
          stroke={theme.palette.primary.main}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
