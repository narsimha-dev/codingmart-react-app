import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Users from "./UsersDetails";
import AgentFiles from "./AgentFiles";
import Agents from "./Agents";
import Dashboard from "./Dashboard";
import { fakeAuth } from "./global/localStore";

export default function MainRouter() {
    return (
        <Router>
            <div>
        <AuthButton />
                <Switch>
                    <PrivateRoute exact path="/dashboard"><Dashboard/></PrivateRoute>
                    <PrivateRoute exact path="/signup"><Signup/></PrivateRoute>
                    <PrivateRoute exact path="/users"><Users/></PrivateRoute>
                    <PrivateRoute exact path="/agetns"><Agents/></PrivateRoute>
                    <PrivateRoute exact path="/agent/files"><AgentFiles/></PrivateRoute>
                    <PrivateRoute exact path="/signin"><Signin/></PrivateRoute>
                    <Route path="/"><Signin/></Route>
                </Switch>
            </div>
        </Router>
    );
}

function PrivateRoute({ children, ...rest }) {
    return <Route {...rest} render={({ location }) =>
                  fakeAuth.isAuthenticated ? (children) 
                                : (<Redirect to={{pathname: "/"}}/>)
        }/>
  }
 
  export function AuthButton() {
    let history = useHistory();  
    return fakeAuth.isAuthenticated && (<p> 
        {/* <Dashboard/> */}
        <button onClick={() => {fakeAuth.signout(() => history.push("/"));}}>Sign out</button>
        </p>)
            }