import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const { displayName,  email } = loggedInUser;
    const [item, setItem] = useState({})
    const [userEvent, setUserEvent] = useState({})

    const history = useHistory();
    const { id } = useParams();
console.log(item);

    useEffect(() => {
        fetch(`https://salty-plateau-30858.herokuapp.com/search/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                const newEventObject = {
                    name: displayName,
                    email: email,
                    eventTitle: data.title,
                    eventDate: data.date,
                    eventId: id,
                    
                }
                setUserEvent(newEventObject);
            })
    }, [])


    const handleOnChange = (e) => {
        const newEvent = { ...userEvent }
        if (e.target.name === 'name') {
            newEvent.name = e.target.value
        } else if (e.target.name === 'email') {
            newEvent.email = e.target.value
        } else if (e.target.name === 'title') {
            newEvent.eventTitle = e.target.value
        } else if (e.target.name === 'date') {
            newEvent.eventDate = e.target.value
        }
        setUserEvent(newEvent)
        e.preventDefault()
    }

    const handleFormSubmit = (e) => {
        fetch(`https://salty-plateau-30858.herokuapp.com/saveEvent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...userEvent, image:item.image})
            // got stuck here and also solve problem  
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Congratulations!! You event is successfully added.")
                } else {
                    window.alert("This event is already added.")
                }
                history.replace('/profile')
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="login d-flex justify-content-center">
                <div className="row">
                    <div className="my-2">
                        <Link to="/"><img src={logo} height="70" alt="" /></Link>
                    </div>
                </div>
            </div>

            <br />
            <div className="row d-flex justify-content-center">
                <div className="card w-50 mt-5">
                    
                    <div className="card-body px-lg-5">
                        <h4 className="mb-2">Register as a Volunteer</h4>
                        <form onSubmit={handleFormSubmit} className="text-center" style={{ color: "#757575" }} action="#!">

                            <div className="md-form mt-3">
                                <input name="name" type="text" onBlur={handleOnChange} placeholder="Full Name" defaultValue={displayName} className="form-control" />
                            </div>


                            <div className="md-form">
                                <input name="email" type="email" onBlur={handleOnChange} placeholder="Email" defaultValue={email} className="form-control" />
                            </div>

                            <div className="md-form mt-3">
                                <input name="date" type="text" onBlur={handleOnChange} placeholder="mm-dd-yyy" defaultValue={item.date} className="form-control"  />
                            </div>

                            <div className="md-form mt-3">
                                <input name="title" type="text" onBlur={handleOnChange} placeholder="title" defaultValue={item.title} className="form-control"  />
                            </div>
                            <div className="md-form mt-3">
                                <input name="title" type="text" onBlur={handleOnChange} 
                                
                                placeholder="Title" defaultValue= {item.title}className="form-control"  />
                            </div>

                            <button className="btn btn-primary" type="submit">Registration</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;