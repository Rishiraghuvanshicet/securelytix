import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@securelytix\.com$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!emailRegex.test(email))
      return "Email must be in format: example@securelytix.com";
    if (!passwordRegex.test(password))
      return "Password must be at least 8 characters with letters and numbers";
    return "";
  };

  const handleLogin = () => {
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "400px",
            lg: "450px",
          },
          p: {
            xs: 3,
            sm: 4,
            md: 5,
          },
          borderRadius: 4,
          background: "rgba(0, 0, 20, 0.3)",
          border: "1px solid rgba(0, 255, 255, 0.2)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#00f7ff",
            textShadow: "0 0 10px #00f7ff",
            fontSize: {
              xs: "1.5rem",
              sm: "1.8rem",
              md: "2rem",
            },
          }}
        >
          Securelytix Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ style: { color: "lightgray" } }}
          sx={{
            input: { color: "white" },
            "& label.Mui-focused": {
              color: "#00f0ff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#00f0ff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00f0ff",
                boxShadow: "0 0 6px #00f0ff",
              },
            },
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ style: { color: "lightgray" } }}
          sx={{
            input: { color: "white" },
            "& label.Mui-focused": {
              color: "#00f0ff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#00f0ff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00f0ff",
                boxShadow: "0 0 6px #00f0ff",
              },
            },
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              sx={{ color: "#00f7ff" }}
            />
          }
          label="Remember Me"
          sx={{ mt: 1 }}
        />

        {error && (
          <Typography color="error" mt={1}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            mt: 3,
            py: 1.2,
            fontWeight: 600,
            backgroundColor: "#00f7ff",
            color: "black",
            boxShadow: "0 0 12px #00f7ff, 0 0 24px #00f7ff",
            "&:hover": {
              backgroundColor: "#00cbe6",
              boxShadow: "0 0 16px #00f7ff, 0 0 28px #00f7ff",
            },
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
