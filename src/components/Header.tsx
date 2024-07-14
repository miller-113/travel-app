import { Link } from "react-router-dom";
import { User } from "../types";
import { FC } from "react";

const BASE_URL = import.meta.env.BASE_URL || "";

interface HeaderProps {
  user: User | null;
  onSignOut: () => void;
}

const Header: FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to={"/"} data-test-id="header-logo" className="header__logo">
          Travel App
        </Link>
        <nav data-test-id="header-nav" className="header__nav">
          <ul className="nav-header__list">
            {user ? (
              <>
                <li className="nav-header__item" title="Bookings">
                  <Link
                    to={"/bookings"}
                    data-test-id="header-bookings-link"
                    className="nav-header__inner"
                  >
                    <span className="visually-hidden">Bookings</span>
                    <img src={`${BASE_URL}assets/images/briefcase.svg`} alt="bookings" />
                  </Link>
                </li>
                <li className="nav-header__item" title="Profile">
                  <div
                    data-test-id="header-profile-nav"
                    className="nav-header__inner profile-nav"
                    tabIndex={0}
                  >
                    <span className="visually-hidden">Profile</span>
                    <img src={`${BASE_URL}assets/images/user.svg`} alt="profile" />
                    <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
                      <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                        {user.fullName}
                      </li>
                      <li className="profile-nav__item">
                        <button
                          onClick={onSignOut}
                          data-test-id="header-profile-nav-sign-out"
                          className="profile-nav__sign-out button"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-header__item">
                  <Link to="/sign-in" data-test-id="header-sign-in-link" className="button">
                    Sign In
                  </Link>
                </li>
                <li className="nav-header__item">
                  <Link to="/sign-up" data-test-id="header-sign-up-link" className="button">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
