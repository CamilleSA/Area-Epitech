/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Gmail from '../../media/gmail.png';
import Reddit from '../../media/reddit.png'
import { If, Then} from 'react-if-elseif-else-render';


class GmailRedditServices extends Component {

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

    <option  value="9" className="Gmail">&#xf281; New Link Post</option>
    <option  value="13" className="Gmail">&#xf0e0; Send Email</option>
    <option value="14" className="Reddit">&#xf0e0; Email Response</option>
  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Gmail   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 13 }>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 14 }>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 15}>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 16}>
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
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Gmail   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 13}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 14}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 15}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 16}>
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

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Send Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Email Response to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite">Make a Area !</button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-createlabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Comment by User in Reddit, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-deletelabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 6  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 6 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Send Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Email Response to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-mailresponse">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-createlabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New Hot Post in Subreddit, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-deletelabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New post matching search in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New post matching search in Reddit, Send Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New post matching search in Reddit, Email Response to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-mailresponse">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New post matching search in Reddit, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-createlabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New post matching search in Reddit, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-deletelabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New comment matching search in Reddit, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New comment matching search in Reddit, Send Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 14}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New comment matching search in Reddit, Email Response to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-mailresponse">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 15}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New comment matching search in Reddit, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-createlabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 16}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">New comment matching search in Reddit, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Reddit   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-deletelabel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
            
      </div>

  



      );
    
};
}


export default GmailRedditServices;