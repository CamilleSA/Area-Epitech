/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Gmail from '../../media/gmail.png';
import Discord from '../../media/discorde.png';

import { If, Then} from 'react-if-elseif-else-render';


class GmailDiscordServices extends Component {

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



  <option  value="1" className="Gmail">&#xf0e0; New Email</option>
  
  
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="9" className="Gmail">&#xf16e; Add Role</option>
    <option  value="13" className="Gmail">&#xf16e; Remove Role of User</option>
    <option value="14" className="Reddit">&#xf16e; Send Message</option>
    <option value="15" className="Discord">&#xf16e; Rename an Channel</option>
    <option  value="16" className="Gmail">&#xf0e0; Send Email</option>
    <option value="17" className="Reddit">&#xf0e0; Email Response</option>
  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Add Role to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 13 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-removerole">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 14 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Send Message to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-sendmessage">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-renamechannel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Send Email to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-sendmail">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 17}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Email Response to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-mailresponse">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 18}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 19}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
      
      
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Add Role to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 13 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-removerole">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 14 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Send Message to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-sendmessage">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Gmail   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-renamechannel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Send Email to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-sendmail">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 17}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Email Response to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-mailresponse">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 18}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 19}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Gmail   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Add Role to Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 13 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-removerole">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 14 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Send Message to Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-sendmessage">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Discord   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-renamechannel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Send Email to Gmail</h1>

                <h2 className="subdetailes">Discord   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-sendmail">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 17}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Email Response to Gmail</h1>

                <h2 className="subdetailes">Discord   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-mailresponse">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 18}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Discord   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 19}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Message in channel in Discord, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Discord   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
            
      </div>

  



      );
    
};
}


export default GmailDiscordServices;