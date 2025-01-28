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
import signupImage from "../assets/signup-image.jpg";
import { useNavigate } from "react-router-dom";

const generateJWT = (email) => {
  const payload = { email };
  const header = { alg: "HS256", typ: "JWT" };

  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));

  const signature = "signature-placeholder";

  return `${base64Header}.${base64Payload}.${signature}`;
};

const SignUpPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Media query to detect small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // State to handle form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const token = generateJWT(email);

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    localStorage.setItem("jwt", token);

    console.log("User signed up successfully and JWT token is stored!");
    alert("Signup Successfull")
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

   navigate("/login")
  };

  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Left Side with Background Image */}
      <Grid
        item
        xs={12}
        md={7}
        style={{
          display: isSmallScreen ? "none" : "flex", // Hide background on small screens
          alignItems: "center",
         
          backgroundImage: !isSmallScreen ? `url(${signupImage})` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          color: "white",
        }}
      >
        <Box sx={{ marginLeft: theme.spacing(12) }}>
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
        <Box
          sx={{
            width: "80%",
            maxWidth: 400,
            padding: theme.spacing(4),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Ensure the form is centered vertically
          }}
        >
          <Typography variant="h6" align="center">Hello Again!</Typography>
          <Typography paragraph align="center">Welcome Back</Typography>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ marginBottom: theme.spacing(2), textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleSignUp}>
            <TextField
              label="Name"
              type="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ borderRadius: "12px" }}
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Sign Up
            </Button>
          </form>

          <Box sx={{ textAlign: "center", marginTop: theme.spacing(2) }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
