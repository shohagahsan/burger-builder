import { Component } from "react";
import { Formik } from "formik";

class Auth extends Component {
    state = {
        mode: "Sign Up"
    }

    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }
                    }
                    onSubmit={
                        values => {
                            console.log("Values:", values);
                        }
                    }
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 4) {
                            errors.password = "Must be atleast 4 characters!";
                        }
                        if (this.state.mode === "Sign Up") {
                            if (!values.confirmPassword) {
                                errors.confirmPassword = "Required";
                            } else if (values.password !== values.confirmPassword) {
                                errors.confirmPassword = "Password field dosn't match!";
                            }
                        }
                        // console.log("Errors:", errors);
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                        }}>
                            <button style={{
                                width: "100%",
                                backgroundColor: "#D70F64",
                                color: "white",
                            }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                            <br />
                            <br />
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <input
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                {this.state.mode === "Sign Up" ? <div>
                                    <input
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="form-control"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                                    <br />
                                </div> : null}
                                <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                            </form>
                        </div>)}

                </Formik>
            </div>
        )
    }
}

export default Auth;