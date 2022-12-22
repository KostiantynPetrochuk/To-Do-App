import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { selectActiveFilter } from "../Filters/filtersSlice";
import { selectVisibleTasks, deleteTask, toggleStatus } from "./tasksSlice";
import { Alert } from "../../components/Notice";

//---helper---
const getId = (target) => {
  const element = target;
  const elementId = element.dataset.id;

  if (elementId) {
    return elementId;
  }
  return getId(element.parentNode);
};
//---
const getCommand = (target) => {
  const element = target;
  const elementCommand = element.dataset.command;

  if (elementCommand) {
    return elementCommand;
  }
  return getCommand(element.parentNode);
};
//---

export default function TasksList() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const tasksList = useSelector((state) =>
    selectVisibleTasks(state, activeFilter)
  );

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleListClick = (event) => {
    const targetTaskId = getId(event.target);
    const targetCommand = getCommand(event.target);
    switch (targetCommand) {
      case "toggle":
        console.log("toggle");
        handleToggleTaskStatus(targetTaskId);
        break;
      case "delete":
        console.log("delete");
        handleDeleteTask(targetTaskId);
        break;
    }
  };

  const listItems = tasksList.map((task) => {
    const labelId = `checkbox-list-label-${task.id}`;
    const textDecoration = task.isDone ? "line-through" : "none";

    return (
      <Task
        key={task.id}
        task={task}
        labelId={labelId}
        textDecoration={textDecoration}
      />
    );
  });

  if (tasksList.length > 0) {
    return (
      <List
        onClick={handleListClick}
        sx={{ width: "100%", bgcolor: "background.paper" }}
      >
        {listItems}
      </List>
    );
  } else {
    return (
      <Alert sx={{ marginTop: 5 }} severity="info">
        There is no task here!
      </Alert>
    );
  }
}

//----
const Task = (props) => {
  const { task, labelId, textDecoration } = props;

  return (
    <ListItem
      data-id={task.id}
      key={task.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" data-command="delete">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton data-command="toggle" role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.isDone}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={`${task.body}`}
          sx={{ textDecoration: textDecoration }}
        />
      </ListItemButton>
    </ListItem>
  );
};
