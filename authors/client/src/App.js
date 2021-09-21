import './App.css';
import Home from './views/Home';
import Update from './views/Update';
import NewAuthor from './views/NewAuthor';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <h1>Favorite Authors</h1>
        
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/new">
            <NewAuthor></NewAuthor>
          </Route>

          <Route exact path="/update/:id">
            <Update></Update>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
