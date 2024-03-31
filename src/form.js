import axios from 'axios';
import { useState } from 'react';

export default function Forms()
{
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
const handleForm=async()=>{
    const res= await axios.post("http://localhost:8089/form",{username, email, password})
    console.log(res)
}
    return(
        <>
        <form onSubmit={handleForm}>
            <lable>Enter User Name:</lable>
            <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>

            <br/><br/>

            <label>Enter Email Id:</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <br/><br/>

            <lable>Enter Password:</lable>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
            <br/><br/>

            <input type="submit" value="Submit Value"/>

        </form>
        </>
    );
}