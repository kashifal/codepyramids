import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MySlider from "../../../components/MySlider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full min-h-[50vh] flex items-start justify-center mt-8">
      <div className="w-[1424px] mx-auto px-4  h-full  flex items-center justify-between">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderborderColor: "#000838" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#000838",
                  height: "3px",
                  borderRadius: "5px",
                  color: "#000838",
                },
              }}
            >
              <Tab
                label="Age 6+"
                style={{ color: "#000838" }}
                {...a11yProps(0)}
              />
              <Tab
                label="Age 10+"
                style={{ color: "#000838" }}
                {...a11yProps(1)}
              />
              <Tab
                label="Age 13+"
                style={{ color: "#000838" }}
                {...a11yProps(2)}
              />
              <Tab
                label="Age 15+"
                style={{ color: "#000838" }}
                {...a11yProps(3)}
              />
              <Tab
                label="Age 18+"
                style={{ color: "#000838" }}
                {...a11yProps(4)}
              />
              <Tab
                label="CodePyramids for schools"
                className="text-[#000838]"
                style={{ color: "#000838" }}
                {...a11yProps(5)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <MySlider />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>{" "}
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>{" "}
          <TabPanel value={value} index={4}>
            Item five
          </TabPanel>{" "}
          <TabPanel value={value} index={5}>
            Item six
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
