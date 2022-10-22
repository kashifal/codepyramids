import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Face, Facebook, Google } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Divider, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const logo = require("../../assets/hero-image-1.png");

export default function Register() {
  return (
    <Box className="relative  mt-[64px] w-[100%] min-h-[90vh]  flex items-center justify-center">
      <div className="absolute w-[100%]  h-[5px] bg-custom-primary left-0 top-0"></div>

      <Box className="h-[70%] w-[25%] flex items-center py-4 flex-col ">
        <button
          style={{ borderRadius: 0 }}  
          className="text-sm  normal-case flex items-center justify-center gap-x-2	 w-[332px] h-[48px] bg-rose-700 text-white"
        >
          <Google fontSize="inherit" /> Register with Google
        </button>
        <button
          style={{ borderRadius: 0 }}  
          className="text-sm  normal-case flex items-center justify-center gap-x-2 mt-2	 w-[332px] h-[48px] bg-blue-700 text-white"
        >
          <Facebook fontSize="inherit" /> Register with Facebook
        </button>
         
        <Divider className=" w-[332px] mt-4 flex items-center justify-center">
          <Chip label="or" />
        </Divider>
        <TextField
          type="name"
          label="First name"
          placeholder="First name"
          fullWidth
          className="mt-4  w-[332px] h-[48px] TextField-without-border-radius"
        />
        <TextField
          type="name"
          label="Last name"
          placeholder="Last name"
          fullWidth
          className="mt-4  w-[332px] h-[48px] TextField-without-border-radius"
        />
        <TextField
          type="email"
          label="Enter email adress"
          placeholder="Enter email adress"
          fullWidth
          className="mt-4  w-[332px] h-[48px] TextField-without-border-radius"
        />
        <TextField
          type="password"
          label="Enter password"
          placeholder="Enter Password"
          fullWidth
          className="mt-4  w-[332px] h-[48px] TextField-without-border-radius"
        />
        <Box className="text-left mt-4 w-[332px] h-[32px]  flex items-center justify-start">
          <Typography className="text-left " variant="subtitle2">
            Already have account{" "}
            <Link className="text-custom-primary" to="/login">
              Login{" "}
            </Link>
          </Typography>
        </Box>
        <button
          style={{ borderRadius: 0 }}  
          className=" normal-case flex text-sm items-center justify-center gap-x-2 mt-2	 w-[332px] h-[48px] bg-custom-pink text-white"
        >
         <LoginIcon fontSize="inherit" />   Register 
        </button>
        {/* <Button
          style={{ borderRadius: 0 }}
          startIcon={<LoginIcon />}
          className="bg-custom-primary normal-case	 text-white mt-2  w-[332px] h-[48px]"
        >
          Register now
        </Button> */}
        {/* <Box className="text-left mt-4 w-[332px] h-[32px]  flex items-center justify-start">
          <Typography className="text-left " variant="subtitle2">
            Forget password,{" "}
            <Link className="text-custom-primary" to="/login">
              click here{" "}
            </Link>
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
}
