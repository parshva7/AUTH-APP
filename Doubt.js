import NavBar from "./NavBar";
import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
function Doubt()
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

    const rName = useRef();
    const rDoubt = useRef();

    const[name,setName] = useState("");
    const[doubt,setDoubt] = useState("");
    const[msg,setMsg] = useState("");

    const hName = (event) =>{setName(event.target.value);}
    const hDoubt = (event) =>{setDoubt(event.target.value);}

    const sm = (event) =>{
        event.preventDefault();

        if(name ==="")
        {
            alert("please enter name");
            setMsg("");
            rName.current.focus();
            return;
        }
        if(doubt ==="")
        {
            alert("please enter doubt");
            setMsg("");
            rDoubt.current.focus();
            return;
        }
        let data = {name,doubt};
        emailjs.send("service_123456","template_123456",data,"HeCOTrQ1dC3CNM-Yi")
        .then(res=>{
            setMsg("We will get back to u");
            setName("");
            setDoubt("");
            rName.current.focus();
        })
        .catch(err=>{
            setMsg("issue " + err);
        });
    }
    return(
        <>
        <center>
            <NavBar/>
            <h1>Doubt Page</h1>
            <form onSubmit={sm}>
                <input type="text" placeholder="enter your name" ref={rName} onChange={hName} value={name}/>
                <br/><br/>
                <textarea placeholder="enter your doubt" rows={5} cols={40} ref={rDoubt} onChange={hDoubt} value={doubt}></textarea>
                <br/><br/>
                <input type="submit"/>
            </form>
                <h2>{msg}</h2>

        </center>
        </>
    );
}
export default Doubt;