import './App.css';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import {store,persistor} from './combined'
import {Provider} from 'react-redux'
import Details from './components/Details';
import Practice from './components/Practice';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <>
        
   <Router  >
     <Provider store={store} >
       <PersistGate persistor={persistor} >
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/cart" exact  component={Cart} />
       < Route path ="/details/:id" exact component={Details} />
       <Route path="/practice/:id" exact component={Practice} />
    
     </Switch>
     </PersistGate>
     </Provider>
  </Router>
 




    </>
  );
}

export default App;
