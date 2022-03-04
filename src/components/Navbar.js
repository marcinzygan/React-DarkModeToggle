import logo from "./images/react-logo.png"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo__container">
            <img src={logo} className="logo__img" alt="React logo"></img>
            <h3 className="logo__h3">ReactFacts</h3>
            </div>
            <h4 className="logo__h4">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar