import React, {Component} from 'react';
import Menu from '../components/Menu';
import '../styles/services.css'
import Gmail from '../media/gmail.png';
import Discord from '../media/discorde.png';
import Weather from '../media/weather.png'
import Reddit from '../media/reddit.png'
import Youtube from '../media/youtube.png'
import Github from '../media/github.png'
import ChatBote from '../components/ChatBot';

class Services extends Component {
    render() {
        return(
            <div className="mid-services">
                <Menu/>
                <ChatBote/>
            <div className="mid-title">
                <h1>Hello</h1>
      
            </div>
            <br></br>

            <div className="services">
                <h1>Services</h1>
            </div>
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Gmail} alt="gmail"/> 
                <h1 className="detailes">Gmail </h1>

                </div>

            </div>
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Discord} alt="gmail"/> 
                <h1 className="detailes">Discord</h1>
                </div>
            </div>
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Github} alt="gmail"/> 
                <h1 className="detailes">Github</h1>
                </div>
            </div>
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Weather} alt="gmail"/> 
                <h1 className="detailes">Weather</h1>
                </div>
            </div>
     
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Reddit} alt="gmail"/> 
                <h1 className="detailes">Reddit</h1>
                </div>
            </div>
            <div className="carde">
                <div className="containers">
                <br></br>
                <img className="gmail" src={Youtube} alt="gmail"/> 
                <h1 className="detailes">Youtube</h1>
                </div>
            </div>

            </div>

        );
    };
}

export default Services;