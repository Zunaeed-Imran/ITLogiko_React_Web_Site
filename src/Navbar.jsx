import { RxDropdownMenu } from 'react-icons/rx';



function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <RxDropdownMenu size={'1.5rem'} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>App Development Service</a>
              </li>
              <li>
                <a>Web Design and Development</a>
              </li>
              <li>
                <a>E-Commerce Solution</a>
              </li>
              <li>
                <a>Domain Services</a>
              </li>
              <li>
                <a>Hosting Services</a>
              </li>
              <li>
                <a>MVP Service</a>
              </li>
              <li>
                <a>Offshore Ofice Expansion</a>
              </li>
              <li>
                <a>End to end Development</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Home</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">About</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Registration</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Admin Logon</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Employee Login</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
