import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Ops this page does not exists</h1>
            <Link to={'/'} className="nav-link"> Back Home </Link>
        </div>
    );
}

export default NotFound;