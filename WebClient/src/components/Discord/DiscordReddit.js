/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Discord from '../../media/discorde.png';
import Reddit from '../../media/reddit.png'
import { If, Then} from 'react-if-elseif-else-render';


class DiscordRedditServices extends Component {

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

  <option value="5" className="Gmail">&#xf16e; Message in Channel</option>
  <option value="1" className="Gmail">&#xf281; New Comment by User</option>
    <option value="2" className="Reddit">&#xf281; New Hot Post in Subreddit</option>
    <option value="3" className="Reddit">&#xf281; New Post Matching Search</option>
    <option value="4" className="Weather">&#xf281; New Comment Matching Search</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="10" className="Gmail">&#xf281; New Link Post</option>
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

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Add Role in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Send Message in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Add Role in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Send Message in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Post Matching Search in Reddit, Add Role in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Post Matching Search in Reddit, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Post Matching Search in Reddit, Send Message in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Post Matching Search in Reddit, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Post Matching Search in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, Add Role in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, Send Message in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Reddit   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

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
        <If condition={  this.state.value == 5  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Discord   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
      </div>

  



      );
    
};
}


export default DiscordRedditServices;