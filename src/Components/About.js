import {useState} from 'react'

function About(){
	const [country,setCountry]=useState("India")
	const [city,setCity]=useState("Vijayawada")
	return(
		<div class="apage">
		{/*<h1>{country}</h1>
		<p>{city}</p>*/}
			<p><input onChange={(e)=>setCountry(e.target.value)}/></p>
			<button onClick={()=>console.log(country)}>Submit</button>
		</div>
		)
}

export default About