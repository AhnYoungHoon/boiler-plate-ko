//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          
          <Route exact path="/login" component={Auth(LoginPage, false)} /> 
            
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
            
        </Switch>
      </div>
    </Router>
  );
} 

//라우터는 위에 보다시피 표현방식이 두가지
export default App;
