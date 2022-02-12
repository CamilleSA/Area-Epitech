/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Gmail from '../../media/gmail.png';
import Pornhub from '../../media/Pornhub_Logo.jpg'
import { If, Then} from 'react-if-elseif-else-render';


class PornhubGmailServices extends Component {

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

    <option value="1" className="Gmail">&#xf05e; Search Video by Title</option>
    <option value="2" className="Youtube">&#xf05e; Search Gif by Title</option>
    <option value="3" className="Pornhub">&#xf05e; Search Video by Author</option>
    <option value="4" className="Weather">&#xf05e; Search Gif by Author</option>
    <option value="13" className="Weather">&#xf05e; Search Video by Category</option>
    <option value="14" className="Weather">&#xf05e; Search Gif by Category</option>
    <option value="5" className="Gmail">&#xf0e0; New Email</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>
  <option  value="10" className="Gmail">&#xf0e0; Send Email</option>
    <option value="11" className="Pornhub">&#xf0e0; Email Response</option>
  </select>

</div>
<If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Hot Post in SubPornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
<If condition={  this.state.value == 2  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-mailresponse">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Hot Post in SubPornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
<If condition={  this.state.value == 13  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 13 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-mailresponse">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 14  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 14 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-mailresponse">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Comment by User in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
<If condition={  this.state.value == 1  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite">Make a Area !</button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
<If condition={  this.state.value == 3  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-mailresponse">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
<If condition={  this.state.value == 4  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Send Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-sendmail">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Email Response to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-mailresponse">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Create an Label to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-createlabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 13}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Gmail} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Delete an Label of Email to Gmail</h1>

                <h2 className="subdetailes">Pornhub   +  Gmail</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-deletelabel">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Email in Gmail, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Gmail   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newmail-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 10 }>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 11 }>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 12}>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 13}>
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
 
  

    
        <If condition={  this.state.value == 8  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Gmail} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Label in Gmail, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Gmail   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newlabel-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 10}>
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
        <If condition={  this.state.value == 8 && this.state.value2 == 11}>
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
        <If condition={  this.state.value == 8 && this.state.value2 == 12}>
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
        <If condition={  this.state.value == 8 && this.state.value2 == 13}>
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

      </div>

  



      );
    
};
}


export default PornhubGmailServices;