import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/signup-image.jpg";

// Function to validate JWT token
const validateJWT = (email) => {
  const storedToken = localStorage.getItem("jwt");
  if (!storedToken) return false;

  const [header, payload] = storedToken.split(".");
  const decodedPayload = JSON.parse(atob(payload));

  return decodedPayload.email === email;
};

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Media query to detect small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the entered credentials match the stored ones
    if (
      !storedUser ||
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setError("Invalid email or password.");
      return;
    }

    const token = validateJWT(email) ? localStorage.getItem("jwt") : null;
    if (!token) {
      setError("Invalid token.");
      return;
    }

    console.log("User logged in successfully and JWT token is validated!");
    alert("Login Successful");
    navigate("/dashboard");
  };

  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Left Side with Background Image */}
      <Grid
        item
        xs={12}
        md={7}
        style={{
          display: isSmallScreen ? "none" : "flex", // Hide background image on small screens
          alignItems: "center",

          backgroundImage: isSmallScreen ? "none" : `url(${loginImage})`, // Only show image on large screens
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          color: "white",
        }}
      >
        <Box sx={{ marginLeft: theme.spacing(11) }}>
          <Typography variant="h4" component="h3" gutterBottom>
            GoFinance
          </Typography>
          <Typography paragraph>
            The most popular peer-to-peer lending at sea
          </Typography>
          {!isSmallScreen && (
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "20px" }}
            >
              Read More
            </Button>
          )}
        </Box>
      </Grid>

      {/* Right Side with Input Fields */}
      <Grid
        item
        xs={12}
        md={5}
        container
        alignItems="center"
        justifyContent="center"
        style={{
          padding: theme.spacing(2),
          height: "100%", // Full height to maintain consistency
          display: "flex", // Use flexbox to center the form vertically
          flexDirection: "column",
          justifyContent: "center", // Center the form vertically
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 400, padding: theme.spacing(4) }}>
          <Typography variant="h6">Login</Typography>
          <Typography paragraph>Enter your credentials to log in</Typography>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ marginBottom: theme.spacing(2) }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ borderRadius: "12px" }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ borderRadius: "12px" }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              sx={{ marginTop: theme.spacing(2), borderRadius: "12px" }}
            >
              Login
            </Button>
          </form>

          <Box sx={{ textAlign: "center", marginTop: theme.spacing(2) }}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign Up
              </Button>
            </Typography>

            {/* Forgot Password Link */}
            <Typography variant="body2" sx={{ marginTop: theme.spacing(2) }}>
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Forgot Password?
              </Button>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
