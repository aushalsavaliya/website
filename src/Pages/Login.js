import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const isValid = handleValidation();
        if (isValid) {
            const email = e.target.EmailInput.value
            const password = e.target.InputPassword.value
            localStorage.setItem('email', email)

            if (email === 'aushalsavaliya994@gmail.com' && password === 'aushalsavaliya') {
                localStorage.setItem('isAdmin', 'yes')
            }

            navigate('/doctors')

        }
    };


    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group">
                                <p>
                                    Email address
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="EmailInput"
                                        name="EmailInput"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </p>
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <p>Password
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="InputPassword"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </p>
                                <small id="passworderror" className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <button type="submit" className=" btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;







