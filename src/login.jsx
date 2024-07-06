function Login ()
   {
    return(
        <div style={{backgroundColor:'aqua',
            width:'1488px',
            height:'550px',
            display:'flex',
            flexDirection:'column',border:'solid white 1px',background:"linear-gradient(to bottom,black,grey)"
           }}>
            <div style={{backgroundColor:'wheat',
                width:'700px',
                height:'300px',
                marginLeft:'400px',
                justifyContent:'center',
              marginTop:'100px',
              borderRadius:'15px',border:'solid black 5px'
            }}><h1 style={{textAlign:'centre',
                marginLeft:'150px'
            }}>Enter your login details</h1>
                <div style={{backgroundColor:"wheat",
                    marginTop:'10px'
                }}>
                <input type="text" placeholder="USERNAME" 
                style={{borderRadius:'10px',
                    width:'400px',
                    height:"30px",marginLeft:'160px',
                    marginTop:"10px"
                }}></input>
                 <input type="text" placeholder="password" 
                style={{borderRadius:'10px',
                    width:'400px',
                    height:"30px",marginLeft:'160px',
                    marginTop:"10px"
                }}></input>
                
                </div>
                <button style={{borderRadius:"10px",
            display:'flex',
            justifyContent:"space-between",
            marginLeft:'240px',
           marginTop:'70px',
            width:'200px',
            height:'35px'
           }}>
            <text style={{marginLeft:'60px'
           }}><b>LOGIN</b></text></button>

                </div>
            </div>
    )
   }
   export default Login;