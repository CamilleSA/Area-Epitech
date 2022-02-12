import React, { Component } from 'react';
import '../../../styles/settings.css'
import Menu from '../../../components/Menu';
import Discord from '../../../media/discorde.png';
import Github from '../../../media/github.png';
import firebase from "firebase"

const global = [];


var provider = new firebase.auth.GithubAuthProvider();

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAGz5hGH_JCnDWTa6B-PfBtFPK6KrZgBEY",
        authDomain: "area-305822.firebaseapp.com"
    });
}


class CreateRepositorySendMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            placeholder: '',
            serviceAction: '',
            serviceActionConfig: '',
            serviceReaction: '',
            serviceReactionConfig: '',
            action: '',
            reaction: '',
            serverAction: '',
            serverReaction: '',
            placeholders: '',
            channel: '',
            user: '',
            role: '',
            sensors: null,
            name: ''

        }
    }

    handleName(text) {
        this.setState({ name: text.target.value })

    }

    handleServerReaction(text) {
        this.setState({ serverReaction: text.target.value })

    }



    handleUser(text) {
        this.setState({ user: text.target.value })

    }

    handleRole(text) {
        this.setState({ role: text.target.value })

    }

    githubSignin = (result) => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {

                var mydata = (result.credential.accessToken);

                global.push(mydata);

                sessionStorage.setItem('tokenGithub', global);

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json; charset=UTF-8");



            }).catch(function (error) {


                console.log(error.code)
                console.log(error.message)

            });

    }
    modifyArea = () => {
        var tokenGithub = sessionStorage.getItem('tokenGithub');
        var username = sessionStorage.getItem("name");
        var placeholder = sessionStorage.getItem('placeholder');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var objAction = { token: tokenGithub, owner: this.state.name };
        var objReaction = { idServer: this.state.serverReaction, idChannel: this.state.user };
        var raw = JSON.stringify({
            "username": username,
            "placeholder": placeholder,
            "serviceActionConfig": objAction,
            "serviceReactionConfig": objReaction
        });
        console.log(raw)
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/", requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            }).then(result => {
            }).catch(error => console.log('error', error));
    }
    createArea = () => {

        var tokenGithub = sessionStorage.getItem('tokenGithub');
        var username = sessionStorage.getItem("name");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        var objAction = { token: tokenGithub, owner: this.state.name };
        var objReaction = { idServer: this.state.serverReaction, idChannel: this.state.user };
        var tmp = username + 'NewRepoSendMessage' + Math.floor((Math.random() * 1000) + 1);
        this.setState({ placeholders: tmp })

        var raw = JSON.stringify({
            "username": username, "placeholder": tmp, "serviceAction": "github",
            "serviceActionConfig": objAction, "serviceReaction": "discord",
            "serviceReactionConfig": objReaction,
            "action": "getNewRepo", "reaction": "sendMessage"
        });

        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/", requestOptions)

            .then(response => response.json())

            .then(result => {


            }


            )
            .catch(error => console.log('error', error));

    }

    executeArea = () => {
        var username = sessionStorage.getItem("name");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var link = '/settings';
        window.location.href = link;

        var raw = JSON.stringify({ "username": username, "placeholder": this.state.placeholders });

        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };


        fetch("http://localhost:8080/dashboard/execute", requestOptions)

            .then(response => response.json())

            .then(result => {
                // window.location.href = link;

            }


            )
            .catch(error => console.log('error', error));

    }


    render() {

        return (
            <div className="mid-dashboard">
                <Menu />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="cardu">
                    <div className="container">
                        <div class="tooltip"><i class="fa fa-question-circle" aria-hidden="true"></i>
                            <span class="tooltiptext">A action is an event that starts a Area. Once you’ve set up a Area, Area will monitor for that trigger event.</span>
                        </div>
                        <img className="gmaile" src={Github} alt="gmail" />
                        <h1 className="action">Action</h1>
                        <h1 className="trigger">1. New Repository in Github</h1>
                        <h1 className="account">Choose account</h1>
                        <button onClick={() => { this.githubSignin() }} className="github-bten"><i className="fa fa-github"> </i> Sign In to Github</button>
                        <h1 className="account1">Enter your Information</h1>
                        <input type="email" onChange={(text) => { this.handleName(text) }} autoFocus placeholder="Enter Username" name="email" className="input-github"></input>
                    </div>
                </div>
                <h1 className="plus"> <i class="fa fa-plus-circle" ></i></h1>
                <div id="popup1" className="overlay">
                    <div className="popup">
                        <h1 className="confirm">Confirm your Area !</h1>
                        <a className="close" href="#/">&times;</a>
                        <div className="conteent">
                            <h2>Do you really want this Area ?</h2><br />
                            <button className="confirm-btn" onClick={() => { this.executeArea() }}>Confirm</button>
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
                        <img className="gmaile" src={Discord} alt="gmail" />
                        <h1 className="action">Reaction</h1>
                        <h1 className="trigger">2. Send Message to Discord</h1>
                        <h1 className="account">Enter your information</h1>
                        <button type="submit" name="submit" className="discord-bten"><a href="https://discord.com/oauth2/authorize?client_id=810518352523034654&permissions=2147483647&scope=bot" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"> </i> Add Bot to Discord</a></button><br />

                        <input type="email" onChange={(text) => { this.handleServerReaction(text) }} autoFocus placeholder="Enter ID Server" name="email" className="input-server"></input>
                        <input type="email" onChange={(text) => { this.handleUser(text) }} autoFocus placeholder="Enter ID Channel" name="email" className="input-server"></input>
                    </div>            </div>
                <button type="submit" name="submit" className="tryte" onClick={() => { sessionStorage.getItem("modify") === "false" ? this.createArea() : this.modifyArea() }}><a href="#popup1">{sessionStorage.getItem("modify") === "false" ? "Make a Area !" : "Change this Area!"}</a></button>


            </div>
        )

    };

}

export default CreateRepositorySendMessage;