import {React, useState}from "react";
import './Auth.css'


function Auth( {signup} ){

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


	function handleSubmit(e) {
		e.preventDefault();
		fetch(`/signup/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, username, password }),
		})
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => signup(user));
            }
          });
			// .then((r) => r.json())
			// .then((user) => signup(user));
	}


    function handleLogin(e){
        e.preventDefault();
        fetch("/login",{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
            .then((r) =>{
                if(r.ok){
                    r.json().then((user)=> signup(user))
                }
            })
            // .then((user) => signup(user));

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
					<input id="pass" type="password" class="input" data-type="password" onChange={(e)=> setPassword(e.target.value)} />
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</form>


			<form className="sign-up-htm" onSubmit={handleSubmit}>

				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} />
				</div>


                <div className="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} />
				</div>


				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
				</div>


				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>

				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</form>
		</div>
	</div>
</div>


        </div>
    )
}

export default Auth;