import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const ShowEvent = (props) => {
    const item = props.eventData;
    const [eventInfo, setEventInfo] = useState({})
   

    

const history = useHistory();
const handleCancel = (id) => {

    if (window.confirm('Do you want to remove this item?')) {
        fetch(`https://salty-plateau-30858.herokuapp.com/deleteMyEvent/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                // props.handleDelete(true)
                window.location.reload();
                history.replace('/profile')
            }
        }, [])
    }
}
   
console.log(eventInfo.image)
    
    return (
        <div>
            <div className="card m-3 event-card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="view overlay py-2">
                            <img  className="card-img-top"src={item.image}  alt="Card cap" />
                            

                               
                            </div>
                             
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h6 className="card-title">{item.eventTitle}</h6>
                                <span className="card-date">{item.eventDate}</span> <hr />

                                <Link onClick={() => handleCancel (item._id)}  className="btn btn-primary" >Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ShowEvent;