import NavBar from "./NavBar";
import { useRef,useState,useEffect } from "react";
import app from "./Firebase"
import{getAuth,signInWithEmailAndPassword}from"firebase/auth";
import { useActionData, useNavigate } from "react-router-dom";
function Login()
{
    const nav = useNavigate();
    const[un,setUn] = useState("");

    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username !== null)
                nav("/home");
    },[]);

    const rUserName = useRef();
    const rPassword = useRef();

    const[username,setUserName] = useState("");
    const[password,setPassowrd] = useState("");
    const[msg,setMsg] = useState("");

    const hUserName =(event) =>{setUserName(event.target.value);}
    const hPassword =(event) =>{setPassowrd(event.target.value);}
    const save =(event) =>{
        event.preventDefault();

        if(username ==="")
        {
            alert("please enter username");
            setMsg("");
            rUserName.current.focus();
            return;
        }
        if(password ==="")
        {
            alert("please enter password");
            setMsg("");
            rPassword.current.focus();
            return;
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth,username,password)
        .then(res=>{
            localStorage.setItem("un",username);
            nav("/home");
        })
        .catch(err=>{
            setMsg("issue " + err);
        });
    }
    return(
        <>
        <center>
            <NavBar/>
            <h1>Login Page</h1>
            <form onSubmit={save}>
                <input type="email" placeholder="enter reg emailID" ref={rUserName} onChange={hUserName} value={username}/>
                <br/><br/>
                <input type="password" placeholder="enter password" ref={rPassword} onChange={hPassword} value={password}/>
                <br/><br/>
                <input type="submit" value="Login"/>
            </form>
                <h2>{msg}</h2>
        </center>
        </>
    );
}
export default Login;