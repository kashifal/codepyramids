import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Face, Facebook, Google } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Divider, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const logo = require("../../assets/hero-image-1.png");

export default function Login() {
  return (
    <Box className="relative w-[100%] h-[90vh]  flex items-center justify-center">
      <div className="absolute w-[100%]  h-[5px] bg-custom-primary left-0 top-0"></div>

      <Box className="h-[70%] w-[25%] flex items-center py-4 flex-col ">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          className="normal-case	  w-[332px] h-[48px]"
        >
          Login with Google
        </Button>
        <Button
          startIcon={<Facebook />}
          className="normal-case	bg-custom-dark text-white mt-2  w-[332px] h-[48px]"
        >
          Login with Facebook
        </Button>
        <Divider className="mt-4  w-[332px]  flex items-center justify-center">
          <Chip label="or" />
        </Divider>
        <TextField
          type="email"
          label="Enter email adress"
          placeholder="Enter email adress"
          fullWidth
          className="mt-4  w-[332px] h-[48px]"
        />
        <TextField
          type="password"
          label="Enter password"
          placeholder="Enter Password"
          fullWidth
          className="mt-4  w-[332px] h-[48px]"
        />
        <Box className="text-left mt-4 w-[332px] h-[32px]  flex items-center justify-start">
          <Typography className="text-left " variant="subtitle2">
            Don't have account{" "}
            <Link className="text-custom-primary" to="/register">
              Register{" "}
            </Link>
          </Typography>
        </Box>
        <Button
          startIcon={<LoginIcon />}
          className="bg-custom-primary normal-case	 text-white mt-2  w-[332px] h-[48px]"
        >
          Login now
        </Button>
        <Box className="text-left mt-4 w-[332px] h-[32px]  flex items-center justify-start">
          <Typography className="text-left " variant="subtitle2">
            Forget password,{" "}
            <Link className="text-custom-primary" to="/forget-password">
              click here{" "}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
