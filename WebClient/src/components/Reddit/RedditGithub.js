/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Pornhub from '../../media/Pornhub_Logo.jpg'
import Github from '../../media/github.png'
import { If, Then} from 'react-if-elseif-else-render';


class PornhubGithubServices extends Component {

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
    <option value="2" className="Pornhub">&#xf05e; Search Gif by Title</option>
    <option value="4" className="Pornhub">&#xf05e; Search Video by Author</option>
    <option value="3" className="Weather">&#xf05e; Search Gif by Author</option>
    <option value="13" className="Weather">&#xf05e; Search Video by Category</option>
  <option value="14" className="Weather">&#xf05e; Search Gif by Category</option>
    <option value="5" className="Gmail">&#xf09b; New Repository</option>
    <option value="6" className="Pornhub">&#xf09b; New Organization  </option>

    <option value="7" className="Pornhub">&#xf09b; New Commit</option>
    <option value="8" className="Weather">&#xf09b; New Branch</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>
  <option  value="9" className="Gmail">&#xf09b; Create Comment</option>
    <option value="10" className="Pornhub">&#xf09b; Create Issue</option>
    <option value="11" className="Discord">&#xf09b; Delete Repository</option>

  </select>

</div>
<If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>
            </div> 
          </Then>
        </If>  
        <If condition={  this.state.value == 13  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 13 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 13 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 14  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 14 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 14 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
  
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>
            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>
            </div> 
          </Then>
        </If> 
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Create Comment to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Create Issue to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Delete Repository to Github</h1>

                <h2 className="subdetailes">Pornhub   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 12}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>
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
        <If condition={  this.state.value == 5 && this.state.value2 == 12 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Repository in Github, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Github   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-linkpost">Make a Area !</a></button>

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
        <If condition={  this.state.value == 6 && this.state.value2 == 12 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Github   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-linkpost">Make a Area !</a></button>

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
        <If condition={  this.state.value == 7 && this.state.value2 == 12 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Commit in Github, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Github   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-linkpost">Make a Area !</a></button>

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
        <If condition={  this.state.value == 8 && this.state.value2 == 12 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">New Branch in Github, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Github   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-linkpost">Make a Area !</a></button>

            </div>          
            </Then>
        </If>         
      </div>

  



      );
    
};
}


export default PornhubGithubServices;