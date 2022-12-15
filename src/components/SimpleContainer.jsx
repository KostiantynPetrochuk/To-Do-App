import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Title from "./Title";
import InputForm from "../features/Tasks/InputForm";
import TasksList from "../features/Tasks/TasksList";
import NavBar from "../features/Filters/NavBar";

function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Title />
          <InputForm />
          <NavBar />
          <TasksList />
        </Box>
      </Container>
    </>
  );
}

export default SimpleContainer;
