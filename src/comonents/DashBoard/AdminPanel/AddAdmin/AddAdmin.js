import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../../../App';
import './AddAdmin.css'

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}


const AddAdmin = () => {
	const [password, setPassword] = useState({})
	const [user, setUser] = useState({
		isSigned: false,
		name: "",
		email: "",
		password: "",
		error: "",
		errorDisMatch: "",
		passworError: "",
		success: false,

	})
	const inputFieldChange = (e) => {
		console.log(e.target.value);
		let isValid;
		if (e.target.name === 'name') {
			isValid = e.target.value;
		}
		if (e.target.name === 'email') {
			const valid = /\S+@\S+\.\S+/.test(e.target.value);
			if (valid) {
				isValid = valid;

			}
			else {
				const emailError = "email is not correct";
				const userInfo = { ...user };
				userInfo.passworError = "";
				userInfo.errorDisMatch = "";
				userInfo.error = "";
				userInfo.emailError = emailError;
				setUser(userInfo);

			}
		}
		if (e.target.name === 'confrimPassword') {
			const isValue = e.target.value;
			const isLengthValid = e.target.value.length > 6;
			const isCharacterValid = /\d{1}/.test(e.target.value);
			const valid = isLengthValid && isCharacterValid
			if (valid) {
				setPassword(isValue);
				const userInfo = { ...user };
				userInfo.error = "";
				userInfo.passworError = "";
				userInfo.errorDisMatch = "";
				setUser(userInfo);
			}
			else {
				const passworError = "password must be 6 character and contain 1 number"
				const userInfo = { ...user };
				userInfo.errorDisMatch = "";
				userInfo.passworError = passworError;
				userInfo.error = "";
				setUser(userInfo);

			}
		}
		if (e.target.name === 'password') {
			const isValue = e.target.value;
			const isLengthValid = e.target.value.length > 6;
			const isCharacterValid = /\d{1}/.test(e.target.value);
			const valid = isLengthValid && isCharacterValid
			if (valid) {
				if (password === isValue) {
					isValid = valid;

					console.log("password match");
				}
				else {
					const passworError = "password do not match"
					const userInfo = { ...user };
					userInfo.passworError = "";
					userInfo.errorDisMatch = passworError;
					userInfo.error = "";
					setUser(userInfo);
					console.log("password do not match");
				}
			}
			else {
				const passworError = "password do not match"
				const userInfo = { ...user };
				userInfo.passworError = "";
				userInfo.errorDisMatch = passworError;
				userInfo.error = "";
				setUser(userInfo);
			}
		}

		if (isValid) {
			const userInfo = { ...user };
			userInfo.errorDisMatch = "";
			userInfo.emailError = "";
			userInfo.error = "";
			userInfo[e.target.name] = e.target.value;
			setUser(userInfo);
		}
		e.preventDefault();
	}

	const handleSubmit = (e) => {
		if (user.email && user.password) {
			firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const userInfo = { ...user };
					userInfo.error = "";
					setUser(userInfo);
					handleUserUpdate(user.name)
					handleAddAdmin();
				})
				.catch((error) => {
					var errorCode = error.code;
					const userInfo = { ...user };
					userInfo.error = error.message;
					setUser(userInfo);
				});
			console.log(user.email, user.password);
		}
		e.preventDefault();
	}
	const handleUserUpdate = name => {
		const user = firebase.auth().currentUser;

		user.updateProfile({
			displayName: name,

		}).then(function () {
			// Update successful.
		}).catch(function (error) {
			// An error happened.
		});
	}
	const handleAddAdmin = () => {
		const admindata = {
			email: user.email,
			name:user.name
	}
		const uri = `http://localhost:5000/addAdmin`;
		fetch(uri, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(admindata)

		})
			.then(res => console.log("object"))
		alert('Admin Addeded Sucessfully')
	}
	return (
		<div>
			<div className="login-container">
				<div className="container-margin">
					<div className="create-account-container">
						<h2>ADD ADMIN</h2>
						<form className="form" onSubmit={handleSubmit}>
							 <input className="input" type="text" name="name" placeholder="Name" onBlur={inputFieldChange} required /><br />
							<h6></h6>

							<input className="input" type="text" name="email" placeholder="Username or Email" onChange={inputFieldChange} required /><br />
							<h6>{user.emailError}</h6>

							<input className="input" type="password" name="confrimPassword"
								placeholder="Password"
								onChange={inputFieldChange} required /><br />
							<h6>{user.passworError}</h6>


							<input className="input" type="password" name="password" placeholder="Confrim Password" onChange={inputFieldChange} required />
							<h6>{user.errorDisMatch}</h6><br />

							<div className="submit-btn">
								<input className="submit input" type="submit" value="ADD ADMIN"/>
							</div>

						</form>
						<small style={{ color: "green" }}>{user.error}</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddAdmin;