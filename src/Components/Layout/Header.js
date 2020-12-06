import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { UserContext } from '../../App';
import { checkSignedIn, initializeFirebaseLogin } from '../Login/GoogleLogin';



const Header = () => {
  initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user


    useEffect(() => {
      const check = JSON.parse(localStorage.getItem('user'));
      // console.log(check)
      if (check === null) {
          localStorage.setItem('user', JSON.stringify({ email: '', displayName: '' }))
      }
      const nextCheck = JSON.parse(localStorage.getItem('user'));
      if (nextCheck.email !== '') {
          setLoggedInUser(nextCheck);
      }
  }, [])
    return (
      <div>
      <nav className="mb-1 navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
          <Link className="navbar-brand" to="/"> <img src={logo} alt="" height="60" /> </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link text-dark" to="/">
                          <b>Home</b>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-dark" to="/">
                          <b>Donation</b>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-dark" to="/">
                          <b>Events</b>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-dark" to="/">
                          <b>Blog</b>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-dark" to={loggedInUser.email ? "/" : "/login"}>
                          <b className="px-4 py-2 rounded text-white bg-primary">Register</b>
                      </Link>
                  </li>
                  {
                      loggedInUser.displayName
                          ?
                          <>
                              <li className="nav-item">
                                  <Link className="nav-link text-dark" to="/profile">
                                      <b>{loggedInUser.displayName}</b>
                                  </Link>
                              </li>

                              <li className="nav-item">
                                  <Link className="nav-link text-dark" to="/logout">
                                      <b>Logout</b>
                                  </Link>
                              </li>
                          </>
                          :
                          <li className="nav-item">
                              <Link className="nav-link text-dark" to="/admin">
                                  <b className="px-4 py-2 rounded text-white bg-dark">Admin</b>
                              </Link>
                          </li>
                  }


              </ul>
          </div>
      </nav>
  </div>
    );
};

export default Header;