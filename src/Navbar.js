import logo from "./react-logo.png"
function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="logo__img" alt="React logo"></img>
            <ul className="nav__items">
                <li className="nav__list">Pricing</li>
                <li className="nav__list">About</li>
                <li className="nav__list">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar