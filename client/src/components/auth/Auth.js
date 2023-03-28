import {React, useState}from "react";
import './Auth.css'
import Register from "./Register";


function Auth( {signup} ){


    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);


	

    function handleLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/users/login",{
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
            .then((r) =>{
				setIsLoading(false);
                if(r.ok){
                    r.json().then((user)=> signup(user))
                }
            })
            // .then((user) => signup(user));

    }



    return( 
        <div className="App-header" >



<form onSubmit={handleLogin}>
      <h3>Login With Username</h3>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
	  <label htmlFor="password">password: </label>
	  <input
        type="text"
        id="username"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" id="btn">Login</button>
    </form>


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