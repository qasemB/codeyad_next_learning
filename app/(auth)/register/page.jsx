import React from 'react';

const register = () => {
    return (
        <div className="container" style={{
            height: " 80vh",
            display: " flex",
            justifyContent: " center",
            alignItems: " center",
            flexDirection:"column"
        }}>
            <h1 style={{marginBottom:"20px"}}>
                Register form
            </h1>
            <form>
                <div class="input-group" style={{marginBottom:"20px"}}>
                    <span class="input-group-addon" id="sizing-addon2">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
                </div>
                <div class="input-group" style={{marginBottom:"20px"}}>
                    <span class="input-group-addon" id="sizing-addon2">@</span>
                    <input type="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon2" />
                </div>
                <div class="input-group" style={{marginBottom:"20px"}}>
                    <span class="input-group-addon" id="sizing-addon2">@</span>
                    <input type="password" class="form-control" placeholder="Confirm Password" aria-describedby="sizing-addon2" />
                </div>

                <div style={{textAlign:"center"}}>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default register;
