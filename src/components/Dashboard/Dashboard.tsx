import React, { useState } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './Dashboard.style';
import { mainListItems, secondaryListItems } from 'components/Menu';

export interface IDashboard {
  children?: React.ReactChild | React.ReactChild[];
}

const Dashboard: React.FC<IDashboard> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <>{children}</>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
