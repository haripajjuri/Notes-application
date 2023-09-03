import { useParams,useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios";
import Task from "./Task";

export default function UpdateTask(){
    const navigate = useNavigate();
    const {id} = useParams();

    const [data,setData] = useState({
        title:'',
        desc:''
    })
   useEffect(()=>{
    axios.get(`http://127.0.0.1:3001/task/getTask/${id}`,{withCredentials:true}).then((res)=>{
        if(res.data.name==="JsonWebTokenError"){
            window.alert("forbidden");
            navigate("/login");
        }
        if(res.status===200){
            setData(res.data);
        }
    })
   },[])


    const submit = (e)=>{
        e.preventDefault();
        let {title,desc}=data;
        if(!title || !desc){
            window.alert("enter all fields");
        }
        else{
            axios.put(`http://127.0.0.1:3001/task/updateTask/${id}`,{data}).then((res)=>{
                if(res.status===200){
                    window.alert("task updated");
                    navigate(`/tasks/${id}`)
                }
            })
        }
        
    }
    const handleChange = (e)=>{
    setData((PrevState)=>({
        ...PrevState,
        [e.target.name]:e.target.value
    }));
    }

    return(
        <div>
        <div className="pageHeading"><h2>update this task</h2></div>
        <form method="POST" onSubmit={submit} className="form">
                    <input type="text" placeholder="title" name="title" value={data.title} onChange={handleChange} />
                    <input type="text" placeholder="description" value={data.desc} onChange={handleChange} name="desc"/>
                    <button type="submit" className="login-button" onSubmit={submit} id="btn">update</button>
        </form>
        </div>
    )
}