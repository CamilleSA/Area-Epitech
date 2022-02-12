import React, {Component} from 'react';
import '../../../styles/settings.css'
import Gmail from '../../../media/gmail.png';
import Menu from '../../../components/Menu';
import Discord from '../../../media/discorde.png';
import GoogleLogin from 'react-google-login';




class NewLabelSendMessage extends Component {

    render() {

        const OnSuccess = (response) => {
            console.log('[Login Success] current User:', response.profileObj);
            console.log('[Login Success] current User:', response.accessToken);
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");
            
            var raw = JSON.stringify({"placeholder":"gmail-new-label-send-message","service":"google","token":response.accessToken});
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
                <img className="gmaile" src={Gmail} alt="gmail"/> 
                    <h1 className="action">Action</h1>
                    <h1 className="trigger">1. New Label in Gmail</h1>
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
                        />                </div>
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
                <img className="gmaile" src={Discord} alt="gmail"/> 
                    <h1 className="action">Reaction</h1>
                    <h1 className="trigger">2. Send Message to Discord</h1>
                    <h1 className="account">Enter your information</h1>
                    <button  type="submit" name="submit" className="discord-bten"><a href="https://discord.com/oauth2/authorize?client_id=810518352523034654&permissions=2147483647&scope=bot" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"> </i> Add Bot to Discord</a></button><br/>

                    <input type="email" autoFocus placeholder="Enter ID Server" name="email" className="input-server"></input>
                    <input type="email" autoFocus placeholder="Enter ID Channel" name="email" className="input-server"></input>
                    <input type="email" autoFocus placeholder="Enter Message" name="email" className="input-server"></input> </div>
            </div>
            <button type="submit" name="submit" className="tryte"><a href="#popup1"> Make a Area !</a></button>


            </div>
        )
        
    };
    
}

export default NewLabelSendMessage;