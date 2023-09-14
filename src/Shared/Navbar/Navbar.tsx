import './navbar.css'

const Navbar = () => {
    return (
        <div>
             <nav className="navbar ">
            <div className="navbar-container conatainer">
                <div className="brand">Shopping</div>
                <ul className="nav-menu">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Services</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;