import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Dashboard } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class UsersDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
      const{username,email,address, mobileNumber, city, roles}=this.props;
      let userRoles=roles.toString();
      const userRole=userRoles && userRoles.substring(5);

  return (
    <React.Fragment>
      <Dashboard/>
    <TableContainer component={Paper}>
      <Table style={{minWidth:650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Roles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableCell align="right">{username}</TableCell>
              <TableCell align="right">{email}</TableCell>
              <TableCell align="right">{address}</TableCell>
              <TableCell align="right">{mobileNumber}</TableCell>
              <TableCell align="right">{city}</TableCell>
              <TableCell align="right">{userRole}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps: ", state.userDetails)
  return state.userDetails;
}
export default connect(mapStateToProps) (UsersDetails);
