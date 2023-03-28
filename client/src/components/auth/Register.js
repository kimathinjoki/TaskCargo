import React, {useState} from "react";

function Register({signup}){

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/users", {
			mode: 'no-cors',
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





    return(
        <>

			<form className="sign-up-htm" onSubmit={handleSubmit}>

                <div className="group">
    <label for="user" className="label">Username</label>
    <input id="user" type="text" className="input" value={username} onChange={(e)=>{
        e.preventDefault()
        setUsername(e.target.value)}} />
                </div>


            <div className="group">
                <label for="pass" className="label">Email Address</label>
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
        </>
    )
}

export default Register;