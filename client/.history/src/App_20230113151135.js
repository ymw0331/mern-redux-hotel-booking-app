import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Home from "./booking/Home.jsx";

function App ()
{
  return (
    <div className="App">

      <BrowserRouter>

        
      </BrowserRouter>
      <Home />
      <Login />
      <Register />
    </div>
  );
}
export default App;