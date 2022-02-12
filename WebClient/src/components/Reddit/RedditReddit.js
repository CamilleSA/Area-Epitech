/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Pornhub from '../../media/Pornhub_Logo.jpg'
import { If, Then} from 'react-if-elseif-else-render';
import Reddit from '../../media/reddit.png'


class PornhubPornhubServices extends Component {

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
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="5" className="Gmail">&#xf281; New Link Post</option>
  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 5}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Pornhub   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 5}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Pornhub   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 5}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Pornhub   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 5}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Pornhub   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
      
      </div>

  



      );
    
};
}


export default PornhubPornhubServices;