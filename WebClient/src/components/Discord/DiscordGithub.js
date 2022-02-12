/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Discord from '../../media/discorde.png';
import Github from '../../media/github.png'
import { If, Then } from 'react-if-elseif-else-render';


class DiscordGithubServices extends Component {

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
  
    <option value="1" className="Gmail">&#xf16e; Message in Channel</option>

    <option value="2" className="Gmail">&#xf09b; New Repository</option>
    <option value="3" className="Discord">&#xf09b; New Organization  </option>

    <option value="4" className="Reddit">&#xf09b; New Commit</option>
    <option value="5" className="Weather">&#xf09b; New Branch</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="9" className="Gmail">&#xf09b; Create Comment</option>
    <option value="10" className="Reddit">&#xf09b; Create Issue</option>
    <option value="11" className="Discord">&#xf09b; Delete Repository</option>
    <option  value="12" className="Gmail">&#xf16e; Add Role</option>
    <option  value="13" className="Gmail">&#xf16e; Remove Role of User</option>
    <option value="14" className="Reddit">&#xf16e; Send Message</option>
    <option value="15" className="Discord">&#xf16e; Rename an Channel</option>

  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Create Comment to Github</h1>

                <h2 className="subdetailes">Discord   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Create Issue to Github</h1>

                <h2 className="subdetailes">Discord   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Discord} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Message in Channel in Discord, Delete Repository to Github</h1>

                <h2 className="subdetailes">Discord   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./message-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 12}>
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
        <If condition={  this.state.value == 1  && this.state.value2 == 13}>
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
        <If condition={  this.state.value == 1  && this.state.value2 == 14}>
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
        <If condition={  this.state.value == 1  && this.state.value2 == 15}>
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
        <If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-createissue">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-createcomment">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Add Role to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Send Message to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-createissue">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-createcomment">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Add Role to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Send Message to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-createissue">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-createcomment">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Add Role to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Send Message to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-createissue">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-createcomment">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Add Role to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Remove Role of User to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Send Message to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Rename an Channel to Discord</h1>

                <h2 className="subdetailes">Github   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-renamechan">Make a Area !</a></button>

            </div>
          </Then>
        </If>
       
      </div>

  



      );
    
};
}


export default DiscordGithubServices;