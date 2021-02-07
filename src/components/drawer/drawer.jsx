import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
//import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider } from "@material-ui/core";
import { Container, List, NavLk} from "./drawer-style";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer(props) {
  //material ui state by default i.e from the website
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
 
  //material ui config for drawer continue
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //div for list containing nav link
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
        <List>
        <NavLk to='/'>Home</NavLk>
        <Divider light />
        <NavLk to='/about'>About</NavLk>
        <Divider light />
        <NavLk to='/contact'>Contact</NavLk>
        <Divider light />
        <NavLk to='/gallery'>Gallery</NavLk>
        <Divider light />
        <NavLk to='/construction'>Construction</NavLk>
        <Divider light />
        <NavLk to='/blog'>Blog</NavLk>
          <Divider light />
          
        </List>
     
    </div>
  );

  return (
    <Container>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Container>
  );
}
