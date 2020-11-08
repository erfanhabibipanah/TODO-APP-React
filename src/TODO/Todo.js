import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <List className="Todo">
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={todo} secondary="deadline: " />
      </ListItem>
    </List>
  );
};

export default Todo;
