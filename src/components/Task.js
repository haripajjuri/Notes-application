import { useParams } from "react-router-dom"
import axios from "axios";
import {useState,useEffect } from "react"
import { useNavigate} from "react-router-dom";
import img from '../left-arrow-in-circular-button-black-symbol.png'

export default function Task(){
    const {id} = useParams(); 
    const navigate = useNavigate();
    let [task,setTask]= useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/task/getTask/${id}`,{withCredentials: true}).then(res=>{
            if(res.data.name==="JsonWebTokenError"){
                window.alert("forbidden");
                navigate("/login");
            }
            setTask(res.data);
        })
    },[]);
    
    const deleteTask=async(e)=>{
        if(window.confirm("are you sure want to delete the task")){
            await axios.delete(`http://localhost:3001/task/deleteTask/${id}`,{withCredentials:true}).then(res=>{
                if(res.data.name==="JsonWebTokenError"){
                    window.alert("forbidden");
                    navigate("/login");
                }

            if(res.data.msg==="deleted"){
                navigate("/tasks")
            }else{
                alert("unable to delete task");
            }
        })
        }
    }
    const updateTask = ()=>{

        navigate(`/updateTask/${id}`);
    }

    const allTasks=()=>{
        navigate('/tasks');
    }
    return(
        <div className="taskpage">
            <div className="back">  
                <img src={img} title="go back" onClick={allTasks}/>
            </div>
            <div className="TaskContent">
                <div className="content">
                    <h2>{task.title}</h2><br />
                    <h4>{task.desc}</h4><br />
                </div>
                <div className="buttons">
                    
                    <button onClick={updateTask} type="update" id="btn">update</button>
                    <button onClick={deleteTask} type="delete" id="btn">delete</button>
                </div>
            </div>
        </div>
    )
}