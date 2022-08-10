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
    <Box className="relative w-[100%] min-h-[90vh]  flex items-center justify-center">
      <div className="absolute w-[100%]  h-[5px] bg-custom-primary left-0 top-0"></div>

      <Box className="h-[70%] w-[25%] flex items-center py-4 flex-col ">
        <Button
          style={{ borderRadius: 0 }}
          variant="contained"
          color="primary"
          startIcon={<Google />}
          className=" normal-case	 w-[332px] h-[48px]"
        >
          Register with Google
        </Button>
        <Button
          style={{ borderRadius: 0 }}
          startIcon={<Facebook />}
          className="normal-case	bg-custom-dark text-white mt-2  w-[332px] h-[48px]"
        >
          Register with Facebook
        </Button>
        <Divider className="mt-4  w-[332px]  flex items-center justify-center">
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
        <Button
          style={{ borderRadius: 0 }}
          startIcon={<LoginIcon />}
          className="bg-custom-primary normal-case	 text-white mt-2  w-[332px] h-[48px]"
        >
          Register now
        </Button>
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
