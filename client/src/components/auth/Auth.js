import {React, useState}from "react";
import './Auth.css'
import Register from "./Register";
import axios from 'axios';


function Auth( {signup} ){


    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// const [isLoading, setIsLoading] = useState(false);
	// const [email, setEmail] = useState('');


	

    // function handleLogin(e){
    //     e.preventDefault();
    //     fetch("http://127.0.0.1:3000/users/login",{
	// 		mode: 'no-cors',
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ username, password }),
	// 	})
    //         .then((r) =>{
	// 			// setIsLoading(false);
    //             if(r.status === 200){
    //                 r.json().then((user)=> signup(user))
    //             }
    //         })
    // }

	const handleLogin = event => {
		event.preventDefault();
	
		axios.post('http://localhost:3000/users/login', {
	  username,
	 password
	})
	.then(response => {
	  console.log(response);
	  // do something with the response, such as saving the user information
	  if (response.status === 200) {
		const id = response.data.id;
		console.log(response.data)
		signup(response.data)
		localStorage.setItem('id', id);
		// setIsLoading(true);
	  }
	})
}



    return( 
        <div className="App-header" >



<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">


			<form className="sign-in-htm" onSubmit={handleLogin} >
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(e)=> setPassword(e.target.value)} />
				</div>
			
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</form>

			<Register signup={signup}/>	


			
		</div>
	</div>
</div>


        </div>
    )
}

export default Auth;