import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import app from"./Firebase";
import { getAuth,sendPasswordResetEmail } from "firebase/auth";
function ForgotPassword()
{
    const nav = useNavigate();
    const[un,setUn] = useState("");

    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username !== null)
            nav("/home");
    },[]);

    const rUserName = useRef();

    const[username,setUserName] = useState("");
    const[msg,setMsg] = useState("");

    const hUserName = (event) =>{setUserName(event.target.value);}

    const save = (event) =>{
        event.preventDefault();

        if(username ==="")
        {
            alert("please enter usernme");
            setMsg("");
            rUserName.current.focus();
            return;
        }
        const auth = getAuth();
        sendPasswordResetEmail(auth,username)
        .then(res=>{
            nav("/");
        })
        .catch(err=>{
            setMsg("issue " + err);
        });
        
    }
    return(
        <>
        <center>
            <NavBar/>
            <h1>ForgotPassword Page</h1>
            <form onSubmit={save}>
                <input type="email" placeholder="enter reg emailID" ref={rUserName} onChange={hUserName} value={username}/>
                <br/><br/>
                <h3>CHECK YOUR EMAIL</h3>
                <br/><br/>
                <input type="submit" value="ForgotPassword"/>
            </form>
            <h2>{msg}</h2>
        </center>
        </>
    );
}
export default ForgotPassword;