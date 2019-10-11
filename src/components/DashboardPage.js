import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';


const DashboardPage = () => (
    <div>
        <Header />
        <p className="dashboard__text">Create New Song</p>
        <button className="dashboard__button"> 
            <NavLink to="/create" className="dashboard__button__item">
                Click here!
            </NavLink>
        </button>
    </div>
);

export default DashboardPage;