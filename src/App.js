import { Routes,Route,Link } from "react-router-dom";
import Users from "./Users";
import User from "./User";
function App() {
  return (
    <>
    <nav>
      <ul>
      <li>
          <Link to="/users">Users</Link>
        </li>

      </ul>
    </nav>
    
    <Routes>
    
    <Route path="/users" element={<Users />} />
    <Route path="/user/:userId" element={<User />} />
    </Routes>
    </>
    
  );
}

export default App;
