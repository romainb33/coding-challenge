import {Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import Temperature from './Components/Temperature';
import CustomizeImage from './Components/CustomizeImage';

function App() {
  return (
    <div className="App">

      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/temperature" >Temperature</NavLink>
        <NavLink to="/customize-image" >Customize Image</NavLink>
      </nav>

      <Switch>
        <Route exact path="/" />
        <Route exact path="/temperature" component={Temperature} />
        <Route exact path="/customize-image" component={CustomizeImage}/>
      </Switch>

    </div>
  );
}

export default App;
