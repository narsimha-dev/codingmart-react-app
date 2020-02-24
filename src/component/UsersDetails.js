import React from 'react';
import {connect} from 'react-redux';
import { TableBody, TableCell, TableRow} from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import TableFormat from './global/TableFormate';


const rowData=["Name","Email","Address","Contact No","City","Roles"];


class UsersDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    convertCustomeuserRole=(roles)=>{
       let userRoles=roles.toString();
      const userRole=userRoles && userRoles.substring(5);
      return userRole;
    }
    render(){
      const{data}=this.props;
      
      const tableRows= rowData.map((rowName,id)=>{
        return <TableRow key={id}>
          <TableCell>{rowName}</TableCell>
        </TableRow>
      })
      const tableBody=data && data.map((user,id)=>{
      return <TableBody key={id}>
        <TableCell>{user.username}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.address}</TableCell>
        <TableCell align="right">{user.mobileNumber}</TableCell>
        <TableCell align="right">{user.city}</TableCell>
        <TableCell align="right">{user.this.convertCustomeuserRole(user.roles)}</TableCell>
      </TableBody>  
      });

  return (
    <React.Fragment>
      <Dashboard/>
        <TableFormat row={tableRows} data={tableBody}/>
    </React.Fragment>
  );
}
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps: ", state.userDetails)
  return state.userDetails;
}
export default connect(mapStateToProps) (UsersDetails);
