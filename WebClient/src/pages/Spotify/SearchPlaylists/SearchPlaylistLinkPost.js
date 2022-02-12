import React, {Component} from 'react';
import '../../../styles/settings.css'
import Menu from '../../../components/Menu';
import Reddit from '../../../media/reddit.png'
import Spotify from '../../../media/logoSpotify.png'



class SearchPlaylistsLinkPost extends Component {
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
            channel: '',
            user: '',
            role: '',
            sensors: null,
            name: '',
            repo: ''

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
    handleRepo(text) {
        this.setState({ repo: text.target.value })

    }

    handleChannel(text) {
        this.setState({ channel: text.target.value })

    }

    modifyArea = () => {
        var username = sessionStorage.getItem("name");
        var placeholder = sessionStorage.getItem('placeholder');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        var objAction = {name: this.state.name};
        var objReaction = { username: this.state.user, password: this.state.channel, subreddit: this.state.role }
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
        var objAction = {name: this.state.name};
        var objReaction = { username: this.state.user, password: this.state.channel, subreddit: this.state.role }
        var tmp = username + 'searchPlaylistsLinkPost' + Math.floor((Math.random() * 1000) + 1);
        this.setState({ placeholder: tmp })

        var raw = JSON.stringify({
            "username": username, "placeholder": tmp, "serviceAction": "spotify",
            "serviceActionConfig": objAction, "serviceReaction": "reddit",
            "serviceReactionConfig": objReaction,
            "action": "searchPlaylists", "reaction": "postMessage"
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
                <img className="gmaile" src={Spotify} alt="gmail"/> 
                    <h1 className="action">Action</h1>
                    <h1 className="trigger">1. Search Playlist in Spotify</h1>
                    <h1 className="account">Enter your information</h1>
                    <input type="email" onChange={(text) => { this.handleName(text) }} autoFocus placeholder="Enter Playlist" name="email" className="input-spotify"></input>

                          </div>
            </div>
            <h1 className="plus"> <i class="fa fa-plus-circle" ></i></h1>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h1 className="confirm">Confirm your Area !</h1>
                    <a className="close" href="#/">&times;</a>
                    <div className="conteent">
                        <h2>Do you really want this Area ?</h2><br/>
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
                <img className="gmaile" src={Reddit} alt="gmail"/> 
                    <h1 className="action">Reaction</h1>
                    <h1 className="trigger">2. New Link Post to Reddit</h1>
                        <h1 className="account">Enter your Information</h1>
                        <input type="email" onChange={(text) => { this.handleUser(text) }} autoFocus placeholder="Enter Username" name="email" className="input-reddit"></input>
                        <input type="password" onChange={(text) => { this.handleChannel(text) }} autoFocus placeholder="Enter Password" name="email" className="input-reddit"></input>
                        <input type="email" onChange={(text) => { this.handleRole(text) }} autoFocus placeholder="Enter Subreddit" name="email" className="input-reddit"></input>
                    </div>
                </div>
                <button type="submit" name="submit" className="tryte" onClick={() => { sessionStorage.getItem("modify") === "false" ? this.createArea() : this.modifyArea() }}><a href="#popup1">{sessionStorage.getItem("modify") === "false" ? "Make a Area !" : "Change this Area!"}</a></button>


            </div>
        )
        
    };
    
}

export default SearchPlaylistsLinkPost;