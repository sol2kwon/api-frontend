import React, { useState } from 'react' 
import Layout from '../containers/Layout';
import axios from 'axios';
export default function Bmi(){
    
    const [inputs, setInputs] = useState({})
     const {username,weight,height} = inputs; // Objext Destructuring

    const handleChange =(e)=>{
        e.preventDefault()
        const {value,name} = e.target;
        setInputs({
            ...inputs,[name]:value})
        }

    const handleClick =(e)=>{
        e.preventDefault()
        const bmiRequest = {username, weight, height}
        alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        /*alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)
            axios.get(`http://localhost:8080/member/bmi/김길동/180.5/80.5`)
            .then((res)=>{
              alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })*/
            
        }
  
    return (<Layout>
        <form><h1>Bmi폼</h1>
    
    
    <div>
    <label><b>Username</b></label>
    <input type="text"  onChange ={handleChange} name="username"/><br />

    <label htmlFor=""><b>height</b></label>
    <input type= "text" onChange ={handleChange} name="height"/><br/>

    <label htmlFor=""><b>weight</b></label>
    <input type= "text"  onChange ={handleChange} name="weight"/><br />
    <button onClick={handleClick}>BMI 체크</button>
    </div>
    </form>
   
    </Layout>)
    }