import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function CurrrentUser(){
    const navigate = useNavigate();
    let [user,setUser] = useState({});
    useEffect(()=>{
    axios.get("http://localhost:3001/user/currentUser",{withCredentials: true}).then((res)=>{
            if(res.data.name==="JsonWebTokenError"){
                window.alert("forbidden");
                navigate("/login");
            }else{
                setUser(res.data)
            }
        })
    },[])
    console.log(user);
    return (
        <div>
            <h1>
            {user.username}
            </h1>
        </div>
    )
}