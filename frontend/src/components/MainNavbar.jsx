import {Link} from 'react-router-dom';

function MainNavbar({ }) {
  return (
    <header className="main-navbar">
      <nav>
        <ul>
          
          <li >
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"features"}>Features</Link>
          </li>
          <li>
            <Link to={"login"}>Login </Link>
          </li>
          <li>
            <Link to={"history"}>History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavbar;