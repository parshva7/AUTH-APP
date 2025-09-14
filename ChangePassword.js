import NavBar from "./NavBar";
import { useRef,useState,useEffect } from "react";
import app from "./Firebase";
import { getAuth,updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function ChangePassword()
{
    const nav = useNavigate();
    const[un,setUn] = useState("");

    useEffect(()=>{
        const username = localStorage.getItem("un");
        if(username !== null)
            setUn(un);
        else
            nav("/");
    },[]);

    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const[password1,setPassowrd1] = useState("");
    const[password2,setPassowrd2] = useState("");
    const[msg,setMsg] = useState("");

    const hPassword1 = (event) =>{setPassowrd1(event.target.value);}
    const hPassword2 = (event) =>{setPassowrd2(event.target.value);}

    const save =(event)=>{
        event.preventDefault();

        if(password1 ==="")
        {
            alert("please enter password");
            setMsg("");
            rPassword1.current.focus();
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
            const username = auth.currentUser;
            updatePassword(username,password1)
            .then(res=>{
                alert("password updated");
                localStorage.removeItem("un");
                nav("/");
            })
            .catch(err=>{
                setMsg("issue " + err);
            });
        }
        else
        {
            setMsg("password did not match");
            setPassowrd1("");
            setPassowrd2("");
            rPassword1.current.focus();
        }
    }
     return(
        <>
        <center>
            <NavBar/>
            <h1>ChangePassword Page</h1>
            <form onSubmit={save}>
                <input type="password" placeholder="enter password" ref={rPassword1} onChange={hPassword1} value={password1}/>
                <br/><br/>
                <input type="password" placeholder="confirm passowrd" ref={rPassword2} onChange={hPassword2} value={password2}/>
                <br/><br/>
                <input type="submit" value="Change Password"/>
            </form>
            <h2>{msg}</h2>
        </center>
        </>
    );
}
export default ChangePassword;