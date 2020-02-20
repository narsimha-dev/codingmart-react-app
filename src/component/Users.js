import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// const classes = useStyles();

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state={
        username:"abcd",
        password:"123456",
        token:''
        }
    }
    componentDidMount=()=>{
        const data={
            username:this.state.username,
            password:this.state.password
        }
       const headers={"content-type": "application/json"}
            
        
        console.log(data)
        axios.post(`http://localhost:8080/api/auth/user/signin`, headers, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);

      })
      .then((res.data=>))

      .catch(err=>console.log(err))
  }
    
    render(){
  return (
      <div>JHKJHKJBKJNM VBN</div>
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map(row => (
    //         <TableRow key={row.name}>
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
}
export default Users;
