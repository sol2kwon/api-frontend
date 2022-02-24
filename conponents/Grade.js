import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade(){
  const [inputs,setInputs]=useState({})
  const {name,kor,eng,math}=inputs;

  const handleChange=(e)=>{
      e.preventDefault()
      const {value,name}=e.target;
    setInputs({
        ...inputs,[name]:value})
    }
  const handleClick=(e)=>{
      e.preventDefault()
      const gradeRequest = {name,kor,eng,math}
      alert(`학생 성적표: ${JSON.stringify(gradeRequest)}`)
  }
  return (<Layout>
    <form>
    <h1>Grade폼</h1>
<div>
<label><b>name</b></label>
<input type= "text" onChange={handleChange} name="name"/><br />

<label htmlFor=""><b>kor </b></label>
<input type= "text" onChange={handleChange} name="kor"/><br />

<label htmlFor=""><b>eng </b></label>
<input type= "text" onChange={handleChange} name="eng"/><br />

<label htmlFor=""><b>math </b></label>
<input type= "text" onChange={handleChange} name="math"/><br />
<button onClick={handleClick}>Grade 체크</button><br/>
</div>
</form>
</Layout>)
}
    