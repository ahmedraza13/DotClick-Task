import * as React from "react";
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function DashBoardHeader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", height: "60px", backgroundColor: "#fff" , width: '100%'}}>
      {/* Left Side: Search Box */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{ flex: 1, maxWidth: "400px" }} // Makes search box flexible
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Right Side: Notification and Profile Icons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Notification Icon */}
        <IconButton sx={{ position: "relative" }}>
          <NotificationsIcon />
          {/* Optional: Notification Badge */}
          <Box sx={{
            position: "absolute", top: "-5px", right: "-5px", backgroundColor: "red", color: "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px"
          }}>
            3 {/* Number of notifications */}
          </Box>
        </IconButton>

        {/* Profile Icon */}
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
