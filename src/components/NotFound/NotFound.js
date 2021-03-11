import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
         
            <div className="container">
                <h1 className="display-6 align-items-center">404! Page Not Found.</h1>
                
                <Link className="btn btn-danger btn-rounded" to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;