import { useState } from "react"
import { useNavigate} from "react-router-dom";
import axios from "axios";
export default function CreateTask(){
    const navigate = useNavigate();
    const postSubmit=(e)=>{
        e.preventDefault();
        let {title,desc}=data;
            if(!title || !desc){
                window.alert("enter all the fields");
        }else{
            axios.post('http://localhost:3001/task/createTask',{data}).then((res)=>{
            window.alert("task created")
            navigate('/tasks')}).catch((err)=>{
                window.alert("error creating task");
            })
        }       
    }
    const [data,setData] = useState({
        title:'',
        desc:''
    })

    const handleChange = (e)=>{
        setData((PrevState)=>({
            ...PrevState,
            [e.target.name]:e.target.value
        }))
    }
    return(
        <div>
            <div className="pageHeading"><h2>create a new task</h2></div>
        <form method="POST" onSubmit={postSubmit} className="form">
                    <input type="text" placeholder="title" onChange={handleChange} name="title"/>
                    <input type="text" placeholder="description" onChange={handleChange} name="desc" />
                    <button type="submit" className="login-button" value={'submit'} onSubmit={postSubmit} id="btn">submit</button>
        </form>
        </div>
    )
}