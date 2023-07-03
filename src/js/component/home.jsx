
import React, { useState } from "react";

export function Home() 
{
	const [ selectedColor, setSelectedColor ] = useState(" ");
	
	// added handleClick function
	const handleClick = (newColor) => {
		
		setSelectedColor((prevColor) => (prevColor === newColor ? " " : newColor));
	}
	return ( 
		<div className="traffic-light">

			<div onClick={() => handleClick("red")} className= {"light red " + (selectedColor === "red" ? "glow" : " ")}></div>

			<div onClick={() => handleClick("yellow")} className={"light yellow "+ (selectedColor === "yellow" ? "glow" : " ")}></div>

			<div onClick={() => handleClick("green")} className={"light green "+ (selectedColor === "green" ? "glow" : " ")}></div>

		</div>);
};