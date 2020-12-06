import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';

const ProfileHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const { displayName, photo, email } = loggedInUser;
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
                            <Link className="nav-link text-dark" to="#">
                                <b>Donation</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="#">
                                <b>Events</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="#">
                                <b>Blog</b>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="#">
                                <b>{displayName}</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/logout">
                                <b>Logout</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {photo && <img src={photo} height="30" style={{ borderRadius: '50%' }} alt="" />}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
    
};

export default ProfileHeader;