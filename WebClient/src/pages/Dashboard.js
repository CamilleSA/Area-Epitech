import React, { Component } from 'react';
import Menu from '../components/Menu';
import '../styles/dashboard.css'
import Gmail from '../media/gmail.png';
import Discord from '../media/discorde.png';
import Weather from '../media/weather.png'
import Reddit from '../media/reddit.png'
import Youtube from '../media/youtube.png'
import SelectServices from '../components/SelectServices';
import ChatBote from '../components/ChatBot';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            sensors: '',
        }
    }




    render() {


        sessionStorage.setItem('modify', "false");



        return (
            <div className="mid-dashboard">


                <Menu />
                <ChatBote/>

                <div className="mid-title">
                    <h1>Hello</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="try">
                    <SelectServices />
                </div>
                <div className="workflow">
                    <h1>Recommended workflows for you !</h1>
                </div>


                <div className="card">
                    <div className="container">

                        <img className="weather" src={Weather} alt="weeather" />
                        <img className="discord" src={Discord} alt="discord" />

                        <h1 className="details">Weather Change, Discord message</h1>

                        <h2 className="subdetails">Weather + Discord</h2>
                        <button type="submit" name="submit" className="tryit"><a className="sign-link" href="./weatherchange-sendmessage">Try it !</a></button>
                    </div>
                </div>

                <div className="card">
                    <div className="container">

                        <img className="weather" src={Weather} alt="reddit" />
                        <img className="discord" src={Reddit} alt="discord" />

                        <h1 className="details">Weather Change, Post Reddit</h1>

                        <h2 className="subdetails">Weather + Reddit</h2>
                        <button type="submit" name="submit" className="tryit"><a className="sign-link" href="./weatherchange-linkpost">Try it !</a></button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">

                        <img className="weather" src={Youtube} alt="reddit" />
                        <img className="discord" src={Reddit} alt="discord" />

                        <h1 className="detailsytb">New Youtube video of a channel, Post Reddit</h1>

                        <h2 className="subdetails">Youtube + Reddit</h2>
                        <button type="submit" name="submit" className="tryit"><a className="sign-link" href="./newvideochan-linkpost">Try it !</a></button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">

                        <img className="weather" src={Youtube} alt="reddit" />
                        <img className="discord" src={Discord} alt="discord" />

                        <h1 className="detailsytbs">New Youtube video of a channel, Message Discord</h1>

                        <h2 className="subdetails">Youtube + Discord</h2>
                        <button type="submit" name="submit" className="tryit"><a className="sign-link" href="./newvideochan-sendmessage">Try it !</a></button>
                    </div>
                </div>

                <div className="card">
                    <div className="container">

                        <img className="weather" src={Youtube} alt="reddit" />
                        <img className="discord" src={Gmail} alt="discord" />

                        <h1 className="detailsytbs">New Youtube video of a channel, Send mail</h1>

                        <h2 className="subdetails">Youtube + Gmail</h2>
                        <button type="submit" name="submit" className="tryit"><a className="sign-link" href="./newvideochan-sendmail">Try it !</a></button>
                    </div>
                </div>



            </div>


        );
    };
}

export default Dashboard;