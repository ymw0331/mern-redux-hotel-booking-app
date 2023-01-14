import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from './components/TopNav.jsx';

//components
import Home from "./booking/Home.jsx";
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';




function App ()
{
  return (
    <BrowserRouter>
      {/* { TopNav() } */ }

      <TopNav />
      <ToastContainer
        position='top-center'
      />
      <Routes>
        <Route>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/login' element={ <Login /> } />
          <Route exact path='/register' element={ <Register /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;