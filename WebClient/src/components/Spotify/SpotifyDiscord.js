/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Discord from '../../media/discorde.png';
import Spotify from '../../media/logoSpotify.png'
import { If, Then} from 'react-if-elseif-else-render';


class SpotifyDiscordServices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'hide',
      value2: 'hide'
    };
  }

  componentDidMount() {

  }

 divstatus = (e) =>{
   this.setState({value: e.target.value});
 }

  divstatuse = (e) =>{
    this.setState({value2: e.target.value});
  }


    render() { 
  
  
  
      
      return (  

     
      

<div className="serviceje">
<h3 className="subsl">When this happens...</h3>
<h3 className="subsle">then do this !</h3>
<h3 className="subslo">.........<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>.........</h3>


<div class="box">
    
  <select onChange={this.divstatus}>
  <option value="hide" selected className="nose">Select an Action ...</option>

    <option value="1" className="Gmail">&#xf1bc; Search Artist</option>
    <option value="2" className="Spotify">&#xf1bc; Search Playlist</option>
    <option value="4" className="Weather">&#xf1bc; Search Track</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="6" className="Gmail">&#xf16e; Add Role</option>
  <option  value="7" className="Gmail">&#xf16e; Remove Role of User</option>
  <option  value="8" className="Gmail">&#xf16e; Send Message</option>
  <option  value="9" className="Gmail">&#xf16e; Rename an Channel</option>
  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Artist in Spotify, Add Role in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchartists-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Artist in Spotify, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchartists-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Artist in Spotify, Send Message in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchartists-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Artist in Spotify, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchartists-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Playlist in Spotify, Add Role in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchplaylists-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Playlist in Spotify, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchplaylists-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Playlist in Spotify, Send Message in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchplaylists-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Playlist in Spotify, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchplaylists-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
      
        <If condition={  this.state.value == 4  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Track in Spotify, Add Role in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchtracks-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Track in Spotify, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchtracks-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Track in Spotify, Send Message in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchtracks-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Spotify} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Track in Spotify, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Spotify   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./searchtracks-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>

        <If condition={  this.state.value == 5  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Add Role in Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Send Message in Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
       
      </div>

  



      );
    
};
}


export default SpotifyDiscordServices;