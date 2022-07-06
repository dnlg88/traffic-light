import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container py-2">
				<div className={color === 'red' ? 'red light active' : 'red light'} onClick={() => setColor("red")}></div>
				<div className={color === 'yellow' ? 'yellow light active' : 'yellow light'} onClick={() => setColor("yellow")}></div>
				<div className={color === 'green' ? 'green light active' : 'green light'} onClick={() => setColor("green")}></div>
			</div>
			
		</div>
	);
};

export default Home;
