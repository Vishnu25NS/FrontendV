import React,{useState} from 'react';
import axios from 'axios';
function Calculator() {
let [num1,setNum1]=useState(0);
let [num2,setNum2]=useState(0);
let [operator,setOperator]=useState('');
let [result,setResult]=useState(0);
function Calculate(input) {
    if(num1 == 0) {
        setNum1(input);
    } else {
        setNum2(input);
    }
}

function clear() {
    setResult(0);
    setNum1(0)
    setNum2(0)
}
function ChooseOperator(operend) {
    setOperator(operend);
}

async function handleResult() {
    const response=await axios.post('https://vns-cpug.onrender.com/calculate',{num1,num2,operator});
    setResult(response.data)
}

    return(
        <div style={{backgroundColor:'blue',
            height:'600px',
            display:'flex',padding:'10px',backgroundSize:'cover',
            flexDirection:'column',border:'solid white 1px',background:"linear-gradient(to bottom,black,grey)"
           }}>
        <div style={{backgroundColor:'wheat',
           width:'32%',
            height:'700px',
            marginLeft:'33%',
            justifyContent:'space-between',border:'solid black 10px',
          marginTop:'30px',
          borderRadius:'15px',marginBottom:'30px',display:"flex",flexDirection:"column",gap:'10px',padding:'10px'
        }}>
          <div style={{width:"75%",backgroundColor:'white',border:'solid black 10px',
                height:'55%',borderRadius:'15px',padding:"10%",justifyContent:'space-between',display:'flex',marginRight:'100%'
            }}><h1 style={{alignItems:'center'}}><b>{num1} {operator} {num2}=<br />{result}</b></h1></div>
            <div style={{display:'flex',
                justifyContent:'space-between'
            }}><button style={{
                width:'70px',height:'70px',marginLeft:'30px',borderRadius:'5px'}} onClick={() => Calculate(9)}><h1>9</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(8)}><h1>8</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(7)}><h1>7</h1></button>
            <button style={{
                width:'70px',height:'70px',marginRight:'25px',borderRadius:'5px'
            }} onClick={() => ChooseOperator('/')}><h1>/</h1></button>
        
            </div><div style={{display:'flex',
                justifyContent:'space-between'
            }}><button style={{
                width:'70px',height:'70px',marginLeft:'30px',borderRadius:'5px'
            }}onClick={() => Calculate(6)}><h1>6</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(5)}><h1>5</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(4)}><h1>4</h1></button>
            <button style={{
                width:'70px',height:'70px',marginRight:'25px',borderRadius:'5px'
            }}onClick={() => ChooseOperator('*')}><h1>*</h1></button>
        
            </div>
            <div style={{display:'flex',
                justifyContent:'space-between'
            }}><button style={{
                width:'70px',height:'70px',marginLeft:'30px',borderRadius:'5px'
            }}onClick={() => Calculate(3)}><h1>3</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(2)}><h1>2</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(1)}><h1>1</h1></button>
            <button style={{
                width:'70px',height:'70px',marginRight:'25px',borderRadius:'5px'
            }}onClick={() => ChooseOperator('-')}><h1>-</h1></button>
        
            </div><div style={{display:'flex',
                justifyContent:'space-between'
            }}><button style={{
                width:'70px',height:'70px',marginLeft:'30px',borderRadius:'5px'
            }}onClick={clear}><h1>CLR</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={() => Calculate(0)}><h1>0</h1></button>
            <button style={{
                width:'70px',height:'70px',borderRadius:'5px'
            }}onClick={handleResult}><h1>=</h1></button>
            <button style={{
                width:'70px',height:'70px',marginRight:'25px',borderRadius:'5px'
            }}onClick={() => ChooseOperator('+')}><h1>+</h1></button>
        
            </div>
            </div>
        </div>
    )
}
export default Calculator;