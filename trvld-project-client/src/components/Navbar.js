import './Navbar.css';
import pin from '../images/pin.png';

function Navbar() {
  return (
    <nav className="navbar">
        <img
          src={pin}
          className="navbar-brand d-inline-block align-top flex-wrap"
          alt="pin-icon"
        />
        trip(pin)
      </nav>
  );
}

export default Navbar;
