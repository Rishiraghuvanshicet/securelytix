import React, { useState } from "react";
import {
  Container,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@mui/material";
import { clients, employees } from "../data/mockData";
import DropdownDetailsCard from "../components/DropDownDetailsCard";  

const Dashboard = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#00f2ff",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Dashboard
        </Typography>

        {/* Client Dropdown */}
        <FormControl fullWidth sx={{ mt: 3 }} variant="outlined">
          <InputLabel sx={{ color: "#00f2ff" }}>Select Client</InputLabel>
          <Select
            label="Select Client"
            value={selectedClient?.id || ""}
            onChange={(e) =>
              setSelectedClient(clients.find((c) => c.id === e.target.value))
            }
            sx={{
              color: "#00f2ff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#00f2ff" },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00f2ff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00f2ff",
              },
              ".MuiSvgIcon-root": { color: "#00f2ff" },
            }}
          >
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DropdownDetailsCard data={selectedClient} type="client" />

        {/* Employee Dropdown */}
        <FormControl fullWidth sx={{ mt: 4 }} variant="outlined">
          <InputLabel sx={{ color: "#00f2ff" }}>Select Employee</InputLabel>
          <Select
            label="Select Employee"
            value={selectedEmployee?.id || ""}
            onChange={(e) =>
              setSelectedEmployee(employees.find((emp) => emp.id === e.target.value))
            }
            sx={{
              color: "#00f2ff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#00f2ff" },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00f2ff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00f2ff",
              },
              ".MuiSvgIcon-root": { color: "#00f2ff" },
            }}
          >
            {employees.map((emp) => (
              <MenuItem key={emp.id} value={emp.id}>
                {emp.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DropdownDetailsCard data={selectedEmployee} type="employee" />
      </Container>
    </Box>
  );
};

export default Dashboard;
