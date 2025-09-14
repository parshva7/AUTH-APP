import NavBar from "./NavBar";
import { useRef,useState,useEffect } from "react";
import app from "./Firebase";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignUp()
{
    const nav = useNavigate();
    const[un,setUn] = useState("");

    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username !== null)
            nav("/home");
    },[]);

    const rUserName = useRef("");
    const rPassword1 = useRef("");
    const rPassword2 = useRef("");

    const[username,setUserName] = useState("");
    const[password1,setPassowrd1] = useState("");
    const[password2,setPassowrd2] = useState("");
    const[msg,setMsg] = useState("");

    const hUserName = (event) =>{setUserName(event.target.value);}
    const hPassword1 = (event) =>{setPassowrd1(event.target.value);}
    const hPassword2 = (event) =>{setPassowrd2(event.target.value);}

    const save =(event) =>{
        event.preventDefault();

        if(username ==="")
        {
            alert("please enter username");
            setMsg("");
            rUserName.current.focus();
            return;
        }
        if(password1 ==="")
        {
            alert("please enter password");
            setMsg("");
            rPassword1.current.foucs();
            return;
        }
        if(password2 ==="")
        {
            alert("please confirm password");
            setMsg("");
            rPassword2.current.focus();
            return;
        }
        if(password1 === password2)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,username,password1)
            .then(res=>{
                alert("Account Created");
                nav("/");
            })
            .catch(err=>{
                setMsg("issue " + err);
            });
        }
        else
        {
            setMsg("password did no match");
            setPassowrd1("");
            setPassowrd2("");
            rPassword1.current.focus();
        }
    }
    return(
        <>
        <center>
            <NavBar/>
            <h1>SignUp Page</h1>
            <form onSubmit={save}>
                <input type="email" placeholder="enter emailID" ref={rUserName} onChange={hUserName} value={username}/>
                <br/><br/>
                <input type="password" placeholder="enter password" ref={rPassword1} onChange={hPassword1} value={password1}/>
                <br/><br/>
                <input type="password" placeholder="confirm password" ref={rPassword2} onChange={hPassword2} value={password2}/>
                <br/><br/>
                <input type="submit" value="Register"/>
            </form>
                <h2>{msg}</h2>
         </center>
        </>
    );
}
export default SignUp;