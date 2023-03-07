import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/bg.png"})`,
        //backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <Typography color="#ffffff" align="center" variant="h2" marked="center"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Online Voting System
      </Typography>
      
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
        onClick={handleClick}
      >
        Enter the Voting System
      </Button>
    </CoverLayout>
  );
}
