import { Link } from "react-router-dom";
import "../css/Navbar.css"

const NavBar = () => {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">ScriptureAI</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Search Verses</Link>
            <Link to="/summary" className="nav-link">Summarize</Link>
        </div>
    </nav>
}

export default NavBar