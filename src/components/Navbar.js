import logo from "./images/react-logo.png"
function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div className="logo__container">
            <img src={logo} className="logo__img" alt="React logo"></img>
            <h3 className="logo__h3">ReactFacts</h3>
            </div>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar