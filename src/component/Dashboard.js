import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Typography, Drawer, CssBaseline, AppBar, Toolbar, List, IconButton, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Menu, ChevronRight, ChevronLeftTwoTone, AccountCircle} from '@material-ui/icons';
import { useStyles } from './global/useStyles';
import { useHistory } from 'react-router-dom';
import { sideItems } from './global/localStore';


 const Dashboard=(props)=>{
   let history=useHistory();
  console.log("Dashboasrd: ", props)
  const itemClick = (item) => {
    console.log("Icon click action is: ", item);
    // return <Router>
    //   <Link to={item} />
    // </Router>
    history.push(item);
  //  return <Redirect to={{pathname:{item}}}/>
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
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer"
            onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>Dashboard</Typography>&nbsp; &nbsp; &nbsp;
          <Typography noWrap >Signin</Typography> &nbsp; &nbsp; &nbsp;
          <Typography noWrap>Signup</Typography> &nbsp; &nbsp; &nbsp;
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftTwoTone /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideItems.map((item, index) => {
            return <ListItem button key={index} onClick={() => itemClick(item.link)}>
              <ListItemIcon >{item.icons}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          })}
        </List>
      </Drawer>
      <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
        <div className={classes.drawerHeader} />
        <Typography paragraph>TODO some thing here </Typography>
      </main>
    </div>
    </React.Fragment>
  );
}
export default Dashboard;