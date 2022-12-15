import { useState } from "react";
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

export default function TasksList() {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const tasksList = useSelector((state) =>
    selectVisibleTasks(state, activeFilter)
  );
  if (tasksList.length > 0) {
    return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasksList.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;
          const textDecoration = task.isDone ? "line-through" : "none";
          console.log(task);
          return (
            <ListItem
              key={task.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(task.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.isDone}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    onChange={() => dispatch(toggleStatus(task.id))}
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
        })}
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
