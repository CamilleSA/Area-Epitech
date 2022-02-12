/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Weather from '../../media/weather.png'
import Github from '../../media/github.png'
import { If, Then} from 'react-if-elseif-else-render';


class WeatherGithubServices extends Component {

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


    <option value="1" className="Discord">&#xf2c7; It is Raining</option>
    <option value="2" className="Weather">&#xf2c7; Weather Change</option>
    <option value="5" className="Gmail">&#xf09b; New Repository</option>
    <option value="6" className="Weather">&#xf09b; New Organization  </option>

    <option value="7" className="Reddit">&#xf09b; New Commit</option>
    <option value="8" className="Weather">&#xf09b; New Branch</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="9" className="Gmail">&#xf09b; Create Comment</option>
    <option value="10" className="Reddit">&#xf09b; Create Issue</option>
    <option value="11" className="Discord">&#xf09b; Delete Repository</option>

  </select>

</div>
<If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Weather Change, Create Comment to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./weatherchange-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Weather Change, Create Issue to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./weatherchange-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Weather Change, Delete Repository to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./weatherchange-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">It is Raining, Create Comment to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./itisraining-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">It is Raining, Create Issue to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./itisraining-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Weather} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">It is Raining, Delete Repository to Github</h1>

                <h2 className="subdetailes">Weather   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./itisraining-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 10 }>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 11 }>
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
   
        <If condition={  this.state.value == 6  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 6 && this.state.value2 == 10 }>
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
        <If condition={  this.state.value == 6 && this.state.value2 == 11 }>
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
     
        <If condition={  this.state.value == 7  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 7 && this.state.value2 == 10 }>
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
        <If condition={  this.state.value == 7 && this.state.value2 == 11 }>
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
        <If condition={  this.state.value == 8  && this.state.value2 == 9}>
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
        <If condition={  this.state.value == 8 && this.state.value2 == 10 }>
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
        <If condition={  this.state.value == 8 && this.state.value2 == 11 }>
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
       
      </div>

  



      );
    
};
}


export default WeatherGithubServices;