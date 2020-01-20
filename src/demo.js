import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
//import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
//import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LocalActivityOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="Recents"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Explore"
        value="Explore"
        icon={<ExploreOutlinedIcon />}
      />
      <BottomNavigationAction
        label="New Post"
        value="Post"
        icon={<AddCircleOutlineOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Notification"
        value="Notification"
        icon={<LocalActivityOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        icon={<PersonOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
