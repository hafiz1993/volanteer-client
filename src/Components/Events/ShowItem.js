import React from 'react';


const ShowItem = (props) => {
const { title, image} = props.eventData;
   
let key = Math.floor(Math.random() * 20);

    let color = '';
    if (key % 4 === 0) {
        color = 'bg-success';
    } else if (key % 4 === 1) {
        color = 'bg-danger';
    } else if (key % 4 === 2) {
        color = 'bg-primary';
    } else if (key % 4 === 3) {
        color = 'bg-info';
    }

    return (
        
        <div>
        <div className="card m-4 event-card">
            <img className="card-img-top" src={image} alt="Card img cap" />

            <div className={color}>
                <div className="card-body text-center" >
                    <p className="card-title text-white"><b>{title}</b></p>
                </div>
            </div>

        </div>
    </div>
   
    );
};

export default ShowItem;