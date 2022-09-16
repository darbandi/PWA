import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media() {
  return (
    <Grid
      container
      sx={{
        gap: "16px",
      }}
    >
      {Array.from(new Array(12)).map((item, index) => (
        <Box
          key={index}
          sx={{
            width: 262,
            backgroundColor: "white",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Skeleton variant="circular" width={146} height={146} />

          <Box
            sx={{
              mt: 3,
              mb: 5,
              width: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={100} height={10} />
          </Box>
          <Box
            sx={{
              my: 2,
              width: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Skeleton variant="rectangular" width={60} height={10} />

            <Skeleton variant="rectangular" width={60} height={10} />
          </Box>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Skeleton variant="rectangular" width={60} height={10} />

            <Skeleton variant="rectangular" width={60} height={10} />
          </Box>
          <Box
            sx={{
              my: 2,
              width: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Skeleton variant="rectangular" width={100} height={40} />

            <Skeleton variant="rectangular" width={100} height={40} />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

function CountriesLoading() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}

export default CountriesLoading;
