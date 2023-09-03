import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate();
    const postSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/user/login',{send},{withCredentials:true}).then(
            (res)=>{
                if(res.data.msg==="login accepted"){
                    alert("login accepted");
                    navigate("/tasks")
                }
                else if(res.data.msg==="password didnt match"){
                    alert(res.data.msg)
                }
                else{
                    alert(res.data.msg)
                }
            }
            )

    }

    const [send,setData] = useState({
        username:'',
        password:''
    })

    const handleChange = (e)=>{
        setData((PrevState)=>({
            ...PrevState,
            [e.target.name]:e.target.value
        })
        )
    }
    return(
        <div>
            <form method="POST" onSubmit={postSubmit}>
                        <input type="text" placeholder="username" onChange={handleChange} name="username" />
                        <input type="text" placeholder="password" onChange={handleChange} name="password" />
                        <input type="submit" className="login-button" value={'login'} onSubmit={postSubmit}/>
            </form>
        </div>
    )
}