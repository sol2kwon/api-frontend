import React, { useState } from "react";
import Layout from "../container/Layout";
export default function Login(){
    const[na,setNa]=useState("");
    const[id,setId]=useState("");
    const[pw,setPw]=useState(0);

    return <Layout><h1>로그인 폼</h1>
    
   <form>
    <div>
    <img src="" alt="" />
    </div>
    
    <div>
    <label htmlFor=""> <b>Username</b></label>
    <input/><br />

    <label htmlFor=""><b>  Password</b>  </label>
    <input type="" /><br />

    <button>Login</button><br />
    <label > <input type="checkbox"/> Remember me</label>
   
    </div>

    <div>
    <button>Cancel</button>
    <span> Forgot<a> password?</a>
    </span>
    </div>
    </form>
    
    </Layout>
    
}
    
