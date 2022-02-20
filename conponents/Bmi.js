import React, { useState } from "react";
import Layout from "../container/Layout";
export default function Bmi(){
    const[ki,setKi] = useState(0);
    const[mom,setMom] = useState(0);
    const[na,setNa] = useState("");
    const[result,setResult]=useState(0);
    const execute =()=>{
        let na = document.getElementById('na').value
        console.log('이름 :'+ na)
        let mom= document.getElementById('mom').value
        console.log('몸무게 :'+ mom)
        let ki= document.getElementById('ki').value
        console.log('키 :'+ ki)
        setKi(ki)
        setMom(mom)
        setNa(na)

    setResult(String(na)+","+Number(ki)+","+Number(mom)) 
    console.log('결과:'+result)
    }
    return <Layout><h1>BMI.</h1>
<form action="">
<label><b>이름</b></label>
<input id="na"type=""/><br />
<label><b>키</b></label>
<input id="ki" type=""/>
<label><b>  몸무게</b></label>
<input id="mom" type=""/>
<button onClick={()=>{execute()}}>결과 보기</button>
</form>
<div>결과: {result}</div>
</Layout>
}