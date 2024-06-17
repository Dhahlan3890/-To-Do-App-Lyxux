import './App.css';
import TaskList from './To-Do-App/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup/Signup';
import LoginPage from './Login/Login';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <PrivateRoute path="/to-do-app" element={<TaskList />} /> */}
        <Route path="/to-do-app" element={<PrivateRoute />}>
          <Route path="" element={<TaskList />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
