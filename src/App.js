import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
      <Router>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/Login"} exact component={Login}/>
        <Route path={"/Profile"} exact component={Profile}/>
      </Router>
  );
}

export default App;
