import React from "react";
import { useNavigate } from "react-router-dom";

function Login1() {
    const navigate = useNavigate();

    return(
        <div>
            <input type="text" placeholder="username"/>
            <button>Login</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default Login1;