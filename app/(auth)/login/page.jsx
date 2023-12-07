import React from 'react';

const Login = () => {
    return (
        <div className="container" style={{
            height: " 80vh",
            display: " flex",
            justifyContent: " center",
            alignItems: " center",
            flexDirection:"column"
        }}>
            <h1 style={{marginBottom:"20px"}}>
                Login form
            </h1>
            <form>
                <div className="input-group" style={{marginBottom:"20px"}}>
                    <span className="input-group-addon" id="sizing-addon2">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
                </div>
                <div className="input-group" style={{marginBottom:"20px"}}>
                    <span className="input-group-addon" id="sizing-addon2">@</span>
                    <input type="password" className="form-control" placeholder="Password" aria-describedby="sizing-addon2" />
                </div>

                <div style={{textAlign:"center"}}>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
