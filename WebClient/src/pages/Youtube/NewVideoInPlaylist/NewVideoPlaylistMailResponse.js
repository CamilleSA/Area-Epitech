import React, { Component } from 'react';
import '../../../styles/settings.css'
import Menu from '../../../components/Menu';
import Gmail from '../../../media/gmail.png';
import Youtube from '../../../media/youtube.png'





class NewVideoPlaylistMailResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            email: '',

        }
    }


    handleEmail(text) {
        this.setState({ email: text.target.value })

    }

    handleCity(text) {
        this.setState({ city: text.target.value })
        console.log(text.target.value)

    }
    modifyArea = () => {
        var username = sessionStorage.getItem("name");
        var placeholder = sessionStorage.getItem('placeholder');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var objAction = { id: this.state.email };
        var objReaction = {}
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

        var username = sessionStorage.getItem("name");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        var objAction = { id: this.state.email };
        var objReaction = {}
        var tmp = username + 'NewVideoPlaylistRespondMail' + Math.floor((Math.random() * 1000) + 1);
        this.setState({ placeholder: tmp })

        var raw = JSON.stringify({
            "username": username, "placeholder": tmp, "serviceAction": "youtube",
            "serviceActionConfig": objAction, "serviceReaction": "gmail", "serviceReactionConfig": objReaction,
            "action": "newVideoInPlaylist", "reaction": "respondMail"
        });

        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/", requestOptions)

            .then(response => {
                response.json()
                console.log(response)
            })

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

        var raw = JSON.stringify({ "username": username, "placeholder": this.state.placeholder });

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
                        <img className="gmaile" src={Youtube} alt="gmail" />
                        <h1 className="action">Action</h1>
                        <h1 className="trigger">1. New Video in Playlist in Youtube</h1>
                        <h1 className="account">Enter your Information</h1>
                        <input type="email" onChange={(text) => { this.handleEmail(text) }} autoFocus placeholder="Enter Playlist" name="email" className="input-youtube"></input>
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
                        <img className="gmaile" src={Gmail} alt="gmail" />
                        <h1 className="action">Reaction</h1>
                        <h1 className="trigger">2. Email Response to Gmail</h1>
                    </div> </div>
                <button type="submit" name="submit" className="tryte" onClick={() => { sessionStorage.getItem("modify") === "false" ? this.createArea() : this.modifyArea() }}><a href="#popup1">{sessionStorage.getItem("modify") === "false" ? "Make a Area !" : "Change this Area!"}</a></button>


            </div>
        )

    };

}

export default NewVideoPlaylistMailResponse;