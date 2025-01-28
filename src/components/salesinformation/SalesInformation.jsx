import * as React from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

export default function SalesInformation() {
  return (
    <Box sx={{ marginLeft: "30px", padding: 2 }}>
      {/* Heading */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Sales Information
      </Typography>

      {/* Labels and Input Boxes */}
      <Grid container spacing={2}>
        {/* Labels on the first row */}
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Customer</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Invoice Id</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Start Date</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>End Date</Typography>
        </Grid>

        {/* Input boxes on the second row with placeholders */}
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            sx={{ width: "100%", maxWidth: "500px" }}
            placeholder="Enter customer name"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            sx={{ width: "100%", maxWidth: "500px" }}
            placeholder="Enter invoice ID"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            sx={{ width: "100%", maxWidth: "500px" }}
            placeholder="Select start date"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            sx={{ width: "100%", maxWidth: "500px" }}
            placeholder="Select end date"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
