'use client'
import React, { useState } from 'react';

const CarsLayout = ({ children }) => {
    const [input, setInput] = useState("ok")
    return (
        <>
            {children}
            <div
                style={{
                    position: "fixed",
                    width: "90px",
                    height: "90px",
                    background: "purple",
                    zIndex: "1000",
                    top: "100px",
                    left: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    flexDirection: "column",
                    boxShadow: "0 0 5px gray",
                    cursor: "pointer"
                }}>
                <i className='fa fa-shopping-basket'></i>
                {input}
                <input value={input} onChange={e=>setInput(e.target.value)} style={{position:"absolute", top:"80px", left:"0", color:"black"}}/>
            </div>
        </>
    );
}

export default CarsLayout;
