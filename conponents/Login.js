import React, { useState } from "react";
import { memberLogin } from "../api";
import Layout from "../containers/Layout";
export default function Login(){
   const [inputs,setInputs]=useState({})
   const[result,setResult]=useState('')
   const {name,id,pw}=inputs;

   const handleChange=(e)=>{
       e.preventDefault()
       const {value,name}=e.target;
       setInputs({
           ...inputs,[name]:value})
   }
   const handleClick=(e)=>{
       e.preventDefault()
       memberLogin({name, id ,pw}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
   }
    return <Layout><h1>로그인 폼</h1>
        <form>
<label><b>name</b></label>
<input type= "text" onChange={handleChange} name="name"/><br/>
   
<label><b>ID</b></label>
<input type= "text" onChange={handleChange} name="id"/><br/>

<label><b>pw</b></label>
<input type= "text" onChange={handleChange} name="pw"/><br/>
<button onClick={handleClick}>Login 전송</button><br/>
    </form>
    <div>Login 결과:{result}</div>
    </Layout>
}