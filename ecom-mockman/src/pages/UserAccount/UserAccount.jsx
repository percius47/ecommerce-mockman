import "./UserAccount.css";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const UserAccount = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section account-container">
        <h2 >My Account</h2>

        <div className="account-wrapper">
          <div className="account-tabs">
            <NavLink
              end
              to="/profile"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Profile
            </NavLink>
            <NavLink
              to="/profile/orders"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Orders
            </NavLink>
            <NavLink
              to="/profile/addresses"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Addresses
            </NavLink>
          </div>

          <div className="account-data">
            <Outlet />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { UserAccount };
