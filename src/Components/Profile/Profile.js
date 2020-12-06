import React, { useEffect, useState, useContext  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import ProfileHeader from './ProfileHeader';
import ShowEvent from './ShowEvent';




const Profile = () => {

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const { displayName, photo, email } = loggedInUser;

    const [myEvents, setMyEvents] = useState([]);
    const [state, setState] = useState(true)

    
   




    useEffect(() => {
        fetch(`https://salty-plateau-30858.herokuapp.com/userEventList/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyEvents(data);
            })
    }, [state])

    const handleDelete =(props)=>{
        // console.log(props)
        setState(!state)
    }
    
    


    return (
        <div>
            <ProfileHeader />
            <div className="container">
            <div className="d-flex mt-4">
                <h4>You have total {myEvents.length} events </h4>
                <Link to='/' className ="ml-auto mt-1">
                    <p>Click here to register for new event.</p>
                </Link>
            </div>
            <div className="d-flex flex-wrap m-4 p-4">
                {
             myEvents.map(each => <ShowEvent handleDelete = {handleDelete} eventData = {each}></ShowEvent>)
                }
                </div>
            </div>

        </div>
    );
};

export default Profile;