import './App.css';
import H from './components/Product';
import Sidebar from './components/Sidebar';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Filter from './components/Filter';
function App() {
  return (
    <div className="App">
      
      <Header />


      
<Grid container >

<Grid item xs={12} sm={12} md={8} >
<H/>
  </Grid>

  <Grid item xs={12} sm={12} md={4} >
<Sidebar/>
  </Grid>
  </Grid>
     
    </div>
  );
}

export default App;
