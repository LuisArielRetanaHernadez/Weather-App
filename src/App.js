import './App.css';

// react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// views
import Home from './views/Home';
import WeatherInformation from './views/WeatherInformation';

// layout
import Menu from './layout/Menu';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      <Switch>
        <Menu> 
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/weather/:name">
            <WeatherInformation/>
          </Route>
        </Menu>
      </Switch> 
     </BrowserRouter>

    </div>
  );
}

export default App;
