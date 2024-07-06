import { useState } from "react";
import axios from "axios";
function Register()
{
    let [userName,setUserName]= useState('')
    let [email,setEmail]= useState('')
    let [password,setPassword]= useState('')
    let [repassword,setRepassword]= useState('')
    let [status,setStatus]=useState("")
    function handleregister(){
            setStatus({userName, email, password, repassword})
     
    }
    return(
       <div style={{backgroundColor:'blue',
        width:'1488px',
        height:'700px',
        display:'flex',
        flexDirection:'column',border:'solid white 1px',background:"linear-gradient(to bottom,black,grey)"
       }}>
        <div style={{backgroundColor:'wheat',
            width:'700px',
            height:'550px',
            marginLeft:'400px',marginBottom:'50px',
            justifyContent:'center',
          marginTop:'100px',
          borderRadius:'15px',border:'solid black 5px'
        }}>
            <h1 style={{textAlign:'centre',
                marginLeft:'150px'
            }}>Create an Account</h1>
            <div style={{backgroundColor:"wheat",
                marginTop:'10px'
            }}>
            <input type="text" placeholder="USERNAME" onChange={(e)=>setUserName(e.target.value)} 
            style={{borderRadius:'10px',
                width:'400px',
                height:"30px",marginLeft:'160px',
                marginTop:"10px"
            }}></input>
            <input type="password" placeholder="PASSWORD" onChange={(e)=>setPassword(e.target.value)}
            style={{borderRadius:'10px',
                width:'400px',
                height:"30px",marginLeft:'160px',
                marginTop:"10px"
            }}></input>
            <input type="password" placeholder="RE-enter your PASSWORD" onChange={(e)=>setRepassword(e.target.value)}
            style={{borderRadius:'10px',
                width:'400px',
                height:"30px",marginLeft:'160px',
                marginTop:"10px"
            }}></input>
            <input type="email" placeholder="Email-id" onChange={(e)=>setEmail(e.target.value)}
            style={{borderRadius:'10px',
                width:'400px',
                height:"30px",marginLeft:'160px',
                marginTop:"10px"
            }}></input>
            <input type="date" placeholder="DOB" 
            style={{borderRadius:'10px',
                width:'400px',
                height:"30px",marginLeft:'160px',
                marginTop:"10px"
            }}></input></div>
           <button style={{borderRadius:"10px",
            display:'flex',
            justifyContent:"space-between",
            marginLeft:'240px',
           marginTop:'20px',
            width:'200px',
            height:'35px',
           }}onClick={handleregister}>
            <text style={{marginLeft:'60px'
           }}><b>SUBMIT</b></text></button>
           <h2>Already have an account ? <a href="http://localhost:3000/login">Login Here</a> </h2>
           <p>your name is:{status.userName}</p>
          <p>your email is:{status.email}</p>
          <p>your password is:{status.password}</p>
          <p>your repassword is:{status.repassword}</p>
        </div>
        
       </div>
       )
}
export default Register;