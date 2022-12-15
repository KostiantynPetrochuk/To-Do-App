import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setFilter } from "../store/actions/filtersActions";

export default function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <Divider />
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab onClick={() => dispatch(setFilter("all"))} label="All" />
        <Tab onClick={() => dispatch(setFilter("active"))} label="Active" />
        <Tab
          onClick={() => dispatch(setFilter("completed"))}
          label="Completed"
        />
      </Tabs>
      <Divider />
    </Box>
  );
}
