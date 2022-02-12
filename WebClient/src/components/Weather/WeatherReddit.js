/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Weather from '../../media/weather.png'
import Reddit from '../../media/reddit.png'
import { If, Then } from 'react-if-elseif-else-render';


class WeatherRedditServices extends Component {

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

    <option value="1" className="Reddit">&#xf2c7; It is Raining</option>
    <option value="2" className="Weather">&#xf2c7; Weather Change</option>

  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="9" className="Gmail">&#xf281; New Link Post</option>

  </select>

</div>
<If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="Reddit"/> 
                <img className="discord" src={Reddit} alt="Reddit"/> 

                <h1 className="details">Weather Change, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Weather   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./weatherchange-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 9 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="Reddit"/> 
                <img className="discord" src={Reddit} alt="Reddit"/> 

                <h1 className="details">It is Raining, New Link Post to Reddit</h1>

                <h2 className="subdetailes">Weather   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./itisraining-linkpost">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 4 && this.state.value2 == 9 }>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 6 && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Reddit} alt="gmail"/> 
                <img className="discord" src={Reddit} alt="gmail"/> 

                <h1 className="details">New Comment Matching Search in Reddit, New Link Post to Reddit </h1>

                <h2 className="subdetailes">Reddit   +  Reddit</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
       
      </div>

  



      );
    
};
}


export default WeatherRedditServices;