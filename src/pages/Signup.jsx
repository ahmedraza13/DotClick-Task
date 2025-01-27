import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, useTheme } from "@mui/material";
import signupImage from "../assets/signup-image.jpg"; // Ensure path is correct

// Simplified function to generate JWT (just for simulation)
const generateJWT = (email) => {
  const payload = { email };  // Use email as payload
  const header = { alg: "HS256", typ: "JWT" };
  
  // Base64 encode the header and payload (mocking JWT)
  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));

  // Simulate the signature by just appending a mock string (not real signing)
  const signature = "signature-placeholder";

  return `${base64Header}.${base64Payload}.${signature}`;
};

const SignUpPage = () => {
  const theme = useTheme();

  // State to handle form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Generate the JWT token (for simulation)
    const token = generateJWT(email);

    // Store user and token in localStorage (simulate user registration)
    localStorage.setItem("user", JSON.stringify({ email }));
    localStorage.setItem("jwt", token);

    console.log("User signed up successfully and JWT token is stored!");

    // Clear form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    // Redirect user to the login page (for simplicity, just print in the console)
    window.location.href = "/login";
  };

  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Left Side with Background Image */}
      <Grid
        item
        xs={12}
        md={7}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${signupImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          color: "white",
        }}
      >
        <Box sx={{ marginLeft: theme.spacing(15) }}>
          <Typography variant="h4" component="h3" gutterBottom>
            GoFinance
          </Typography>
          <Typography paragraph>
            The most popular peer-to-peer lending at sea
          </Typography>
          <Button variant="contained" color="primary" sx={{ borderRadius: "20px" }}>
            Read More
          </Button>
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
          height: "100%",
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 400, padding: theme.spacing(4) }}>
          <Typography variant="h6">Create Account</Typography>
          <Typography paragraph>Sign up to get started</Typography>

          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: theme.spacing(2) }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleSignUp}>
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
                onClick={() => {
                  // Navigate to Login Page (replace with actual route)
                  window.location.href = "/login";
                }}
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
