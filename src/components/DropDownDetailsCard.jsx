import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DropdownDetailsCard = ({ data, type }) => {
  if (!data) return null;

  return (
    <Card sx={{ mt: 2, bgcolor: "#1a1a1a", color: "#00f2ff" }}>
      <CardContent>
        <Typography variant="h6">{type === "client" ? "Client" : "Employee"} Details</Typography>
        <Typography>Name: {data.name}</Typography>
        {data.role && <Typography>Role: {data.role}</Typography>}
        {data.industry && <Typography>Industry: {data.industry}</Typography>}
        <Typography>Contact: {data.contact}</Typography>
      </CardContent>
    </Card>
  );
};

export default DropdownDetailsCard;
