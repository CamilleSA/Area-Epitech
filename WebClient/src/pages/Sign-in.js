import React, { Component } from 'react';
import '../styles/sign-in.css';
import Powerslap from '../media/video.mp4';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


export let username = [];

const global = [];


class SignIn extends Component {


    constructor(props) {
        super(props);

        this.state = {
            action: 'connect',
            connectionMethod: 'email',
            email: '',
            password: '',
            sensors: null,

        }
    }
    handleEmail(text) {
        this.setState({ email: text.target.value })

    }

    handlePassword(text) {
        this.setState({ password: text.target.value })
    }


    login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var link = '/dashboard';

        var raw = JSON.stringify({ "action": "connect", "connectionMethod": "email", "email": this.state.email, "password": this.state.password });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/auth/", requestOptions)

            .then(response => response.json())

            .then(result => {
                console.log(result)
                console.log(result.username)
                var mydata = (result.username)
                global.push(mydata);

                console.log(global);
                this.setState({
                    sensors: global,
                })
                sessionStorage.setItem('name', global);
                window.location.href = link;




            }


            )
            .catch(error => console.log('error', error));




    };






    render() {




        const OnSuccess = (response) => {
            console.log('[Login Success] current User:', response.profileObj);
            var mydata = (response.profileObj.name);
            global.push(mydata);

            this.setState({
                sensors: global,
            })

            sessionStorage.setItem('name', global)

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            var link = '/dashboard';

            var raw = JSON.stringify({ "action": "connect", "connectionMethod": "google", "googleId": response.googleId });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };

            fetch("http://localhost:8080/auth/", requestOptions)
                .then(function (response) {

                    if (response.status === 200) {

                        console.log("Registration successfull");
                        window.location.href = link;
                    }
                    else if (response.status === 400) {
                        console.log("Username password do not match");
                        alert("username password do not match")
                    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exists");
                    }
                })

                .catch(function (error) {
                    console.log(error);

                });
        };

        const onFailure = (res) => {
            console.log('[Login Failed] res:', res);
        };

        const responseFacebook = (response) => {
            console.log(response.name);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            var link = '/dashboard';
            var mydata = (response.name);

            global.push(mydata);

            this.setState({
                sensors: global,
            })

            sessionStorage.setItem('name', global)
            var raw = JSON.stringify({ "action": "connect", "connectionMethod": "facebook", "facebookId": response.id });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };

            fetch("http://localhost:8080/auth/", requestOptions)
                .then(function (response) {
                    if (response.status === 200) {
                        console.log("Registration successfull");
                        window.location.href = link;
                    }
                    else if (response.status === 400) {
                        console.log("Username password do not match");
                        alert("username password do not match")
                    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exists");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        username = this.state.sensors;

        return (

            <div className="bg">
                <div className="main__container">
                    <div className="signin-card">
                        <div className="signin-content">
                            <span className="signin-header">Sign In</span>


                            <form className="signin-form">
                                <input type="email" autoFocus placeholder="Email" name="email" className="signin-input" required onChange={(text) => { this.handleEmail(text) }}></input>
                                <input type="password" autoFocus placeholder="Password" name="password" className="signin-input" minLength="6" required onChange={(text) => { this.handlePassword(text) }}></input>
                                <input type="submit" name="submit" value="Sign In" className="signin-btn" onClick={() => { this.login() }}></input>
                                <GoogleLogin
                                    clientId="995333864195-ps6id6cj7b3l0o1mpppt0rdf39ucje6q.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button onClick={renderProps.onClick} className="google-btn" disabled={renderProps.disabled}><i className="fa fa-google-plus-square"> </i> Sign In with Google</button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={OnSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <FacebookLogin
                                    appId="3800966443320957" //APP ID NOT CREATED YET
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="facebook-btn"
                                    icon="fa-facebook"

                                />                    </form>
                            <div className="signup-link-wrapper">
                                <span className="signup-notice"> Don't have an account ?</span>
                                <a className="signup-link" href="./sign-up">Sign up </a>
                            </div>
                        </div>

                        <aside className="signin-aside">
                            <video className="video" autoPlay loop muted
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    left: "50%",
                                    top: "50%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: "1",
                                }}>
                                <source src={Powerslap} type="video/mp4" />
                            </video>

                            <div className="signin-aside-overlay"></div>
                            <h1 className="signin-welcome-text">Welcome !</h1>
                            <hr className="signin-aside-hr"></hr>
                        </aside>

                    </div>
                </div>
            </div>
        );
    };

}



export default SignIn;
