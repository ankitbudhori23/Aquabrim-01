import { Link } from "react-router-dom";
import Img from "../assets/logo.png";
function Header() {
  return (
    <div className="navbar bg-base-100 border-b shadow">
      <div className="flex-1">
        <Link to="/" className="ml-3 cursor-pointer">
          <img src={Img} className="w-20" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="btn btn-ghost">menu</div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-auto min-w-[7rem]"
          >
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
