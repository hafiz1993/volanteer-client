import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const LogOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory()
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify({
            email:'',
            displayName:''
        }))
        setLoggedInUser({
            email:'',
            displayName:''
        })
        history.push('/')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default LogOut;