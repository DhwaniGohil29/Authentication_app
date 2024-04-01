import NavBar from "./NavBar";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function About()
{
	const nav = useNavigate();
	const[username, setUserName] = useState("");

	useEffect( () => {
		let u = localStorage.getItem("un");
		if(u == null)
			nav("/");

	}, []);


return(
<>
<center>
	<NavBar/>
	<h1>About Page</h1>
	<h2>
	<p> Kamal Classes </p>
	<p>JS Full Stack</p>
	<p>Java Full Stack</p>
	<p>Python Full Stack</p>
	</h2>
</center>
</>
);


}
export default About;