import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
function About()
{
    const nav = useNavigate();
    const[un,setUn] = useState("");

    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username !== null)
            setUn(un);
        else
        {
            nav("/");
        }
    },[]);
    return(
        <>
        <center>
            <NavBar/>
            <h1>About Page</h1>
            <p>1.This is a React.js authentication system.</p>

            <p>2.It includes Login, SignUp, ForgotPassword, Home, 
               About, and ChangePassword pages.</p> 

            <p>3.It supports user registration, login, password 
               reset,and updates with a simple UI and navigation bar.</p>
             
        </center>
        </>
    );
}
export default About;