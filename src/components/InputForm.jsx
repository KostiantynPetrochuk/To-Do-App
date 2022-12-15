import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { addTask } from "../store/actions/tasksActions";
import { addTask } from "../store/tasksSlice";
import { selectAllTasks } from "../store/selectors/tasksSelectors";
import { Notice } from "./Notice";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function InputForm() {
  const dispatch = useDispatch();
  const [openAddSuccess, setOpenAddSuccess] = useState(false);
  const [openSaveSuccess, setOpenSaveSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskBody = event.target.body.value.trim();
    if (taskBody.length >= 5 && taskBody.length <= 30) {
      dispatch(addTask(taskBody));
      handleOpenAddSuccess();
    } else {
      handleOpenWarning();
    }

    event.target.reset();
  };

  const tasksList = useSelector((state) => selectAllTasks(state));

  const storeTasks = { tasks: tasksList };
  const handleSaveTasks = () => {
    try {
      const stateToBeSaved = JSON.stringify(storeTasks);
      localStorage.setItem("state", stateToBeSaved);
      handleOpenSaveSuccess();
    } catch (error) {
      console.error(error);
    }
  };
  //--------------messages-add-success-------------------
  const handleOpenAddSuccess = () => {
    setOpenAddSuccess(true);
  };

  const handleCloseAddSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddSuccess(false);
  };
  //-------------messages-save-success---------------------
  const handleOpenSaveSuccess = () => {
    setOpenSaveSuccess(true);
  };

  const handleCloseSaveSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSaveSuccess(false);
  };
  //--------------warning-message--------------------------
  const handleOpenWarning = () => {
    setOpenWarning(true);
  };

  const handleCloseWarning = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarning(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        name="body"
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ marginTop: 50 }}>
        Add
      </Button>
      <Button variant="contained" color="success" onClick={handleSaveTasks}>
        Save
      </Button>

      <Notice
        openNotice={openAddSuccess}
        handleCloseNotice={handleCloseAddSuccess}
        noticeBody="Task successfully added!"
        severity="info"
      />

      <Notice
        openNotice={openSaveSuccess}
        handleCloseNotice={handleCloseSaveSuccess}
        noticeBody="Task successfully saved!"
        severity="success"
      />

      <Notice
        openNotice={openWarning}
        handleCloseNotice={handleCloseWarning}
        noticeBody="The body of the task should be between 5 and 30 characters!"
        severity="warning"
      />
    </Box>
  );
}
