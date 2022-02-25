import React, { useState } from "react";
import { memberCalc } from "../api";
import Layout from "../containers/Layout";
export default function Calc(){
const [inputs,setInputs]=useState({})
const {num1,opcode,num2}=inputs;
const [result,setResult]=useState('')

const handleChange =(e)=>{
    e.preventDefault()
    const {value,name}=e.target;
    setInputs({
        ...inputs,[name]:value})
    }

const handleClick=(e)=>{
    e.preventDefault()
    alert('>> '+JSON.stringify({num1,opcode,num2}))
    memberCalc({num1,opcode,num2})
    .then(res=>{
        alert(`발생: ${res.data}`)
        setResult(res.data)}).catch(err=>console.log(`에러발생: ${err}`))
    }
    return (<Layout><form><h1>계산기 폼</h1>
<div>
<label><b>num1</b></label>
<input type="text" onChange = {handleChange} name="num1"/><br />

<label><b>opcode</b></label>
<select name="opcode" onChange={handleChange}>
<option value="" >기본값</option>
    <option value="+" >+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
</select>

<br/><label><b>num2</b></label>
<input type="text" onChange = {handleChange} name="num2"/><br />
<button onClick={handleClick}>Calc 전송</button>
</div>
</form>
<div>계산결과:{result}</div>
</Layout>)
}
