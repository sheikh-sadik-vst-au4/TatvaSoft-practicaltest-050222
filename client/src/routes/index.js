import React from "react";
import { Route ,BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "../pages/Login";
import UserList from "../pages/UserList";
const AppRoutes = () => {
    return (
        <div>
        <Router>  
            <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/userlist' element={<UserList/>}/>
        </Routes>
        </Router>
         </div>
   )    
}

export default AppRoutes;