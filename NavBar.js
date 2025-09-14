import { Link } from "react-router-dom";
import { useState,useEffect, use } from "react";
function NavBar()
{
    const [un,setUn] = useState("");
    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username === null)
            setUn(null);
        else
            setUn(username);
    },[]);
    return(
        <>
        <center>
            <div className="nav">
                {(un === null) && (<Link to="/">Login</Link>)}
                {(un === null) && ( <Link to="/signup">SignUp</Link>)}
                {(un === null) && (<Link to="/fp">ForgotPassword</Link>)}

                {(un !== null) && ( <Link to="/home">Home</Link>)}
                {(un !== null) && (<Link to="/about">About</Link>)}
                {(un !== null) && (<Link to="/cp">ChangePassword</Link>)}
                {(un !== null) && (<Link to="/doubt">Doubt</Link>)}
            </div>

        </center>
        </>
    );
}
export default NavBar;