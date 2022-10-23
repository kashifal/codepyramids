import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="relative  mb-4 overflow-hidden w-full min-h-[40vh] flex items-center justify-center ">
      <div className="w-[1424px]  px-4  h-full  flex items-start justify-between  flex-col">
        <h1 className="py-4 text-[28px] font-black">Course Content</h1>
        <p className="pb-4 text-[16px] font-medium text-slate-600">
          8 Modules .120 Lectures . 20hours
        </p>
        <div className="w-full border-2 shadow-none">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 1
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                Introduction to computer science
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 2
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                Introduction to Web Developmet
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 3
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                What Programming we are gonna use
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 4
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                All about Html,css and Js
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 5
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                CSS framework tailwind css
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 6
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                Let's Build 3 projects
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 7
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                Advance concepts of Javascript
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-custom-primary font-medium  hidden md:block"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                <RocketLaunchIcon /> Module 8
              </Typography>
              <Typography className="text-custom-dark font-bold text-sm md:text-lg">
                ReactJS | Game changer
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex">
                <Typography className="text-custom-dark">Topic 1</Typography>{" "}
                <Typography className="pl-16  text-custom-dark">
                  What is Computer Science.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 2</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 3</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Low level Programmig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 4</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is High levelProgrammig language.
                </Typography>
              </Box>
              <Box className="flex  mt-4">
                <Typography className="text-custom-dark">Topic 5</Typography>{" "}
                <Typography className="pl-16 text-custom-dark">
                  What is Programmig language.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
