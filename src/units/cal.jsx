import { useState} from 'react'

export default function Calculator1() {
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [result, setResult] = useState(0)

function calculate(){
setResult(num1 + num2)
}
function calculateNum1(){
setNum1(1)
}
function calculateNum2(){
setNum2(2)
}
return(
<div>
<h1>Calculator</h1>
<button onClick={calculateNum1}>1</button>
<button onClick={calculateNum2}>2</button>
<button onClick={calculate}>result</button>
{result}
</div>



)
}
