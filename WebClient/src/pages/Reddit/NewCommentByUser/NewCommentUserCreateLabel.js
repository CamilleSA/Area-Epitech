import React, {Component} from 'react';
import '../../../styles/settings.css'
import Gmail from '../../../media/gmail.png';
import Menu from '../../../components/Menu';
import Reddit from '../../../media/reddit.png'
import GoogleLogin from 'react-google-login';




class NewCommentUserCreateLabel extends Component {

    render() {
        const OnSuccess = (response) => {
            console.log('[Login Success] current User:', response.profileObj);
            console.log('[Login Success] current User:', response.accessToken);
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            
            var raw = JSON.stringify({"placeholder":"reddit-create-label-comment-user","service":"google","token":response.accessToken});
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            };
            
            fetch("http://localhost:8080/services/", requestOptions)
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
          };

          const onFailure = (res) => {
              console.log('[Login Failed] res:', res);
          };
        
        const OnSuccess1 = (response) => {
            console.log('[Login Success] current User:', response.profileObj);
            console.log('[Login Success] current User:', response.accessToken);
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            
            var raw = JSON.stringify({"placeholder":"reddit-comment-user-create-label","service":"google","token":response.accessToken});
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            };
            
            fetch("http://localhost:8080/services/", requestOptions)
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
          };

          const onFailure1 = (res) => {
              console.log('[Login Failed] res:', res);
          };
        return (
            <div className="mid-dashboard">
                <Menu/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>               
                <div className="cardu">
                <div className="container">
                <div class="tooltip"><i class="fa fa-question-circle" aria-hidden="true"></i>
                    <span class="tooltiptext">A action is an event that starts a Area. Once you’ve set up a Area, Area will monitor for that trigger event.</span>
                    </div>
                <img className="gmaile" src={Reddit} alt="gmail"/> 
                    <h1 className="action">Action</h1>
                    <h1 className="trigger">1. New Comment by User in Reddit</h1>
                    <h1 className="account">Choose account</h1>
                    <GoogleLogin
                            clientId="995333864195-ps6id6cj7b3l0o1mpppt0rdf39ucje6q.apps.googleusercontent.com"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="reddit-bten" disabled={renderProps.disabled}><i className="fa fa-reddit"> </i> Sign In with Reddit</button>
                              )}
                            buttonText="Login"
                            onSuccess={OnSuccess1}
                            onFailure={onFailure1}
                            cookiePolicy={'single_host_origin'}
                        />                 </div>
            </div>
            <h1 className="plus"> <i class="fa fa-plus-circle" ></i></h1>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h1 className="confirm">Confirm your Area !</h1>
                    <a className="close" href="#/">&times;</a>
                    <div className="conteent">
                        <h2>Do you really want this Area ?</h2><br/>
                        <button className="confirm-btn">Confirm</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
            <div className="cardu">
                <div className="container">
                <div class="tooltip"><i class="fa fa-question-circle" aria-hidden="true"></i>
                    <span class="tooltiptext">After you set up your Area trigger, the next step is to add an action to your Area. An reaction is an event your Area performs when your trigger event occurs.
</span>
                    </div>
                <img className="gmaile" src={Gmail} alt="gmail"/> 
                    <h1 className="action">Reaction</h1>
                    <h1 className="trigger">2. Create Label to Gmail</h1>
                    <h1 className="account">Choose account</h1>
                    <GoogleLogin
                            clientId="995333864195-ps6id6cj7b3l0o1mpppt0rdf39ucje6q.apps.googleusercontent.com"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="google-bten" disabled={renderProps.disabled}><i className="fa fa-google-plus-square"> </i> Sign In with Google</button>
                              )}
                            buttonText="Login"
                            onSuccess={OnSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                        /> <br/>
                    <h1 className="account"> Enter your Information</h1>
           
                    <input type="email" autoFocus placeholder="Enter Name of Label" name="email" className="input-label"></input>               </div>
            </div>
            <button type="submit" name="submit" className="tryte"><a href="#popup1"> Make a Area !</a></button>


            </div>
        )
        
    };
    
}

export default NewCommentUserCreateLabel;