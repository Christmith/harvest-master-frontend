import React from 'react'
import { Grid, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { Map } from '../../pages/paddy-inventory/Map';

export const CommunityMarketSearch = () => {
  return (
    <>
      <Grid item xs={3} >
        <Paper elevation={3} style={{ height: "100%" }}>
          <Box p={2}>
            <Typography
              variant="h5"
              fontWeight={"600"}
              sx={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Search
            </Typography>
            <TextField
              label="Enter District"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ marginBottom: 3 }}
            />
            <Map></Map>
            <TextField
              sx={{ marginTop: 3 }}
              label="Crop season"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Vareity of rice"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" style={{ marginTop: "10px" }}>
              Search
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
