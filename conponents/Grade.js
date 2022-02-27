import React, { useState } from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";
export default function Grade(){
  const [inputs,setInputs]=useState({})
  const[result,setResult]=useState('')
  const {name,kor,eng,math}=inputs;

  const handleChange=(e)=>{
      e.preventDefault()
      const {value,name}=e.target;
    setInputs({
        ...inputs,[name]:value})
    }
  const handleClick=(e)=>{
      e.preventDefault()
      memberGrade({name, kor ,eng,math}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
  }
  return <Layout><h1>Grade폼</h1>
<form action=""> 
<label><b>name</b></label>
<input type= "text" onChange={handleChange} name="name"/><br />

<label htmlFor=""><b>kor </b></label>
<input type= "text" onChange={handleChange} name="kor"/><br />

<label htmlFor=""><b>eng </b></label>
<input type= "text" onChange={handleChange} name="eng"/><br />

<label htmlFor=""><b>math </b></label>
<input type= "text" onChange={handleChange} name="math"/><br />
<button onClick={handleClick}>Grade 체크</button><br/>
</form>
<div>계산결과 : {result}</div>
</Layout>
}