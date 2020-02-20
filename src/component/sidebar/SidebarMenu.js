import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, Drawer, CssBaseline, AppBar, Toolbar, List,
  IconButton, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

import {Menu, ChevronRight, Group,GroupAdd, InsertDriveFile, ChevronLeftTwoTone}from '@material-ui/icons';


const drawerWidth = 240;

const sideItems=[
  {"name":"Users", "icons":<Group/>},
  {"name":"Agents", "icons":<GroupAdd/>},
  {"name":"Agent Files", "icons":<InsertDriveFile/>}
]
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export default function SidebarMenu() {
  const itemClick=(item)=>{
    console.log("Icon click action is: ", item);
  }
  const classes = useStyles();
const theme = useTheme();
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer"
            onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftTwoTone /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
     {sideItems.map((item,index)=>{
       return <ListItem button key={index} onClick={()=>itemClick(item.name)}>
         <ListItemIcon >{item.icons}</ListItemIcon>
         <ListItemText primary={item.name}/>
       </ListItem>
     })}
        </List>
      </Drawer>
      <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
        <div className={classes.drawerHeader} />
        <Typography paragraph>TODO some thing here </Typography>       
      </main>
    </div>
  );
}