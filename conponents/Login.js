import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login(){
   const [inputs,setInputs]=useState({})
   const {name,id,pw}=inputs;

   const handleChange=(e)=>{
       e.preventDefault()
       const {value,name}=e.target;
       setInputs({
           ...inputs,[name]:value})
   }
   const handleClick=(e)=>{
       e.preventDefault()
       const loginRequest = {name,id,pw}
       alert(`로그인 : ${JSON.stringify(loginRequest)}`)
   }
    return(<Layout><form><h1>로그인 폼</h1>
    
    <div>
<label><b>name</b></label>
<input type= "text" onChange={handleChange} name="name"/><br/>
   
<label><b>ID</b></label>
<input type= "text" onChange={handleChange} name="id"/><br/>

<label><b>pw</b></label>
<input type= "text" onChange={handleChange} name="pw"/><br/>
<button onClick={handleClick}>Login 체크</button><br/>
    </div>
    </form>
    </Layout>)
}