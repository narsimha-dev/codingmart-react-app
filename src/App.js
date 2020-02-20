import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css'; 
import SidebarMenu from './component/sidebar/SidebarMenu';
import Users from './component/Users';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoad:false
    }
  }
  sidebar=(e)=>{
    e.preventDefault();
    this.setState({isLoad:!this.state.isLoad})
  }
  render(){
    if(this.state.isLoad){
      // return <SidebarMenu/>
      return <Users/>
    }
  return (
    <div className="App">
      <header className="App-header">    
      <Button onClick={e=>this.sidebar(e)}variant="contained" color="primary">
      Click load sidbar
    </Button>
      </header>
    </div>
  );
  }
}

export default App;
