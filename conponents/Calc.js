import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Calc(){
const [inputs,setInputs]=useState({})
const {num1,opcode,num2}=inputs;

const handleChange =(e)=>{
    e.preventDefault()
    const {value,name}=e.target;
    setInputs({
        ...inputs,[name]:value})
    }

const handleClick=(e)=>{
    e.preventDefault()
    const calcRequest = {num1,opcode,num2}
    alert(`사용자이름: ${JSON.stringify(calcRequest)}`)
    }
    return (<Layout><form><h1>계산기 폼</h1>
<div>
<label><b>num1</b></label>
<input type="text" onChange = {handleChange} name="num1"/><br />

<label><b>opcode</b></label>
<input type="text" onChange = {handleChange} name="opcode"/><br />

<label><b>num2</b></label>
<input type="text" onChange = {handleChange} name="num2"/><br />
<button onClick={handleClick}>Calc 체크</button>
</div>
</form>
</Layout>)
}
