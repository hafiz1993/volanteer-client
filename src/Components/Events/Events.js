import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShowItem from './ShowItem';


const Events = () => {
    const [allEvent, setAllEvent] = useState ([])
    useEffect(() =>{
        fetch(`https://salty-plateau-30858.herokuapp.com/allEvents`)
        .then(res => res.json())
        .then(data =>{
            setAllEvent(data)
        })
    }, [])
    
   
  
    return (
        <Container>
              <div className="d-flex flex-wrap m-4 ">
              {
                allEvent.length > 0
                ?
                allEvent.map((each, index) => <Link  style={{textDecoration:'none', color: 'inherit'}} to={`/register/${each._id}`}><ShowItem key={index} eventData={each}/></Link> )
                :
                <h2>Loading data...</h2>
            }
               
           
        </div>
        </Container>
    );
};

export default Events;

// {
//     allEvent.map(i => <ShowItem item={i} >{}</ShowItem >)
// }