import React from 'react';
import Events from '../Events/Events';
import Header from './Header';
import './LandingPage.css';



const LandingPage = () => {
    return (
        <div className="set-background">
          <Header></Header>
            <div >
                <div className="heading h2 mt-4 text-center">
                    I GROW BY HELPING PEOPLE IN NEED
                </div>
                <div className="d-flex justify-content-center align=items-center">
                    <div className="input-group m-2 p-2 w-50">
                        <input className="form-control my-0 py-1" type="text" placeholder="Search...." aria-label="Search" />
                        <div className="input-group-append">
                            <span className=" btn btn-danger text-white" id="basic-text1"> Search </span>
                        </div>
                    </div>
                </div>
                <div >
              <Events></Events>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;