import { useContext } from "react";
import { Link , useNavigation } from 'react-router-dom';
import AuthContext from "../store/authContext";
function MainNavbar({ }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigation();
  function handleLogOut() {
    logout();
    navigate("/");
  }
  return (
    <header className="main-navbar">
      <nav>
        <div>
          <ul>
            <li >
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={"features"}>Features</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
            <li>
              <Link to={"history"}>History</Link>
            </li>
          </ul>
        </div>
        {user && <div>
          <ul>
            <li>
              {'Welcome ' + user.username}
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>}
      </nav>
    </header>
  );
}

export default MainNavbar;