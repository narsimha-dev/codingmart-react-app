import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const loginUser= makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginPage=(props)=>{
const {username, password, eventHandler, submitButton}=props

// let history = useHistory();
// let location = useLocation();

// let { from } = location.state || { from: { pathname: "/" } };
// let signin = () => {
//   fakeAuth.authenticate(() => {
//     history.replace(from);
//   });
// };  
const classes=loginUser();
    return <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Avatar className={classes.avatar}> <LockOutlinedIcon /> 
          </Avatar>
        <Typography component="h1" variant="h5"> Sign in</Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" value={username} onChange={e=>eventHandler(e)} required fullWidth id="text" label="UserName" name="username" autoComplete="text" autoFocus/>
          <TextField variant="outlined" margin="normal" value={password} onChange={e=>eventHandler(e)} required fullWidth name="password" label="Password" type="password"
            id="password" autoComplete="current-password" />
          <Button type="submit" onClick={submitButton}fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          {/* <Button type="submit" onClick={()=>signin}fullWidth variant="contained" color="primary" className={classes.submit}>
          </Button> */}
        </form>
      </div>
    </Container>

}
