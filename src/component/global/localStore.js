import React from 'react'
import { Group, GroupAdd,InsertDriveFile} from '@material-ui/icons';
export const fakeAuth = {
    isAuthenticated: false,
    // isAuthenticated:localStorage.getItem("USER_TOKEN"),
    
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
 export const sideItems = [
    { "name": "Users Info", "icons": <Group />, "link": "/users" },
    { "name": "Agents", "icons": <GroupAdd />, "link": "/agents" },
    { "name": "Agent Files", "icons": <InsertDriveFile />, "link": "/agent/files" }
  ]
  