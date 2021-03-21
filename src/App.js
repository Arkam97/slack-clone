import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {useStateValue} from './stateprovider';


function App() {
  const [{user},dispatch]= useStateValue();
  // const [user, setUser] = useState(null)
  return (
      <div className="App">
        <Router>
        {
          !user ? (
            <Login />
          ) 
            : (
              <>
            <Header/>
              <div className="app_body">
                <Sidebar/>
                <Switch >  
                <Route exact path="/">
                        <h1>Welcome</h1>
                  </Route>
                  <Route path="/room/:roomId">
                        <Chat/>
                  </Route>
                </Switch>
              </div>
            </>
            )   
        }

        </Router>
      </div>  
    
  );
}

export default App;
