const { default: Link } = require("next/link")

import React from 'react';

const NotFound = () => {
    return (
        <div
            className='container'
            style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        >
            <h2>Page not found!</h2>
            <h2>There is an Error</h2>
            <Link href={"/"}>Home</Link>
        </div>
    )
}

export default NotFound;
