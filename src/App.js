import {useState} from 'react';
function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");	
	const opt = ['/','*','+','-','.'];	
	const updateCals = value =>{
		if(opt.includes(value)&&calc===''|| opt.includes(value)&& opt.includes(calc.slice(-1))){
			return;
		}
		setCalc(calc+value);
		if(!opt.includes(value)){
			
			setResult(eval(calc+value).toString());
		}	
	}
	const createDigits =()=>{
		const digits=[];
		
		for(let i=1;i<10;i++){
			digits.push(
				<button onClick={()=>updateCals(i.toString())} key={i}>{i}</button>
			)
		}
		return digits;
	}
	const calculate=()=>{
		setCalc(eval(calc).toString());
	}
	const del = ()=>{
		if(calc==''){
			return;
		}
		const value = calc.slice(0, -1);
		setCalc(value);
	}
	const ac=()=>{
		const last = "";
		setCalc(last);
		setResult(last);
	}	
  return (
    <div className="App">
      <div className="calculator">
		<div className="display">
		{result ? <span>({result})</span>:''}{calc || "0"}  
		</div>
		<div className="operators">
			<button onClick={()=>updateCals('/')}>/</button>
			<button onClick={()=>updateCals('*')}>*</button>
			<button onClick={()=>updateCals('+')}>+</button>
			<button onClick={()=>updateCals('-')}>-</button>
			<button onClick={del}>Del</button>
			<button onClick={ac}>AC</button>
		</div>
		<div className="digits">
			{ createDigits() }
			<button onClick={()=>updateCals('0')}>0</button>
			<button onClick={()=>updateCals('.')}>.</button>		
			<button onClick={calculate}>=</button>
		</div>
      </div>
    </div>
  );
}
export default App;
