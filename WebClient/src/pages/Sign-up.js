import React, { Component } from 'react';
import '../styles/sign-in.css';
import Powerslap from '../media/video.mp4';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state={
            action: 'register',
            connectionMethod: 'email',
            username:'',
            email:'',
            password:'',
        }
    }

  
    
    handleEmail(text) {
        this.setState({email:text.target.value})

    }

    handlePassword(text) {
        this.setState({password:text.target.value})
    }

    handleUsername(text) {
        this.setState({username:text.target.value})
    }
    login() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var link = '/sign-in';
        window.location.href = link;

        var raw = JSON.stringify({"action":"register","connectionMethod":"email","username":this.state.username,"email":this.state.email,"password":this.state.password});
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
       // console.log(raw);
        
        fetch("http://localhost:8080/auth/", requestOptions)
        .then(function(response) {
            if (response.status === 200) {
                console.log("Registration successfull");
               
            }
            else if(response.status === 400) {
                console.log("Username password do not match");
                alert("username password do not match")
                }
                else {
                console.log("Username does not exists");
                alert("Username does not exists");
                }
                })
                .catch(function(error) {
                console.log(error);
        });
    }


    render() {

        const OnSuccess = (response) => {
            console.log('[Login Success] current User:', response.profileObj.name);
         
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            var link = '/sign-in';
            
            var raw = JSON.stringify({"action":"register","connectionMethod":"google","username":response.profileObj.name,"googleId":response.googleId});
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            };
            
            fetch("http://localhost:8080/auth/", requestOptions)
            .then(function(response) {
                if (response.status === 200) {
                    console.log("Registration successfull");
                    window.location.href = link;
                }
                else if(response.status === 400) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                    }
                    else {
                    console.log("Username does not exists");
                    alert("Username does not exists");
                    }
                    })
                    .catch(function(error) {
                    console.log(error);
            });
          };

          const onFailure = (response) => {
              console.log('[Login Failed] res:', response);
          };

        const responseFacebook = (response) => {
            console.log(response);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            var link = '/sign-in';
            
            var raw = JSON.stringify({"action":"register","connectionMethod":"facebook","username":response.name,"facebookId":response.id});
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            };
            
            fetch("http://localhost:8080/auth/", requestOptions)
            .then(function(response) {
                if (response.status === 200) {
                    console.log("Registration successfull");
                    window.location.href = link;
                }
                else if(response.status === 400) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                    }
                    else {
                    console.log("Username does not exists");
                    alert("Username does not exists");
                    }
                    })
                    .catch(function(error) {
                    console.log(error);
            });
        }
     
        return ( 
         <div className="bg">   
        <div className="main__container">
            <div className="signin-card">
                <div className="signin-content">
                    <span className="signin-header">Sign Up</span>

                    <form className="signin-form">
                    <input type="username" autoFocus placeholder="Username" name="email" className="signin-input" required onChange= {(text) => {this.handleUsername(text)}}></input>
                    <input type="email" autoFocus placeholder="Email" name="email" className="signin-input" required onChange= {(text) => {this.handleEmail(text)}}></input>
                        <input type="password" autoFocus placeholder="Password" name="password" className="signin-input" minLength="6"required onChange={(text) => {this.handlePassword(text)}}></input>
                      
                        <input type="submit" name="submit" value="Sign Up" className="signin-btn" onClick={() => {this.login()}}></input>
                        <GoogleLogin
                            clientId="995333864195-ps6id6cj7b3l0o1mpppt0rdf39ucje6q.apps.googleusercontent.com"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="google-btn" disabled={renderProps.disabled}><i className="fa fa-google-plus-square"> </i> Sign Up with Google</button>
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

                        />
                    
                    </form>
                    <div className="signup-link-wrapper">
                        <span className="signup-notice"> You already have an account ?</span> 
                        <a className="signup-link" href="./sign-in">Sign in </a> 
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
                            zIndex:"1",
                            }}>
                        <source src={Powerslap} type="video/mp4"/>
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