import { useState,useEffect } from "react"
import axios from "axios";

import { useNavigate,generatePath} from "react-router-dom";

export default function Tasks(){
    const navigate = useNavigate();
    let [tasks,setTasks] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/task/getAllTasks/",{withCredentials: true}).then((res)=>{
            if(res.data.name==="JsonWebTokenError"){
                window.alert("forbidden");
                navigate("/login");
            }
            setTasks(res.data);
        })
    },[]);
    const [id,setId] = useState();

    const handleProceed = (e) => {
        id && navigate(generatePath("/tasks/:id", { id }));
    };
    const handleClick=(e)=>{
        navigate("/createTask")
    }
    return(
        <div className="allTasksPage">
        <div className="pageHeading">
            <h2>YOUR TASKS</h2>
        </div>
        <div className="tasksContainer">
            {tasks.map((task,i)=>(
                <div onMouseOver={(e)=>{ setId(task._id) }}
                key={i}
                onClick={handleProceed}
                className="taskCard"
                >
            <div className="texts">
            <h4>{task.title}</h4>
            <h5>{task.desc}</h5>    
            </div>
            </div>
            ))}
        </div>
        <div className="createNewTask">
            <button onClick={handleClick} >create new task</button>
        </div>
        
        </div>
    )
}