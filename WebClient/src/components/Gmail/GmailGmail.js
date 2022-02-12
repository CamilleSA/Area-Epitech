/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Gmail from '../../media/gmail.png';
import { If, Then} from 'react-if-elseif-else-render';


class GmailServices extends Component {

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

    <option  value="7" className="Gmail">&#xf0e0; Send Email</option>
  
    <option value="9" className="Reddit">&#xf0e0; Email Response</option>
  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 7}>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 9 }>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 10}>
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
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
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
    
        <If condition={  this.state.value == 4 && this.state.value2 == 7}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 10}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 11}>
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


export default GmailServices;