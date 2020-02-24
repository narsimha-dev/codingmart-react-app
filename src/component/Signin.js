import React from 'react';
import {connect} from 'react-redux';
import {getUserToken} from '../redux/actions/userAction';
import { LoginPage } from './LoginPage';
import { fakeAuth } from './global/localStore';
// import Dashboard from './Dashboard';
import MainRouter from './MainRouter';
import Dashboard from './Dashboard';
import { Redirect } from 'react-router';
// import { fakeAuth } from './global/localStore';


class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''        
        }
    }
    eventHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

submitButton=(e)=>{
e.preventDefault();
const data={
  username:this.state.username,
  password:this.state.password
}
this.props.dispatch(getUserToken(data));
fakeAuth.isAuthenticated=true;
}
render(){
  const{username, password}=this.state;
  const{token}=this.props;
  
  if(token===null || token==='' || token===undefined ){
    fakeAuth.isAuthenticated=false;
    return <LoginPage eventHandler={this.eventHandler} 
    username={username} password={password} submitButton={this.submitButton}/>;
     }else if(token){  
        // return <Dashboard/>
        return  <Redirect to={{ pathname: "/dashboard"}}/>
      }
}
}

const mapStateToProps=(state)=>{
  return state.userDetails;
}
export default  connect(mapStateToProps) (Signin);