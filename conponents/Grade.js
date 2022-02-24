import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const[count,setCount]=useState(0)
    return <Layout><h1>성적표</h1>
    
    <form>
   
    
    <div>
    <label htmlFor=""> <b>이름</b></label><input/>

    <label htmlFor=""><b>  비밀번호</b>  </label>
    <input type="" />

    <button>조회</button>
    <label > <input type="checkbox"/> 개인정보 수집 동의</label>
   
    </div>

    <div>
    <button>Cancel</button>
    <span> Forgot<a> password?</a>
    </span>
    </div>
    </form>
    
    </Layout>

}
