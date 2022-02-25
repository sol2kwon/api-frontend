import React, { useState } from 'react' 
import { memberBmi } from '../api/index';
import Layout from '../containers/Layout';

export default function Bmi(){
    
    const [inputs, setInputs] = useState({})
     const {username,weight,height} = inputs; // Objext Destructuring
     const [result,setResult]=useState('')

    const handleChange =(e)=>{
        e.preventDefault()
        const {value,name} = e.target;
        setInputs({
            ...inputs,[name]:value})
        }

    const handleClick =(e)=>{
        e.preventDefault()
        memberBmi({username, weight, height}).then(res=>setResult(res.data)).catch(err=>console.log(`에러발생 ${err}`))
        }
        
    return <Layout>
        <h1>Bmi폼</h1>
    
        <form>
    <label><b>Username</b></label>
    <input type="text"  onChange ={handleChange} name="username"/><br />

    <label htmlFor=""><b>weight</b></label>
    <input type= "text" onChange ={handleChange} name="height"/><br/>

    <label htmlFor=""><b>height</b></label>
    <input type= "text"  onChange ={handleChange} name="weight"/><br />

    <button onClick={handleClick}>BMI 전송</button>
    
    </form>
    <div>계산결과:{result}</div>
   
    </Layout>
    }